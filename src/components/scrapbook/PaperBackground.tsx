'use client';

import { ReactNode, HTMLAttributes } from 'react';

interface PaperBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'cream' | 'kraft' | 'notebook' | 'aged' | 'grid';
  className?: string;
  hasTexture?: boolean;
}

const variantStyles = {
  cream: 'bg-scrapbook-cream',
  kraft: 'bg-scrapbook-kraft/20',
  notebook: 'bg-white',
  aged: 'bg-scrapbook-aged-white',
  grid: 'bg-scrapbook-paper',
};

export default function PaperBackground({
  children,
  variant = 'cream',
  className = '',
  hasTexture = true,
  ...rest
}: PaperBackgroundProps): JSX.Element {
  return (
    <div className={`relative ${variantStyles[variant]} ${className}`} {...rest}>
      {hasTexture && (
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
      )}

      {variant === 'notebook' && (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #94a3b8 28px)',
            backgroundSize: '100% 28px',
          }}
        />
      )}

      {variant === 'grid' && (
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(#94a3b8 1px, transparent 1px),
              linear-gradient(90deg, #94a3b8 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

