"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export function Button({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-sm",
        containerClassName,
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(var(--primary)_60%,transparent_80%)] opacity-[1]",
              borderClassName,
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-primary/20 bg-white text-primary shadow-sm hover:shadow-md transition-all duration-300",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);
  const [isReady, setIsReady] = useState(false);

  // Check if SVG is ready
  useEffect(() => {
    const checkSVGReady = () => {
      if (pathRef.current) {
        try {
          const length = pathRef.current.getTotalLength();
          if (length > 0) {
            setIsReady(true);
          }
        } catch {
          // SVG not ready yet
        }
      }
    };

    // Check immediately and after a small delay
    checkSVGReady();
    const timer = setTimeout(checkSVGReady, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useAnimationFrame((time) => {
    // Only animate if SVG is ready and visible
    if (!pathRef.current || !isReady) return;
    
    try {
      const length = pathRef.current.getTotalLength();
      if (length && length > 0) {
        const pxPerMillisecond = length / duration;
        progress.set((time * pxPerMillisecond) % length);
      }
    } catch (error) {
      // Silently handle SVG errors on mobile/non-rendered elements
      setIsReady(false);
    }
  });

  const x = useTransform(
    progress,
    (val) => {
      if (!isReady) return 0;
      try {
        return pathRef.current?.getPointAtLength(val)?.x || 0;
      } catch {
        return 0;
      }
    },
  );
  
  const y = useTransform(
    progress,
    (val) => {
      if (!isReady) return 0;
      try {
        return pathRef.current?.getPointAtLength(val)?.y || 0;
      } catch {
        return 0;
      }
    },
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      {isReady && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}; 