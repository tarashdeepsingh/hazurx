"use client";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export default function Counter({ value, suffix, decimals }: { value: number; suffix: string; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 2, ease: [0.16, 1, 0.3, 1], onUpdate: setV });
    return () => c.stop();
  }, [inView, value]);
  return <span ref={ref}>{v.toFixed(decimals)}{suffix}</span>;
}
