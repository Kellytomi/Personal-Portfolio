'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import PageSpacer from '@/components/PageSpacer';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import PageFadeIn from '@/components/PageFadeIn';
import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// Lazy load heavy sections that appear below the fold
const PersonalStorySection = dynamic(() => import('@/components/PersonalStorySection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

const WhatIDoSection = dynamic(() => import('@/components/WhatIDoSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

const HowIWorkSection = dynamic(() => import('@/components/HowIWorkSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

const FeaturedProjectsSection = dynamic(() => import('@/components/FeaturedProjectsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

const CallToActionSection = dynamic(() => import('@/components/CallToActionSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-32" />,
  ssr: false,
});

export default function Home(): JSX.Element {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Hide loading screen after everything is loaded
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        // Add loaded class to body to trigger background image
        document.body.classList.add('loaded');
      }, 800); // Small delay to ensure smooth transition and show the animation
    };
    
    // If the window is already loaded, run immediately
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Apply loaded class immediately as well to ensure grid is visible
    document.body.classList.add('loaded');
    
    // Initial timeout in case load event doesn't fire
    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
    }, 2500); // Increased timeout to allow animation to be seen
    
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageTransition>
      <PageFadeIn>
        {/* Loading screen */}
        {isLoading && (
          <div className="loading-screen">
            <div className="loader">
              <div className="loader-cube">
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
                <div className="loader-face"></div>
              </div>
            </div>
            <div className="loading-text">CREATING EXPERIENCE</div>
            <div className="progress-bar"></div>
          </div>
        )}
        
        <main className={`min-h-screen bg-surface overflow-hidden ${isLoading ? 'loading' : ''}`}>
          <Navigation />
          <PageSpacer />
          
          {/* Hero Section */}
          <HeroSection isLoading={isLoading} />

          {/* Personal Story Section - Lazy Loaded */}
          <PersonalStorySection />

          {/* What I Do Section - Lazy Loaded */}
          <WhatIDoSection />

          {/* Services Section - Lazy Loaded */}
          <ServicesSection />

          {/* How I Work Section - Lazy Loaded */}
          <HowIWorkSection />

          {/* Featured Projects Section - Lazy Loaded */}
          <FeaturedProjectsSection />



          {/* Call to Action Section - Lazy Loaded */}
          <CallToActionSection />

            <Footer />
        </main>
      </PageFadeIn>
    </PageTransition>
  );
}
