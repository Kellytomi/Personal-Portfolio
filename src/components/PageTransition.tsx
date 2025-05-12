"use client";

import { motion } from 'framer-motion';
import { ReactNode, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  // Effect to temporarily hide the body background grid during page transitions
  useEffect(() => {
    // Remove the loaded class to hide the grid background during transition
    document.body.classList.remove('loaded');
    
    // Add a small delay before showing the grid again to ensure the transition completes first
    const timer = setTimeout(() => {
      document.body.classList.add('loaded');
    }, 400); // Match this with the duration of the enter transition
    
    return () => {
      clearTimeout(timer);
      // Ensure the loaded class is removed on unmount to prevent flashing
      document.body.classList.remove('loaded');
    };
  }, []);

  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.98
    },
    enter: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1]  // Custom ease curve for smooth, professional effect
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.98,
      transition: { 
        duration: 0.2, 
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      exit="exit"
      onAnimationStart={() => {
        // Hide grid at the start of animation
        document.body.classList.remove('loaded');
      }}
      onAnimationComplete={() => {
        // Show grid when animation completes
        document.body.classList.add('loaded');
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 