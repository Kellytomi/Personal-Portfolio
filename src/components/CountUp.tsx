"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  startOnInView?: boolean;
}

export default function CountUp({ 
  end, 
  duration = 2, 
  suffix = '', 
  decimals = 0,
  startOnInView = true 
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    // Only animate if in view or if we don't want to wait for in-view
    if ((isInView || !startOnInView) && !hasAnimated) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const currentCount = progress * end;
        
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setHasAnimated(true);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration, startOnInView, hasAnimated]);
  
  // Format the number with commas and decimals
  const formattedCount = decimals > 0 
    ? count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return (
    <div ref={ref} className="inline">
      {formattedCount}{suffix}
    </div>
  );
} 