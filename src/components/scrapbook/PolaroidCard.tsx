'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';

interface PolaroidCardProps {
  imageSrc?: string;
  imageAlt?: string;
  caption?: string | ReactNode;
  rotation?: 'left' | 'right' | 'random' | 'none';
  aspect?: 'square' | 'portrait' | 'landscape';
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export default function PolaroidCard({
  imageSrc,
  imageAlt = 'Polaroid photo',
  caption,
  rotation = 'random',
  aspect = 'square',
  className = '',
  children,
  onClick,
}: PolaroidCardProps): JSX.Element {
  const rotationDeg = useMemo(() => {
    if (rotation === 'none') return 0;
    if (rotation === 'left') return -4;
    if (rotation === 'right') return 4;
    return Math.random() * 10 - 5;
  }, [rotation]);

  const aspectClass =
    aspect === 'portrait' ? 'aspect-[3/4]' : aspect === 'landscape' ? 'aspect-video' : 'aspect-square';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotationDeg - 10 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotationDeg }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      whileHover={{
        scale: 1.03,
        rotate: 0,
        y: -5,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      className={`
        bg-white p-3 pb-12 shadow-polaroid hover:shadow-polaroid-hover
        transition-shadow cursor-pointer
        ${className}
      `}
      style={{ transform: `rotate(${rotationDeg}deg)` }}
    >
      <div className={`relative ${aspectClass} bg-gray-100 overflow-hidden`}>
        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
        ) : children ? (
          children
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        )}
      </div>

      {caption && (
        <div className="absolute bottom-2 left-3 right-3 text-center">
          <p className="font-handwriting text-lg text-gray-700 truncate">{caption}</p>
        </div>
      )}
    </motion.div>
  );
}

