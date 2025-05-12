'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ComingSoonSocialCard from '@/components/ComingSoonSocialCard';
import { siteConfig } from '@/config/site';

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [countdownComplete, setCountdownComplete] = useState(false);

  // Always use the date directly from config
  useEffect(() => {
    // Get the target date directly from config
    const targetDate = siteConfig.launchDate;
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        // Timer expired
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setCountdownComplete(true);
        
        // Store that the site has launched
        localStorage.setItem('siteHasLaunched', 'true');
        
        // Redirect after a short delay to show zeros
        setTimeout(() => {
          window.location.href = '/';
        }, 1500);
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main message */}
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-3xl font-light tracking-wide mb-20 leading-relaxed"
        >
          Something Amazing Is Coming.
        </motion.h1>
        
        {/* Countdown timer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20"
        >
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="bg-gray-900 p-6 md:py-8 rounded-lg">
              <div className="text-4xl md:text-7xl font-light mb-2">
                {value}
              </div>
              <div className="text-sm uppercase tracking-widest text-gray-400 font-light">
                {unit}
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Message */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-300 font-light mb-20"
        >
          I'm working on something exciting. Stay tuned for an amazing portfolio showcase!
        </motion.p>
        
        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-16"
        >
          <ComingSoonSocialCard className="justify-center" />
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="mailto:hello@yourwebsite.com">
              <button className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-light tracking-wide text-sm rounded-full hover:bg-white/5 transition-colors duration-300 flex items-center gap-3 justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                GET IN TOUCH
              </button>
            </Link>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link href="#notify">
              <button 
                onClick={() => alert('You\'ll be notified when we launch!')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-medium tracking-wide text-sm rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center gap-3 justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                NOTIFY ME
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 