"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

/**
 * Shows the real number by default (so it is correct in the HTML, for search engines,
 * and with reduced motion), then counts up once when it scrolls into view.
 */
export default function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [v, setV] = useState(value);
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = animate(0, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: setV });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}
