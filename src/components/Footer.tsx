'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface FooterProps {
  variant?: 'black' | 'white';
}

export default function Footer({ variant = 'black' }: FooterProps): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const isWhite = variant === 'white';

  // Fun emoji array to randomly select from
  const emojis = ['✨', '🚀', '💻', '🎮', '🎧', '🍕', '🏀', '📚'];

  // Use state and effect to handle client-side rendering only
  const [emoji, setEmoji] = useState('💻');

  useEffect(() => {
    // Only run this on the client after hydration
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${isWhite ? 'bg-white text-black' : 'bg-consistent-black text-white'} pt-8 pb-6`}
    >
      <div className="container mx-auto px-4">
        <div className="mb-4 text-center">
          <p className={`text-sm ${isWhite ? 'text-black/70' : 'text-white/80'}`}>
            Made with {emoji} and lots of coffee in Calabar, Nigeria
          </p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className={`flex items-center gap-1 ${isWhite ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'} transition-colors text-xs sm:text-sm md:text-base`}
              aria-label="Back to top"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19V5M12 5L5 12M12 5L19 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Back to top</span>
            </button>
          </div>

          <div
            className={`text-center ${isWhite ? 'text-black/70' : 'text-white/80'} text-xs sm:text-sm md:text-base mx-2`}
          >
            {currentYear} © Kelvin's Digital Playground
          </div>

          <div className="flex items-center">
            <Link
              href="/contact"
              className={`flex items-center gap-1 ${isWhite ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-300'} transition-colors text-xs sm:text-sm md:text-base`}
            >
              Say hi
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
