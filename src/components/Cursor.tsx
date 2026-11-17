"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-cursor");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, scale = 1, target = 1;
    const move = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      const t = (e.target as HTMLElement).closest("a,button,[data-cursor]");
      target = t ? (t.getAttribute("data-cursor") === "drag" ? 2.4 : 1.9) : 1;
    };
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18; scale += (target - scale) * 0.2;
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div ref={ring} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] h-9 w-9 rounded-full border border-saffron/70 mix-blend-difference" />
      <div ref={dot} aria-hidden className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-saffron" />
    </>
  );
}
