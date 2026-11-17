"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&*+<>/";

export default function Scramble({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [out, setOut] = useState(text);
  useEffect(() => {
    if (!inView) return;
    let f = 0;
    const total = 24;
    const id = setInterval(() => {
      f++;
      const reveal = Math.floor((text.length * f) / total);
      setOut(text.split("").map((c, i) => (c === " " || i < reveal ? c : glyphs[Math.floor(Math.random() * glyphs.length)])).join(""));
      if (f >= total) { clearInterval(id); setOut(text); }
    }, 34);
    return () => clearInterval(id);
  }, [inView, text]);
  return <span ref={ref} className={className} aria-label={text}>{out}</span>;
}
