'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Sticker, WashiTape } from '@/components/scrapbook';

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
  const emojis = ['✨', '🚀', '💻', '🎮', '🎧', '🍕', '🏀', '📚'];
  const [emoji, setEmoji] = useState('💻');

  useEffect(() => {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  }, []);

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative bg-scrapbook-kraft/30 pt-8 pb-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="absolute top-4 left-8 hidden md:block">
        <Sticker variant="heart" size="sm" color="coral" rotation={-15} animate={false} />
      </div>
      <div className="absolute top-4 right-12 hidden md:block">
        <Sticker variant="star" size="sm" color="mustard" rotation={20} animate={false} />
      </div>
      <div className="absolute bottom-2 left-1/4 hidden lg:block">
        <WashiTape color="pink" width="sm" rotation={-10} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-4 text-center">
          <p className="font-handwriting text-lg text-gray-700">Made with {emoji} and lots of coffee in Calabar, Nigeria ☕</p>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 font-sketch text-gray-600 hover:text-scrapbook-coral transition-colors text-sm md:text-base group"
            aria-label="Back to top"
          >
            <span className="transform group-hover:-translate-y-1 transition-transform">↑</span>
            <span>Back to top</span>
          </button>

          <div className="font-handwriting text-center text-gray-600 text-sm md:text-lg mx-2">
            {currentYear} © Kelvin's Digital Playground 🎨
          </div>

          <a
            href="#contact"
            className="flex items-center gap-1 font-sketch text-gray-600 hover:text-scrapbook-coral transition-colors text-sm md:text-base group"
          >
            <span>Say hi</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
