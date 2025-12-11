'use client';

import { useState, useEffect } from 'react';

interface DevicePerformance {
  isLowPower: boolean;
  isTouch: boolean;
  isAndroid: boolean;
  prefersReducedMotion: boolean;
}

/**
 * Detects device capabilities to optimize animations
 * Returns flags for low-power devices, touch devices, Android, and reduced motion preference
 */
export function useDevicePerformance(): DevicePerformance {
  const [performance, setPerformance] = useState<DevicePerformance>({
    isLowPower: false,
    isTouch: false,
    isAndroid: false,
    prefersReducedMotion: false,
  });

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const isAndroid = /Android/i.test(navigator.userAgent);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Consider low power if: Android, touch device (mobile), or prefers reduced motion
    const isLowPower = isAndroid || (isTouch && window.innerWidth < 1024) || prefersReducedMotion;

    setPerformance({
      isLowPower,
      isTouch,
      isAndroid,
      prefersReducedMotion,
    });
  }, []);

  return performance;
}
