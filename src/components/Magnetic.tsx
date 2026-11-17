"use client";
import { useRef, type ReactNode } from "react";

/** Pulls its child toward the pointer. */
export default function Magnetic({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <span ref={ref} onPointerMove={move} onPointerLeave={leave} className="inline-block transition-transform duration-300 ease-out">
      {children}
    </span>
  );
}
