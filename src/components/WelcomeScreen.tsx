'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AuroraBackground } from '@/components/ui/aurora-background';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const greetings = [
  { text: 'Hello', language: 'English' },
  { text: 'Hola', language: 'Español' },
  { text: 'Bonjour', language: 'Français' },
  { text: 'こんにちは', language: '日本語' },
];

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (currentIndex < greetings.length - 1) {
      const timer = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      // Automatically go to portfolio after the last greeting
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onComplete();
        }, 500);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, onComplete]);

  const handleSkip = () => {
    // Skip directly to portfolio
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <AuroraBackground className="bg-gradient-to-br from-primary via-secondary to-primary">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-8 items-center justify-center px-8 text-center"
        >
          {/* Main greeting */}
          <div className="mb-4">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-6xl md:text-8xl font-display font-bold text-white mb-4"
            >
              {greetings[currentIndex].text}
            </motion.h1>
            <motion.p
              key={`lang-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-200 text-lg md:text-xl font-medium"
            >
              {greetings[currentIndex].language}
            </motion.p>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {greetings.map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentIndex ? 'bg-blue-300' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Skip button (visible during carousel) */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={handleSkip}
            className="text-white/60 hover:text-white text-sm transition-colors duration-300 underline"
          >
            Skip
          </motion.button>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
