import { cn } from '@/lib/utils';
import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

type StickerVariant = 'label' | 'badge' | 'stamp';
type StickerTone = 'yellow' | 'coral' | 'teal' | 'plum' | 'cream';

const toneMap: Record<StickerTone, string> = {
  yellow: 'bg-secondary text-primary border-primary/20',
  coral: 'bg-accent text-white border-accent/30',
  teal: 'bg-teal text-primary border-primary/15',
  plum: 'bg-plum text-white border-white/20',
  cream: 'bg-surface text-primary border-primary/20',
};

const variantMap: Record<StickerVariant, string> = {
  label: 'rounded-full px-4 py-2 shadow-card',
  badge: 'rounded-xl px-4 py-2.5 shadow-soft',
  stamp: 'rounded-[18px] px-3.5 py-3 shadow-[0_8px_0_0_rgba(0,0,0,0.12)] border-dashed',
};

interface StickerProps {
  variant?: StickerVariant;
  tone?: StickerTone;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Sticker({
  variant = 'label',
  tone = 'yellow',
  icon,
  children,
  className,
}: StickerProps): JSX.Element {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      whileHover={reduceMotion ? undefined : { rotate: variant === 'stamp' ? -1 : 1, y: -2 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={cn(
        'inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-[12px] border',
        variantMap[variant],
        toneMap[tone],
        className
      )}
    >
      {icon ? <span className="text-sm">{icon}</span> : null}
      <span>{children}</span>
    </motion.span>
  );
}

