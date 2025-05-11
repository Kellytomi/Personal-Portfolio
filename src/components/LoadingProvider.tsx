"use client";

import { ReactNode, useEffect, useState } from 'react';

interface LoadingProviderProps {
  children: ReactNode;
}

export default function LoadingProvider({ children }: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Function to handle when page is fully loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Add class to body when loaded
        document.body.classList.remove('loading');
      }, 300);
    };

    // Add loading class to body
    document.body.classList.add('loading');

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout in case load event doesn't fire
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 1000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-animation"></div>
        </div>
      )}
      {children}
    </>
  );
} 