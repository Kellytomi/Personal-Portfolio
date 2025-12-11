import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface PaperCardProps {
  children: ReactNode;
  className?: string;
  rotation?: number;
  withTape?: boolean;
  tone?: 'light' | 'cream' | 'teal';
}

export function PaperCard({
  children,
  className,
  rotation = 0,
  withTape = false,
  tone = 'light',
}: PaperCardProps): JSX.Element {
  const reduceMotion = useReducedMotion();
  const toneClass =
    tone === 'cream'
      ? 'bg-[#f6f0df]'
      : tone === 'teal'
        ? 'bg-[#e3f1f0]'
        : 'bg-surface';

  return (
    <motion.div
      whileHover={
        reduceMotion
          ? undefined
          : {
              rotate: rotation + 0.8,
              translateY: -4,
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
            }
      }
      style={{ rotate: rotation }}
      className={cn(
        'relative overflow-hidden rounded-[18px] border border-primary/10 shadow-[0_10px_28px_rgba(0,0,0,0.06)]',
        toneClass,
        'before:absolute before:inset-0 before:pointer-events-none before:bg-[url(/textures/paper.svg)] before:opacity-60',
        className
      )}
    >
      {withTape && (
        <>
          <span className="absolute -top-3 left-6 w-16 h-6 bg-[url(/textures/washi-yellow.svg)] bg-cover rotate-[-6deg] opacity-90" />
          <span className="absolute -bottom-4 right-8 w-24 h-8 bg-[url(/textures/washi-teal.svg)] bg-cover rotate-[4deg] opacity-80" />
        </>
      )}
      <div className="relative z-10 p-5 sm:p-6">{children}</div>
    </motion.div>
  );
}

