"use client";
import { stats } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

export default function ProofStrip() {
  return (
    <section id="proof" className="theme-ink px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-6xl border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="py-8 pr-6 lg:border-r lg:border-line lg:pl-8 lg:first:pl-0 lg:last:border-r-0">
              <p className="display grad-text text-[clamp(2.2rem,3.6vw,3rem)]"><Counter {...s} /></p>
              <p className="eyebrow mt-3 max-w-[12rem]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
