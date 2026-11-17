"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a || a.getAttribute("href") === "#") return;
      const el = document.querySelector(a.getAttribute("href")!);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -20, duration: 1.4 });
      }
    };
    document.addEventListener("click", onAnchor);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onAnchor);
      lenis.destroy();
    };
  }, []);
  return null;
}
