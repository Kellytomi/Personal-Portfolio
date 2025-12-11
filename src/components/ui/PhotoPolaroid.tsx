import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface PhotoPolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  className?: string;
  badge?: ReactNode;
}

export function PhotoPolaroid({
  src,
  alt,
  caption,
  rotation = 0,
  className,
  badge,
}: PhotoPolaroidProps): JSX.Element {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      style={{ rotate: rotation }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              rotate: rotation + 1.5,
              translateY: -6,
              boxShadow: '0 18px 40px rgba(0,0,0,0.18)',
            }
      }
      className={cn(
        'relative w-full max-w-[420px] bg-[#fdfbf7] rounded-[20px] shadow-[0_14px_36px_rgba(0,0,0,0.14)] border border-primary/10 overflow-hidden',
        'before:absolute before:inset-0 before:bg-[url(/textures/paper.svg)] before:opacity-70 before:pointer-events-none',
        className
      )}
    >
      {badge ? <div className="absolute -top-4 left-4 z-20">{badge}</div> : null}
      <div className="relative h-[420px] sm:h-[480px] bg-primary/5">
        <Image src={src} alt={alt} fill className="object-cover" priority />
        <span className="absolute -top-3 right-6 w-20 h-6 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[12deg] opacity-90" />
      </div>
      {caption ? (
        <div className="relative z-10 px-6 py-4">
          <p className="text-sm text-primary font-semibold">{caption}</p>
        </div>
      ) : null}
    </motion.div>
  );
}
