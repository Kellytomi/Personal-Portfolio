'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface CutoutLettersProps {
  text: string;
  className?: string;
  colorScheme?: 'vibrant' | 'pastel' | 'warm' | 'cool';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const colorSchemes = {
  vibrant: [
    'bg-scrapbook-coral text-white',
    'bg-scrapbook-mustard text-white',
    'bg-scrapbook-sage text-white',
    'bg-scrapbook-lavender text-white',
    'bg-scrapbook-sky text-gray-800',
    'bg-pink-400 text-white',
    'bg-emerald-400 text-white',
  ],
  pastel: [
    'bg-pink-200 text-pink-800',
    'bg-blue-200 text-blue-800',
    'bg-green-200 text-green-800',
    'bg-yellow-200 text-yellow-800',
    'bg-purple-200 text-purple-800',
    'bg-orange-200 text-orange-800',
  ],
  warm: [
    'bg-scrapbook-coral text-white',
    'bg-scrapbook-mustard text-white',
    'bg-scrapbook-peach text-gray-800',
    'bg-scrapbook-dusty-rose text-white',
    'bg-orange-400 text-white',
    'bg-red-400 text-white',
  ],
  cool: [
    'bg-scrapbook-sage text-white',
    'bg-scrapbook-sky text-gray-800',
    'bg-scrapbook-lavender text-white',
    'bg-scrapbook-mint text-gray-800',
    'bg-blue-400 text-white',
    'bg-teal-400 text-white',
  ],
};

const fontStyles = [
  'font-display font-bold',
  'font-handwriting',
  'font-sketch',
  'font-sans font-black',
  'font-display font-medium italic',
];

const sizeClasses = {
  sm: 'text-lg px-1.5 py-0.5',
  md: 'text-2xl px-2 py-1',
  lg: 'text-4xl px-3 py-1.5',
  xl: 'text-5xl px-4 py-2',
};

export default function CutoutLetters({
  text,
  className = '',
  colorScheme = 'vibrant',
  size = 'lg',
  animate = true,
}: CutoutLettersProps): JSX.Element {
  const letters = useMemo(() => {
    const colors = colorSchemes[colorScheme];
    const chars = text.split('');

    return chars.map((char, index) => {
      const colorClass = colors[Math.floor(Math.random() * colors.length)];
      const fontClass = fontStyles[Math.floor(Math.random() * fontStyles.length)];
      const rotation = Math.random() * 16 - 8; // -8 to 8 degrees
      const yOffset = Math.random() * 4 - 2; // -2 to 2 px

      return {
        char,
        colorClass,
        fontClass,
        rotation,
        yOffset,
        delay: index * 0.05,
      };
    });
  }, [text, colorScheme]);

  return (
    <span className={`inline-flex flex-wrap items-center gap-1 ${className}`}>
      {letters.map((letter, index) => {
        if (letter.char === ' ') {
          return <span key={index} className="w-3" />;
        }

        return (
          <motion.span
            key={index}
            initial={animate ? { opacity: 0, scale: 0.5, rotate: letter.rotation - 20 } : false}
            whileInView={
              animate
                ? {
                    opacity: 1,
                    scale: 1,
                    rotate: letter.rotation,
                    y: letter.yOffset,
                  }
                : undefined
            }
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: letter.delay,
              type: 'spring',
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.1,
              rotate: letter.rotation + 5,
              transition: { duration: 0.15 },
            }}
            className={`
              inline-block ${letter.colorClass} ${letter.fontClass} ${sizeClasses[size]}
              rounded-sm shadow-sm cursor-default select-none
              transform-gpu
            `}
            style={{
              transform: `rotate(${letter.rotation}deg) translateY(${letter.yOffset}px)`,
            }}
          >
            {letter.char}
          </motion.span>
        );
      })}
    </span>
  );
}

