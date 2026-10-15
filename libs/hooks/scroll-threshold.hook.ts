import { useEffect, useState } from 'react';

// True once the page is scrolled further down than `threshold` pixels.
export function useScrollThreshold(threshold: number): boolean {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const update = () => setPassed(window.scrollY > threshold);
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, [threshold]);

  return passed;
}
