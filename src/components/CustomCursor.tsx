'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

// Custom hook for touch detection
const useTouchDetection = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouch = () => {
      const hasTouchAPI =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;

      let hasMouseEvents = false;

      const mouseDetect = () => {
        hasMouseEvents = true;
        cleanup();
      };

      window.addEventListener('mousemove', mouseDetect, { once: true });
      window.addEventListener('mousedown', mouseDetect, { once: true });

      const cleanup = () => {
        window.removeEventListener('mousemove', mouseDetect);
        window.removeEventListener('mousedown', mouseDetect);
      };

      setTimeout(() => {
        cleanup();
        setIsTouchDevice(hasTouchAPI && !hasMouseEvents);
      }, 500);
    };

    detectTouch();
  }, []);

  return isTouchDevice;
};

// Cursor character component
const CursorCharacter = ({
  cursorXSpring,
  cursorYSpring,
  isLoading,
  isClicking,
  isHovering,
}: {
  cursorXSpring: any;
  cursorYSpring: any;
  isLoading: boolean;
  isClicking: boolean;
  isHovering: boolean;
}) => {
  // Determine character expression based on state
  const getExpression = () => {
    if (isLoading) return '😴'; // Sleeping
    if (isClicking) return '😮'; // Surprised
    if (isHovering) return '😊'; // Happy
    return '😐'; // Neutral
  };

  return (
    <>
      {/* Main cursor character */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isLoading ? 1.2 : isClicking ? 0.8 : isHovering ? 1.5 : 1,
            rotate: isClicking ? [0, -10, 10, -10, 0] : 0,
          }}
          transition={{
            duration: isLoading ? 0.3 : isClicking ? 0.2 : 0.2,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            {/* Character face */}
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-lg">
              {getExpression()}
            </div>

            {/* Character body */}
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"
              animate={{
                y: isClicking ? 2 : 0,
                scale: isClicking ? 0.8 : 1,
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Interaction effects */}
      <AnimatePresence>
        {isClicking && !isLoading && (
          <motion.div
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
            initial={{ opacity: 0.5, scale: 0 }}
            animate={{ opacity: 0, scale: 1.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute w-8 h-8 rounded-full border-2 border-black -ml-4 -mt-4" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Loading animation */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 z-[9997] pointer-events-none"
            style={{
              x: cursorXSpring,
              y: cursorYSpring,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360],
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="absolute w-12 h-12 rounded-full border-2 border-black/30 -ml-6 -mt-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isTouchDevice = useTouchDetection();

  const springConfig = { damping: 15, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname, searchParams, mounted, isTouchDevice]);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Regular hovering detection
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY, mounted, isTouchDevice]);

  if (!mounted || isTouchDevice) {
    return null;
  }

  return (
    <CursorCharacter
      cursorXSpring={cursorXSpring}
      cursorYSpring={cursorYSpring}
      isLoading={isLoading}
      isClicking={isClicking}
      isHovering={isHovering}
    />
  );
}
