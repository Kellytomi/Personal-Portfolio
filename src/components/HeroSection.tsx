'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import AnimatedTooltipDemo from '@/components/AnimatedTooltipDemo';
import { Sticker as UiSticker } from '@/components/ui/Sticker';
import { TextureOverlay } from '@/components/ui/TextureOverlay';
import {
  CutoutLetters,
  PaperBackground,
  ScrapbookFrame,
  Sticker as ScrapbookSticker,
  WashiTape,
} from '@/components/scrapbook';
import { useDevicePerformance } from '@/hooks/useDevicePerformance';

interface HeroSectionProps {
  isLoading: boolean;
}

export default function HeroSection({ isLoading }: HeroSectionProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLowPower } = useDevicePerformance();
  const reduceMotion = useReducedMotion();
  
  // Only use scroll-based animations on high-power devices
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Disable parallax on low-power devices (Android, mobile)
  const y = useTransform(scrollYProgress, [0, 1], ['0%', isLowPower ? '0%' : '50%']);
  
  // Skip infinite animations on low-power devices
  const skipAnimations = reduceMotion || isLowPower;

  return (
    <section className="min-h-[90vh] pt-16 sm:pt-40 md:pt-44 lg:pt-48 xl:pt-52 relative" ref={containerRef}>
      <PaperBackground variant="cream" className="absolute inset-0 pointer-events-none" hasTexture />
      <TextureOverlay opacity={0.45} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-surface/80 via-surface/70 to-surface/40" />
        <motion.div className="absolute inset-0" style={{ y }} />
        <Image
          src="/doodles/squiggle.svg"
          alt=""
          width={240}
          height={120}
          className="absolute hidden lg:block top-16 right-24 opacity-60"
          priority
        />
        <Image
          src="/doodles/star.svg"
          alt=""
          width={160}
          height={160}
          className="absolute hidden md:block bottom-12 left-10 rotate-[-8deg] opacity-70"
          priority
        />
        <div className="absolute top-12 left-8 hidden md:block">
          <WashiTape color="mint" pattern="dots" width="md" rotation={-6} />
        </div>
        <div className="absolute bottom-8 right-10 hidden lg:block">
          <WashiTape color="coral" pattern="stripe" width="lg" rotation={8} />
        </div>
      </TextureOverlay>

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left mt-4 sm:mt-0 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3"
            >
              <UiSticker
                variant="stamp"
                tone="yellow"
                icon={<span className="w-2 h-2 bg-green-500 rounded-full" />}
                className="shadow-sticker"
              >
                Open to collabs
              </UiSticker>
              <UiSticker variant="badge" tone="coral" className="shadow-sticker">
                Lagos ➜ Global
              </UiSticker>
              <ScrapbookSticker variant="sparkle" size="md" color="mint" className="hidden sm:inline-flex" />
            </motion.div>

            <motion.h4
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 14 : 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-primary font-semibold"
            >
              Hey, I'm Etoma-etoto (Kelvin) Odi 👋
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 14 : 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="leading-tight"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold text-primary leading-[1.1]">
                I craft digital experiences that feel like{' '}
                <CutoutLetters
                  text="keepsakes"
                  colorScheme="warm"
                  size="md"
                  className="align-middle scale-95 sm:scale-100"
                />{' '}
                people{' '}
                <FlipWords words={['love', 'use daily', 'talk about', 'remember']} className="text-primary" />
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 12 : 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-muted max-w-xl mx-auto lg:mx-0"
            >
              Designer-minded developer mixing playful storytelling with reliable builds. From scrappy MVPs to polished
              products, I love shipping work that feels personal and genuinely useful.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 12 : 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4 max-w-md mx-auto lg:mx-0"
            >
              <a href="#about" className="cta-button bg-primary text-white shadow-card">
                <span>See the story</span>
              </a>
              <a href="#projects" className="btn btn-secondary text-center bg-surface border-primary/20 text-primary">
                View projects
              </a>
            </motion.div>

            {/* removed initial fun fact card to avoid duplication */}

            <div className="flex flex-col items-center lg:items-start">
              <p className="text-sm text-muted mb-3">Trusted by thoughtful teams</p>
              <AnimatedTooltipDemo />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: isLoading ? 0 : 1, x: isLoading ? 24 : 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="lg:block relative"
          >
            <div className="relative flex flex-col items-center justify-center gap-4">
              <ScrapbookFrame
                rotation="left"
                tapePosition="corners"
                tapeColor="yellow"
                className="max-w-md mx-auto -translate-y-4"
              >
                <div className="relative h-[50vh] sm:h-[60vh] max-h-[500px] sm:max-h-[550px] aspect-[3/4] rounded overflow-hidden">
                  <Image
                    src="/hero-img.webp"
                    alt="Kelvin smiling"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 80vw, (max-width: 1200px) 45vw, 520px"
                  />
                </div>
                <p className="text-center font-handwriting text-xl text-muted mt-3 pb-2">Builder, storyteller, collaborator</p>
              </ScrapbookFrame>

              {/* Only show animated sparkle on high-power devices */}
              {!skipAnimations ? (
                <motion.div
                  className="absolute -left-10 -top-12"
                  animate={{
                    rotate: [0, -2, 2, 0],
                    y: [0, -4, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                >
                  <Image src="/doodles/sparkle.svg" alt="" width={120} height={120} className="opacity-80" priority />
                </motion.div>
              ) : (
                <div className="absolute -left-10 -top-12">
                  <Image src="/doodles/sparkle.svg" alt="" width={120} height={120} className="opacity-80" priority />
                </div>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col items-center text-center text-gray-600 mt-12 md:mt-16"
          animate={{ y: skipAnimations ? 0 : [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <p className="text-sm mb-1">Scroll to explore</p>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
