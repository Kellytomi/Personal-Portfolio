"use client";

import { ReactNode, useEffect, useState } from 'react';

interface PageFadeInProps {
  children: ReactNode;
}

export default function PageFadeIn({ children }: PageFadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to ensure the component has mounted
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Add loaded class to body to trigger background image
      document.body.classList.add('loaded');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      style={{ 
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        visibility: isVisible ? 'visible' : 'hidden'
      }}
    >
      {children}
    </div>
  );
} 