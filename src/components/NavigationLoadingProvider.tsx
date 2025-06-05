'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function NavigationLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Detect navigation start by intercepting all link clicks
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]') as HTMLAnchorElement;
      
      if (link && link.href && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);
        
        // Only show loading for different pages (not same page anchors)
        if (url.pathname !== currentUrl.pathname || url.search !== currentUrl.search) {
          startLoading();
        }
      }
    };

    // Also detect programmatic navigation
    const startLoading = () => {
      setIsLoading(true);
      setProgress(15);

      // Progressive loading with realistic timings
      const timer1 = setTimeout(() => setProgress(40), 150);
      const timer2 = setTimeout(() => setProgress(70), 400);
      const timer3 = setTimeout(() => setProgress(90), 800);
      
      // Auto-complete after reasonable time if page hasn't loaded
      const autoComplete = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 300);
      }, 2000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(autoComplete);
      };
    };

    // Listen for actual page load completion
    const handlePageLoad = () => {
      if (isLoading) {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
        }, 200);
      }
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('load', handlePageLoad);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('load', handlePageLoad);
    };
  }, [isLoading]);

  return (
    <>
      {/* Navigation Loading Bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            initial={{ scaleX: 0, transformOrigin: 'left' }}
            animate={{ scaleX: progress / 100 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        )}
      </AnimatePresence>

      {children}
    </>
  );
} 