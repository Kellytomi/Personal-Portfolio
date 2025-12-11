'use client';

import { motion } from 'framer-motion';
import { ReactNode, useMemo } from 'react';

interface ScrapbookFrameProps {
  children: ReactNode;
  className?: string;
  rotation?: 'left' | 'right' | 'random' | 'none';
  hasTape?: boolean;
  tapePosition?: 'top' | 'corners' | 'single';
  tapeColor?: 'yellow' | 'pink' | 'blue' | 'green' | 'white';
}

const tapeColors = {
  yellow: 'bg-yellow-200/80',
  pink: 'bg-pink-200/80',
  blue: 'bg-blue-200/80',
  green: 'bg-green-200/80',
  white: 'bg-white/80',
};

export default function ScrapbookFrame({
  children,
  className = '',
  rotation = 'random',
  hasTape = true,
  tapePosition = 'top',
  tapeColor = 'yellow',
}: ScrapbookFrameProps): JSX.Element {
  const rotationDeg = useMemo(() => {
    if (rotation === 'none') return 0;
    if (rotation === 'left') return -3;
    if (rotation === 'right') return 3;
    return Math.random() * 8 - 4;
  }, [rotation]);

  const renderTape = () => {
    const tapeClass = `absolute ${tapeColors[tapeColor]} backdrop-blur-sm shadow-tape`;

    if (tapePosition === 'top') {
      return (
        <div
          className={`${tapeClass} w-16 h-6 -top-3 left-1/2 -translate-x-1/2 rounded-sm`}
          style={{ transform: `translateX(-50%) rotate(${Math.random() * 6 - 3}deg)` }}
        />
      );
    }

    if (tapePosition === 'corners') {
      return (
        <>
          <div className={`${tapeClass} w-12 h-5 -top-2 -left-2 rounded-sm`} style={{ transform: `rotate(-25deg)` }} />
          <div className={`${tapeClass} w-12 h-5 -top-2 -right-2 rounded-sm`} style={{ transform: `rotate(25deg)` }} />
        </>
      );
    }

    if (tapePosition === 'single') {
      return (
        <div className={`${tapeClass} w-14 h-5 -top-2 left-4 rounded-sm`} style={{ transform: `rotate(-12deg)` }} />
      );
    }

    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, rotate: rotationDeg - 5 }}
      whileInView={{ opacity: 1, scale: 1, rotate: rotationDeg }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        transition: { duration: 0.2 },
      }}
      className={`relative bg-white p-3 shadow-polaroid hover:shadow-polaroid-hover transition-shadow ${className}`}
      style={{ '--rotation': `${rotationDeg}deg` } as React.CSSProperties}
    >
      {hasTape && renderTape()}
      {children}
    </motion.div>
  );
}
