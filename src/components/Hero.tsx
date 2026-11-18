"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { site } from "@/lib/content";
import TypeLine from "./TypeLine";
import Magnetic from "./Magnetic";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1.2, ease, delay }} className="block">
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="top" className="theme-ink relative min-h-[100svh] overflow-hidden">
      {/* legibility veil on the text side; the 3D scene lives behind everything */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,rgba(7,7,10,0.85)_0%,rgba(7,7,10,0.4)_40%,transparent_65%)]" />
      <div className="relative flex min-h-[100svh] flex-col justify-center px-5 pb-16 pt-28 md:px-10 md:pb-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="tag mb-6 flex flex-wrap items-center gap-x-4 gap-y-1">
          <span className="font-gurmukhi text-base text-bone">{site.gurmukhi}</span>
          <span><b>~/hazurx $</b> building <TypeLine phrases={["web apps", "mobile apps", "APIs that don't fall over", "dashboards people use", "things that run in production"]} /></span>
        </motion.p>
        <h1 className="display max-w-4xl text-[clamp(2.16rem,5.2vw,5.03rem)]">
          <Line delay={0.25}>Inspired by roots.</Line>
          <Line delay={0.4}><span className="grad-text">Built for the future.</span></Line>
        </h1>
        <div className="mt-8 flex flex-col gap-8">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1, ease }} className="max-w-md text-base leading-relaxed text-bone/70 md:text-base">
            We build the software behind real businesses: ships, auctions, schools. Start to finish, one accountable engineering partner, no hand-offs.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center gap-8">
            <Magnetic><Link href="/contact" className="btn-primary">Start a project <span aria-hidden>↗</span></Link></Magnetic>
            <span className="absolute bottom-8 right-10 hidden items-center gap-3 text-xs text-mute md:flex">
              <span className="relative h-10 w-px overflow-hidden bg-line"><span className="absolute inset-0 bg-saffron" style={{ animation: "scroll-line 2.2s ease-in-out infinite" }} /></span>
              Scroll
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
