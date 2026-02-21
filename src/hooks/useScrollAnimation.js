import { useEffect, useRef, useState } from "react";

/**
 * useScrollAnimation
 * Returns a ref to attach to any element + a boolean `isVisible`.
 * When the element enters the viewport, isVisible flips to true (once).
 *
 * @param {number} threshold  - 0–1, how much of element must be visible (default 0.15)
 * @param {string} rootMargin - margin around viewport (default "-60px")
 */
const useScrollAnimation = (threshold = 0.15, rootMargin = "-60px") => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // animate once, then stop watching
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
};

export default useScrollAnimation;
