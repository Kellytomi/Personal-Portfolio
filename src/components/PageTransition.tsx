"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
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
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 