"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { bio, site } from "@/lib/content";
import Magnetic from "./Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutIntro() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const figX = useTransform(sx, (v) => v * 14);
  const figY = useTransform(sy, (v) => v * 8);
  const ringX = useTransform(sx, (v) => v * -10);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    mx.set((e.clientX / window.innerWidth - 0.5) * 2);
    my.set((e.clientY / window.innerHeight - 0.5) * 2);
  };

  return (
    <section onPointerMove={onMove} className="theme-ink relative overflow-hidden px-5 pt-28 md:px-10">
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* text */}
        <div className="relative z-10 pb-6 lg:pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="tag mb-6 flex items-center gap-4">
            <span className="font-gurmukhi text-base text-bone">{site.gurmukhi}</span>// about
          </motion.p>
          <h1 className="display text-[clamp(2.56rem,5.3vw,5.03rem)] leading-[1.02]" style={{ letterSpacing: "-0.015em", fontWeight: 400 }}>
            {["Tarashdeep", "Singh."].map((w, i) => (
              <span key={w} className="-mb-[0.08em] block overflow-hidden pb-[0.16em]">
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease, delay: 0.25 + i * 0.12 }} className="block">
                  {i ? <span className="inline-block bg-[linear-gradient(95deg,#ffd9a0_0%,#ffb454_45%,#ff8a3d_100%)] bg-clip-text pb-[0.14em] pr-[0.04em] text-transparent">{w}</span> : w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1, ease }} className="tag mt-6 !text-saffron">
            {bio.role}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 1, ease }} className="mt-6 max-w-xl text-base leading-relaxed text-bone/75 md:text-lg">
            {bio.lead}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-9 flex flex-wrap items-center gap-6">
            <Magnetic><Link href="/contact" className="btn-primary">Work with us <span aria-hidden>↗</span></Link></Magnetic>
            <Link href="/experience" className="link-u text-sm">See our experience →</Link>
          </motion.div>
        </div>

        {/* figure */}
        <div className="relative z-0 flex items-end justify-center self-end">
          <motion.div
            aria-hidden
            style={{ x: ringX }}
            className="pointer-events-none absolute bottom-[8%] left-1/2 aspect-square w-[82%] sm:w-[min(112%,520px)] -translate-x-1/2 rounded-full border border-saffron/30 bg-[radial-gradient(circle_at_50%_55%,rgba(255,180,84,0.26),rgba(255,138,61,0.06)_55%,transparent_70%)]"
          >
            <span className="absolute inset-[9%] rounded-full border border-dashed border-line" style={{ animation: "spin-slow 60s linear infinite" }} />
          </motion.div>

          <motion.div
            style={{ x: figX, y: figY }}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, ease, delay: 0.2 }}
            className="relative w-[min(78vw,400px)]"
          >
            <Image
              src="/tarashdeep-cutout.png"
              alt="Tarashdeep Singh"
              width={900}
              height={1545}
              priority
              className="h-auto w-full"
              style={{ maskImage: "linear-gradient(to bottom, #000 74%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, #000 74%, transparent 100%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
