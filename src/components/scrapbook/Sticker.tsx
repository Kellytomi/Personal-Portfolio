'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface StickerProps {
  variant: 'star' | 'heart' | 'sparkle' | 'arrow' | 'smile' | 'flower' | 'check' | 'lightning';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'coral' | 'mustard' | 'sage' | 'lavender' | 'sky' | 'peach' | 'mint';
  rotation?: number;
  className?: string;
  animate?: boolean;
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-14 h-14 text-base',
  xl: 'w-20 h-20 text-lg',
};

const colorClasses = {
  coral: 'bg-scrapbook-coral text-white',
  mustard: 'bg-scrapbook-mustard text-white',
  sage: 'bg-scrapbook-sage text-white',
  lavender: 'bg-scrapbook-lavender text-white',
  sky: 'bg-scrapbook-sky text-white',
  peach: 'bg-scrapbook-peach text-gray-800',
  mint: 'bg-scrapbook-mint text-gray-800',
};

const stickerIcons: Record<string, string> = {
  star: '⭐',
  heart: '❤️',
  sparkle: '✨',
  arrow: '→',
  smile: '😊',
  flower: '🌸',
  check: '✓',
  lightning: '⚡',
};

export default function Sticker({
  variant,
  size = 'md',
  color = 'coral',
  rotation = 0,
  className = '',
  animate = true,
}: StickerProps): JSX.Element {
  const randomRotation = useMemo(() => {
    return rotation || Math.random() * 20 - 10;
  }, [rotation]);

  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.5, rotate: randomRotation - 20 } : false}
      whileInView={animate ? { opacity: 1, scale: 1, rotate: randomRotation } : undefined}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.15,
        rotate: randomRotation + 5,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
      className={`
        ${sizeClasses[size]} ${colorClasses[color]}
        rounded-full flex items-center justify-center
        shadow-sticker cursor-pointer select-none
        transition-shadow hover:shadow-lg
        ${className}
      `}
      style={{
        transform: `rotate(${randomRotation}deg)`,
        '--rotation': `${randomRotation}deg`,
      } as React.CSSProperties}
    >
      <span className="drop-shadow-sm">{stickerIcons[variant]}</span>
    </motion.div>
  );
}

