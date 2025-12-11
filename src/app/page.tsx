'use client';

import Navigation from '@/components/Navigation';
import { useEffect, useState } from 'react';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import PageFadeIn from '@/components/PageFadeIn';
import HeroSection from '@/components/HeroSection';
import dynamic from 'next/dynamic';

// Lazy load heavy sections that appear below the fold
const PersonalStorySection = dynamic(() => import('@/components/PersonalStorySection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />,
  ssr: false,
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />,
  ssr: false,
});

const FeaturedProjectsSection = dynamic(() => import('@/components/FeaturedProjectsSection'), {
  loading: () => <div className="animate-pulse bg-gray-100 h-96" />,
  ssr: false,
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="animate-pulse bg-primary/20 h-96" />,
  ssr: false,
});

export default function Home(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.add('loaded');
        document.body.classList.add('body-decor');
      }, 600);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    document.body.classList.add('loaded');

    const timeout = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.add('loaded');
      document.body.classList.add('body-decor');
    }, 2000);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timeout);
      document.body.classList.remove('body-decor');
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
            <div className="loading-text">LOADING</div>
            <div className="progress-bar"></div>
          </div>
        )}

        <main className={`min-h-screen bg-surface overflow-hidden ${isLoading ? 'loading' : ''}`}>
          <Navigation />

          {/* Hero Section */}
          <section id="home">
            <HeroSection isLoading={isLoading} />
          </section>

          {/* About Section */}
          <section id="about">
            <PersonalStorySection />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <ServicesSection />
          </section>

          {/* Projects Section */}
          <FeaturedProjectsSection />

          {/* Contact Section */}
          <ContactSection />

          <Footer />
        </main>
      </PageFadeIn>
    </PageTransition>
  );
}
