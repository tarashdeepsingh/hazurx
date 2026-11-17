"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { meaning, site } from "@/lib/content";
import Reveal from "./Reveal";

const statement = "One team, from the first idea to the live server.";

function Word({ w, i, total, p }: { w: string; i: number; total: number; p: MotionValue<number> }) {
  const start = i / total, end = start + 1.4 / total;
  const o = useTransform(p, [start, end], [0.14, 1]);
  return <motion.span style={{ opacity: o }} className="mr-[0.28em] inline-block">{w}</motion.span>;
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = statement.split(" ");
  return (
    <section id="approach" className="theme-paper px-5 py-24 md:px-10 md:py-40">
      <div ref={ref} className="mx-auto max-w-6xl">
        
        <p className="display text-[clamp(1.6rem,3.6vw,3.13rem)] leading-[1.08]">
          {words.map((w, i) => <Word key={i} w={w} i={i} total={words.length} p={scrollYProgress} />)}
        </p>
      </div>

      <div className="mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
        <Reveal className="bg-ink p-8 md:p-14">
          
          <p className="font-gurmukhi text-4xl text-saffron md:text-6xl">{site.gurmukhi}</p>
          <h3 className="display mt-4 text-4xl md:text-4xl">HAZUR</h3>
          <p className="mt-6 max-w-sm leading-relaxed text-bone/70">{meaning.hazur}</p>
        </Reveal>
        <Reveal delay={0.12} className="relative bg-ink p-8 md:p-14">
          
          <p className="display text-[7rem] italic leading-none text-saffron md:text-[9rem]">×</p>
          <h3 className="display mt-4 text-4xl md:text-4xl">X</h3>
          <p className="mt-6 max-w-sm leading-relaxed text-bone/70">{meaning.x}</p>
        </Reveal>
      </div>
    </section>
  );
}
