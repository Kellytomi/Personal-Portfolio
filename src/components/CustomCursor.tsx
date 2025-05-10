"use client";

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // For detecting route changes
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Create spring animations for smoother cursor movement
  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Handle component mounting
  useEffect(() => {
    setMounted(true);
    
    // Detect if it's a touch device (more reliable than screen size)
    const detectTouch = () => {
      // Check for touch capability
      const hasTouchAPI = 'ontouchstart' in window || 
                          navigator.maxTouchPoints > 0 || 
                          (navigator as any).msMaxTouchPoints > 0;
      
      // Check for mouse events to differentiate tablets with mouse
      let hasMouseEvents = false;
      
      const mouseDetect = () => {
        hasMouseEvents = true;
        cleanup();
      };
      
      // Add mouse-specific event listeners temporarily
      window.addEventListener('mousemove', mouseDetect, { once: true });
      window.addEventListener('mousedown', mouseDetect, { once: true });
      
      const cleanup = () => {
        window.removeEventListener('mousemove', mouseDetect);
        window.removeEventListener('mousedown', mouseDetect);
      };
      
      // Wait a short time to detect mouse usage
      setTimeout(() => {
        cleanup();
        // It's a touch device if it has touch capabilities AND no mouse events detected
        setIsTouchDevice(hasTouchAPI && !hasMouseEvents);
      }, 500);
    };
    
    detectTouch();
  }, []);

  // Handle loading state during route changes
  useEffect(() => {
    if (!mounted || isTouchDevice) return;
    
    setIsLoading(true);
    
    // Wait for page animations to finish (approximately)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // Reduced from 1200ms to 600ms
    
    return () => clearTimeout(timer);
  }, [pathname, searchParams, mounted, isTouchDevice]);

  useEffect(() => {
    if (!mounted || isTouchDevice) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Track when cursor is over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
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
    
    // Track mouse down/up for click effect
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
  
  // Don't render anything on server, before mounting, or on touch devices
  if (!mounted || isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main outer cursor */}
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
            opacity: isLoading ? 0.7 : isHovering ? 0.5 : 0.8,
          }}
          transition={{ 
            duration: isLoading ? 0.3 : isClicking ? 0.1 : 0.2,
            ease: "easeInOut"
          }}
        >
          <div 
            className={`absolute w-8 h-8 rounded-full border-2 ${
              isLoading
                ? 'border-black border-t-transparent' 
                : 'border-black'
            } -ml-4 -mt-4 transition-colors duration-300`}
          />
        </motion.div>
      </motion.div>

      {/* Smaller inner cursor */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="relative flex items-center justify-center"
          animate={{
            scale: isLoading ? 0.6 : isClicking ? 1.5 : isHovering ? 0.5 : 1,
            opacity: 1,
          }}
          transition={{ 
            duration: isClicking ? 0.1 : 0.2,
            ease: "easeInOut"
          }}
        >
          <div 
            className={`absolute w-2 h-2 rounded-full -ml-1 -mt-1 bg-black transition-colors duration-300`}
          />
        </motion.div>
      </motion.div>
      
      {/* Click ripple effect */}
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
            <div className="absolute w-8 h-8 rounded-full border border-black -ml-4 -mt-4" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Loading indicator with secondary ring */}
      <AnimatePresence>
        {isLoading && (
          <>
            <motion.div
              className="fixed top-0 left-0 z-[9997] pointer-events-none"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: [0.1, 0.3, 0.1], scale: [0.8, 1.2, 0.8] }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ 
                duration: 0.8, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute w-10 h-10 rounded-full border border-black/30 -ml-5 -mt-5" />
            </motion.div>
            
            <motion.div
              className="fixed top-0 left-0 z-[9996] pointer-events-none"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: [0.05, 0.2, 0.05], scale: [1, 1.5, 1] }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            >
              <div className="absolute w-14 h-14 rounded-full border border-black/20 -ml-7 -mt-7" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
} 