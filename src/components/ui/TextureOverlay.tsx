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
  variant = 'paper',
}: TextureOverlayProps): JSX.Element {
  const textureUrl = variant === 'paper' ? '/textures/paper.svg' : '/textures/paper.svg';

  return (
    <div className={cn('relative', className)}>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url(${textureUrl})`,
          opacity,
          mixBlendMode: 'multiply',
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
