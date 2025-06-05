'use client';
import React, { useState, createContext, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const ROTATION_RANGE = 50; // Maximum rotation range in degrees

// Context for managing active pin state globally
const PinContext = createContext<{
  activePinId: string | null;
  setActivePinId: (id: string | null) => void;
}>({
  activePinId: null,
  setActivePinId: () => {},
});

// Provider component to wrap around components that use 3D pins
export const PinProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePinId, setActivePinId] = useState<string | null>(null);

  return (
    <PinContext.Provider value={{ activePinId, setActivePinId }}>{children}</PinContext.Provider>
  );
};

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
  id, // Add unique ID for each pin
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
  id?: string;
}) => {
  const { activePinId, setActivePinId } = useContext(PinContext);
  const pinId = id || Math.random().toString(36).substr(2, 9); // Generate unique ID if not provided

  const [transform, setTransform] = useState('translate(-50%,-50%) rotateX(0deg)');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  // Check if this pin is currently active
  const isActive = activePinId === pinId;

  // Reset pin when another pin becomes active
  useEffect(() => {
    if (!isActive) {
      // Always reset transform when pin becomes inactive
      setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
      setIsHovered(false);
      setIsTouching(false);
    }
  }, [isActive]);

  // Original desktop hover behavior
  const onMouseEnter = () => {
    if (!isTouching) {
      // Don't interfere with touch interactions
      setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
      setIsHovered(true);
      setActivePinId(pinId);
    }
  };

  const onMouseLeave = () => {
    if (!isTouching) {
      // Don't interfere with touch interactions
      setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
      setIsHovered(false);
      setActivePinId(null);
    }
  };

  // Mobile touch handlers - single unified handler
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsTouching(true);

    // Toggle pin visibility on touch
    const newShowPin = !isActive;

    if (newShowPin) {
      setActivePinId(pinId);
      // Start with a subtle tilt when showing pin
      setTransform(
        `translate(-50%,-50%) rotateX(${ROTATION_RANGE / 4}deg) rotateY(${ROTATION_RANGE / 4}deg)`
      );
    } else {
      setActivePinId(null);
      // Reset when hiding pin
      setTransform('translate(-50%,-50%) rotateX(0deg) scale(1)');
    }
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    // Only allow move if pin is showing
    if (!isActive || !isTouching) return;

    e.preventDefault();

    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const touch = e.touches[0];

    const relativeX = (touch.clientX - rect.left) / rect.width;
    const relativeY = (touch.clientY - rect.top) / rect.height;

    const tiltX = (relativeY - 0.5) * ROTATION_RANGE;
    const tiltY = (relativeX - 0.5) * -ROTATION_RANGE;

    const newTransform = `translate(-50%,-50%) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    setTransform(newTransform);
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();

    // Only reset transform if pin is still showing, otherwise keep it hidden
    if (isActive) {
      setTransform('translate(-50%,-50%) rotateX(40deg) scale(0.8)');
    }

    // Reset touching state after a small delay to prevent mouse events from interfering
    setTimeout(() => setIsTouching(false), 100);
  };

  return (
    <div
      className={cn('relative group/pin z-50 cursor-pointer', containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        style={{
          perspective: '1000px',
          transform: 'rotateX(70deg) translateZ(0deg)',
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: transform,
          }}
          className="absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-white border border-gray-200 group-hover/pin:border-primary/30 transition duration-700 overflow-hidden"
        >
          <div className={cn('relative z-50', className)}>{children}</div>
        </div>
      </div>
      <PinPerspective
        title={title}
        href={href}
        showPin={isActive}
        isHovered={isHovered && !isTouching}
      />
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
  showPin,
  isHovered,
}: {
  title?: string;
  href?: string;
  showPin?: boolean;
  isHovered?: boolean;
}) => {
  return (
    <motion.div
      className={`pointer-events-none w-72 sm:w-80 md:w-96 h-64 sm:h-72 md:h-80 flex items-center justify-center z-[60] transition duration-500 ${
        showPin || isHovered ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-full h-full -mt-4 sm:-mt-6 md:-mt-7 flex-none inset-0">
        <div className="absolute top-0 inset-x-0 flex justify-center">
          <a
            href={href}
            target={'_blank'}
            className="relative flex space-x-2 items-center z-10 rounded-full bg-primary py-0.5 px-3 sm:px-4 ring-1 ring-primary/20"
          >
            <span className="relative z-20 text-white text-xs font-bold inline-block py-0.5">
              {title}
            </span>

            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-white/0 via-white/90 to-white/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
          </a>
        </div>

        <div
          style={{
            perspective: '1000px',
            transform: 'rotateX(70deg) translateZ(0)',
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-2 sm:mt-3 md:mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 0,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 2,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                x: '-50%',
                y: '-50%',
              }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
                z: 0,
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
              className="absolute left-1/2 top-1/2 h-32 w-32 sm:h-40 sm:w-40 md:h-[11.25rem] md:w-[11.25rem] rounded-[50%] bg-primary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-16 sm:h-20 group-hover/pin:h-32 sm:group-hover/pin:h-40 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-primary translate-y-[14px] w-px h-16 sm:h-20 group-hover/pin:h-32 sm:group-hover/pin:h-40" />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-primary translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-primary translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
