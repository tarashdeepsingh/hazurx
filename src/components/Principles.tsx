"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { principles, principlesStatement } from "@/lib/content";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

function Word({ w, i, total, p }: { w: string; i: number; total: number; p: MotionValue<number> }) {
  const start = i / total, end = start + 1.4 / total;
  const o = useTransform(p, [start, end], [0.14, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[0.28em] inline-block">{w}</motion.span>;
}

export default function Principles({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = principlesStatement.split(" ");
  return (
    <section id="principles" className="theme-paper px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="tag mb-6">// how we work</p>
        <div ref={ref}>
          <p className="display text-[clamp(1.6rem,3.6vw,3.13rem)] leading-[1.08]">
            {words.map((w, i) => <Word key={i} w={w} i={i} total={words.length} p={scrollYProgress} />)}
          </p>
        </div>
        <div className={`mt-20 grid gap-5 ${compact ? "md:grid-cols-2" : "md:grid-cols-2"}`}>
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={(i % 2) * 0.1}>
              <Tilt className="glass h-full rounded-3xl" max={4}>
                <div className="flex h-full min-h-[16rem] flex-col justify-between p-8 md:p-10">
                  <span className="tag">// {p.n}</span>
                  <div>
                    <h3 className="display text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-4 max-w-md leading-relaxed text-bone/65">{p.text}</p>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
