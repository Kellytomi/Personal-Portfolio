'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import AnimatedTooltipDemo from '@/components/AnimatedTooltipDemo';

interface HeroSectionProps {
  isLoading: boolean;
}

export default function HeroSection({ isLoading }: HeroSectionProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <section
      className="min-h-[85vh] flex items-center pt-16 sm:pt-20 md:pt-16 lg:pt-0 relative"
      ref={containerRef}
    >
      {/* Direct grid background with inline styles */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(/grid-pattern.svg)',
          backgroundSize: '30px 30px',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: 0.5,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface/30 to-transparent" />

      <motion.div className="absolute inset-0" style={{ y }} />
      <div className="absolute inset-0 bg-gradient-to-b from-surface/50 via-surface/50 to-white/30" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div className="text-center lg:text-left mt-4 sm:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                <span className="relative inline-flex mr-2">
                  <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                  <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
                </span>
                Open to new projects
              </div>
              <h4 className="text-primary font-medium mb-2 md:mb-3">
                Hey there, I'm Etoma-etoto (Kelvin) Odi 👋
              </h4>
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-bold mb-4 md:mb-5">
                I build <span className="text-black">awesome digital stuff</span> that{' '}
                <FlipWords
                  words={['people love', 'users enjoy', 'clients adore', 'founders need']}
                  className="gradient-text"
                />
              </h1>
              <p className="text-base sm:text-lg mb-6 md:mb-8 text-muted max-w-xl mx-auto lg:mx-0">
                When I'm not coding, you'll find me playing volleyball, binging Netflix shows, or
                experimenting with new recipes. My passion is creating digital experiences that make
                people's lives easier and more enjoyable.
              </p>

              {/* Trusted by section with animated tooltips */}
              <div className="flex flex-col items-center lg:items-start mb-6 md:mb-8">
                <p className="text-sm text-muted mb-4">Trusted by amazing people</p>
                <AnimatedTooltipDemo />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 sm:mb-0 mb-10 max-w-md mx-auto lg:mx-0">
                <Link href="/about" className="cta-button">
                  <span>Get to know me</span>
                </Link>
                <Link href="/projects" className="btn btn-secondary text-center">
                  See my work
                </Link>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 20 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:block relative"
          >
            <div className="relative h-[60vh] max-h-[600px] rounded-xl overflow-hidden">
              <Image
                src="/profile-casual.jpg"
                alt="Kelvin smiling"
                fill
                className="object-cover rounded-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent mix-blend-multiply rounded-xl" />
            </div>

            {/* Floating highlighted box with personal touch */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-card p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🎮</span>
                </div>
                <h3 className="font-bold">Fun fact</h3>
              </div>
              <p className="text-sm text-muted">
                I once stayed up 48 hours straight to finish a game jam project. Worth it!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll to explore animation */}
        <motion.div
          className="flex flex-col items-center text-center text-gray-500 mt-12 md:mt-16 mb-0"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="text-sm mb-1">Scroll down for more</p>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
