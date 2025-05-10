"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer(): JSX.Element {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-consistent-black text-white py-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              aria-label="Back to top"
            >
              <svg 
                className="w-5 h-5" 
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
              <span>Back Top</span>
            </button>
          </div>
          
          <div className="text-center text-white/80">
            {currentYear} © Etoma-Etoto Kelvin Odi
          </div>
          
          <div className="flex items-center">
            <Link 
              href="/contact"
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              Contact Me
              <svg 
                className="w-5 h-5" 
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