'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const SCRAMBLE_CHARS = '0123456789';

function ScrambleDigit({ value, active }: { value: string; active: boolean }) {
  const [display, setDisplay] = useState(value);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationsRef = useRef(0);

  useEffect(() => {
    if (!active) {
      setDisplay(value);
      return;
    }

    iterationsRef.current = 0;
    const maxIterations = 6;

    frameRef.current = setInterval(() => {
      iterationsRef.current++;
      if (iterationsRef.current >= maxIterations) {
        setDisplay(value);
        if (frameRef.current) clearInterval(frameRef.current);
      } else {
        setDisplay(SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]);
      }
    }, 40);

    return () => {
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [value, active]);

  return (
    <span
      className="inline-block font-display font-bold text-primary tabular-nums"
      style={{
        fontSize: 'clamp(5rem, 20vw, 13rem)',
        lineHeight: 1,
        letterSpacing: '-0.04em',
        minWidth: '0.6em',
        textAlign: 'center',
        fontVariantNumeric: 'tabular-nums',
      }}
    >
      {display}
    </span>
  );
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const prevProgress = useRef(0);

  useEffect(() => {
    const duration = 2800;
    const startTime = performance.now();

    // Ease in-out cubic
    const easeInOut = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const raw = Math.min(elapsed / duration, 1);
      const eased = easeInOut(raw);
      const val = Math.round(eased * 100);
      setProgress(val);
      prevProgress.current = val;

      if (raw < 1) {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete(), 600);
    }, 3800);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Split number into individual digit characters for scramble effect
  const digits = progress.toString().padStart(3, ' ').split('');

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcome"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-surface overflow-hidden"
        >
          {/* Subtle paper grain */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'300\' height=\'300\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E")',
            }}
          />

          {/* Main counter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex items-end gap-0 relative"
          >
            {digits.map((d, i) => (
              <ScrambleDigit
                key={i}
                value={d === ' ' ? '\u00A0' : d}
                active={d !== ' ' && d !== prevProgress.current.toString().padStart(3, ' ')[i]}
              />
            ))}
            <span
              className="font-display font-bold text-primary/40 self-end mb-[0.1em]"
              style={{ fontSize: 'clamp(2rem, 7vw, 5rem)', letterSpacing: '-0.04em' }}
            >
              %
            </span>
          </motion.div>

          {/* Thin progress line at bottom of screen */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary/10">
            <motion.div
              className="h-full origin-left"
              style={{
                background: 'linear-gradient(90deg, #1F3B2E, #4AA3A2)',
                width: `${progress}%`,
              }}
              transition={{ ease: 'linear', duration: 0.05 }}
            />
          </div>

          {/* Subtle label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute bottom-6 left-0 right-0 text-center font-sans text-[10px] tracking-[0.3em] uppercase text-muted/50"
          >
            Loading portfolio
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
