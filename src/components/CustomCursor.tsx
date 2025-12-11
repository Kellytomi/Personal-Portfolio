'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springConfig = { damping: 16, stiffness: 220 };

export default function CustomCursor(): JSX.Element | null {
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    setMounted(true);
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouch(touch);
  }, []);

  useEffect(() => {
    if (!mounted || isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');
      setIsHover(Boolean(interactive));
    };

    const down = () => setIsDown(true);
    const up = () => setIsDown(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleOver);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleOver);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
    };
  }, [mounted, isTouch, x, y]);

  if (!mounted || isTouch) return null;

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x: xSpring, y: ySpring }}
    >
      <motion.div
        className="relative"
        animate={{ scale: isDown ? 0.85 : isHover ? 1.1 : 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-primary/80 bg-scrapbook-cream/70 shadow-soft"
          style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.12)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-secondary shadow-sm" />
        </div>
        <div
          className="absolute -inset-3 rounded-full border border-primary/15"
          style={{ opacity: isHover ? 1 : 0, transition: 'opacity 150ms ease' }}
        />
      </motion.div>
    </motion.div>
  );
}
