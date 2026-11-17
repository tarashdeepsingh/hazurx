"use client";
import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const Scene = dynamic(() => import("./Scene"), { ssr: false });

const DIM = 0.2; // how visible the 3D scene is behind content

export default function SceneLoader() {
  const path = usePathname();
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    // Inner pages: always softly dimmed. Home: full strength on the hero, fading as you scroll.
    if (path !== "/") { el.style.opacity = String(DIM); return; }
    const on = () => {
      const t = Math.min(1, window.scrollY / (window.innerHeight * 0.65));
      el.style.opacity = String(1 - (1 - DIM) * t);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [path]);

  return (
    <div
      ref={box}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
      style={{ opacity: path === "/" ? 1 : DIM }}
    >
      <Scene />
    </div>
  );
}
