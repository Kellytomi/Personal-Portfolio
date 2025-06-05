'use client';

import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AvatarPlaceholder, getGenderFromName } from './avatar-placeholder';

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  // Array of beautiful background colors for the cards
  const cardBackgroundColors = [
    'linear-gradient(135deg, #3151B5 0%, #4F46E5 100%)', // Primary blue gradient
    'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)', // Pink gradient
    'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)', // Purple gradient
    'linear-gradient(135deg, #56CCF2 0%, #06B6D4 100%)', // Light blue gradient
    'linear-gradient(135deg, #10B981 0%, #34D399 100%)', // Green gradient
    'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)', // Orange gradient
    'linear-gradient(135deg, #EF4444 0%, #F87171 100%)', // Red gradient
    'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)', // Violet gradient
    'linear-gradient(135deg, #06B6D4 0%, #67E8F9 100%)', // Cyan gradient
    'linear-gradient(135deg, #84CC16 0%, #A3E635 100%)', // Lime gradient
  ];

  // Get consistent background for each testimonial
  const getCardBackground = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % cardBackgroundColors.length;
    return cardBackgroundColors[index];
  };

  return (
    <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div
                    className="h-full w-full rounded-3xl shadow-lg overflow-hidden flex items-center justify-center"
                    style={{ background: getCardBackground(testimonial.name) }}
                  >
                    <div className="w-32 h-32">
                      <AvatarPlaceholder
                        gender={getGenderFromName(testimonial.name)}
                        name={testimonial.name}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <h3 className="text-2xl font-bold text-gray-800">{testimonials[active].name}</h3>
            <p className="text-sm text-gray-600 font-medium">{testimonials[active].designation}</p>
            <motion.p className="mt-8 text-lg text-gray-800 leading-relaxed">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: 'blur(10px)',
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: 'blur(0px)',
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <IconArrowLeft className="h-5 w-5 text-gray-600 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
            >
              <IconArrowRight className="h-5 w-5 text-gray-600 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
