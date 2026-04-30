import { useState, useEffect } from 'react';

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);

    const onChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return prefersReducedMotion;
}
