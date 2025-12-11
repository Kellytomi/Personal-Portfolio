'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface WashiTapeProps {
  className?: string;
  color?: 'yellow' | 'pink' | 'blue' | 'green' | 'mint' | 'coral' | 'lavender';
  pattern?: 'solid' | 'stripe' | 'dots' | 'hearts';
  width?: 'sm' | 'md' | 'lg';
  rotation?: number;
  position?: 'horizontal' | 'diagonal-left' | 'diagonal-right';
}

const colorVariants = {
  yellow: {
    bg: 'bg-yellow-200/80',
    pattern: 'bg-yellow-300/50',
  },
  pink: {
    bg: 'bg-pink-200/80',
    pattern: 'bg-pink-300/50',
  },
  blue: {
    bg: 'bg-blue-200/80',
    pattern: 'bg-blue-300/50',
  },
  green: {
    bg: 'bg-green-200/80',
    pattern: 'bg-green-300/50',
  },
  mint: {
    bg: 'bg-scrapbook-mint/80',
    pattern: 'bg-scrapbook-mint/50',
  },
  coral: {
    bg: 'bg-scrapbook-coral/40',
    pattern: 'bg-scrapbook-coral/30',
  },
  lavender: {
    bg: 'bg-scrapbook-lavender/80',
    pattern: 'bg-scrapbook-lavender/50',
  },
};

const widthSizes = {
  sm: 'h-4 w-16',
  md: 'h-6 w-24',
  lg: 'h-8 w-32',
};

export default function WashiTape({
  className = '',
  color = 'yellow',
  pattern = 'solid',
  width = 'md',
  rotation = 0,
  position = 'horizontal',
}: WashiTapeProps): JSX.Element {
  const baseRotation = useMemo(() => {
    if (position === 'diagonal-left') return -35;
    if (position === 'diagonal-right') return 35;
    return 0;
  }, [position]);

  const finalRotation = baseRotation + rotation;
  const colors = colorVariants[color];

  const renderPattern = () => {
    if (pattern === 'stripe') {
      return (
        <div className="absolute inset-0 overflow-hidden rounded-sm">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`absolute h-full w-1 ${colors.pattern}`} style={{ left: `${i * 14}%` }} />
          ))}
        </div>
      );
    }

    if (pattern === 'dots') {
      return (
        <div className="absolute inset-0 overflow-hidden rounded-sm flex items-center justify-around px-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${colors.pattern}`} />
          ))}
        </div>
      );
    }

    if (pattern === 'hearts') {
      return (
        <div className="absolute inset-0 overflow-hidden rounded-sm flex items-center justify-around px-2 text-[8px]">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="opacity-50">♥</span>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        relative ${colors.bg} ${widthSizes[width]} 
        rounded-sm backdrop-blur-sm shadow-tape
        ${className}
      `}
      style={{
        transform: `rotate(${finalRotation}deg)`,
        clipPath: 'polygon(2% 0%, 98% 2%, 100% 98%, 0% 100%)',
      }}
    >
      {renderPattern()}
    </motion.div>
  );
}
