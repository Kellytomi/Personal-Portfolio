import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface TextureOverlayProps {
  children: ReactNode;
  className?: string;
  opacity?: number;
  variant?: 'paper' | 'noise';
}

export function TextureOverlay({
  children,
  className,
  opacity = 0.6,
}: TextureOverlayProps): JSX.Element {
  return (
    <div className={cn('relative', className)}>
      {/* Texture disabled on mobile for better performance */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(/textures/paper.svg)`,
          opacity,
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

