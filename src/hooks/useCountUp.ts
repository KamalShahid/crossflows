import { useEffect, useRef, useState } from "react";

interface Options {
  duration?: number;
  decimals?: number;
}

export function useCountUp(target: number, isActive: boolean, options: Options = {}) {
  const { duration = 1600, decimals = 0 } = options;
  const [value, setValue] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;
    startRef.current = null;

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    };
  }, [target, isActive, duration]);

  return decimals === 0 ? Math.round(value) : Number(value.toFixed(decimals));
}
