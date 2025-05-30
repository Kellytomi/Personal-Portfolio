'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ComingSoonSocialCard from '@/components/ComingSoonSocialCard';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { siteConfig } from '@/config/site';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown to launch date
  useEffect(() => {
    // Get the target date directly from config
    const targetDate = siteConfig.launchDate;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Timer expired - show all zeros
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-50/30 to-blue-100/50 relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />
      
      <div className="w-full max-w-6xl mx-auto px-6 py-12 text-center relative z-10">
        {/* Logo area - reduced margin-bottom from mb-4 to mb-2 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          {/* Actual logo image */}
          <Link href="/">
            <div className="flex justify-center">
              <Image 
                src="/images/etoma.png" 
                alt="Etoma Logo" 
                width={200} 
                height={100}
                priority
                className="h-auto drop-shadow-lg"
              />
            </div>
          </Link>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-2 tracking-tight">
            <span className="text-gray-900">Portfolio</span> <span className="text-blue-500 italic font-normal">launching</span> <span className="text-gray-900">soon.</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Creating a portfolio that showcases my skills and work experience.
            Stay tuned for the full experience.
          </p>
          
          {/* Countdown timer */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8">
            {[
              { label: 'days', value: timeLeft.days },
              { label: 'hours', value: timeLeft.hours },
              { label: 'minutes', value: timeLeft.minutes },
              { label: 'seconds', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="text-center bg-white/40 backdrop-blur-sm rounded-lg px-4 py-3 shadow-lg border border-white/20">
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                  {formatNumber(item.value)}
                </div>
                <div className="text-sm uppercase tracking-wider text-gray-500">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Email signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-3 mb-2 w-full">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-5 py-3 bg-white/80 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-200/50 placeholder:text-gray-500"
            />
            <button
              onClick={() => alert("You'll be notified when we launch!")}
              className="whitespace-nowrap px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors flex items-center gap-2 justify-center shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Notify me
            </button>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6"
        >
          <ComingSoonSocialCard className="justify-center" />
        </motion.div>
      </div>
    </div>
  );
} 