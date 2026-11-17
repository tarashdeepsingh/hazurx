"use client";
import { skillGroups } from "@/lib/content";
import Reveal from "./Reveal";

export default function SkillsExplorer() {
  return (
    <section className="theme-ink px-5 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="tag mb-4">// what we know</p>
          <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">Skills and tools</h2>
        </Reveal>
        <div className="mt-10 border-t border-line">
          {skillGroups.map((g, i) => (
            <Reveal key={g.label} delay={i * 0.04}>
              <div className="grid gap-3 border-b border-line py-5 md:grid-cols-[11rem_1fr] md:items-center">
                <p className="tag">{g.label}</p>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-bone/85 transition-colors hover:border-saffron/60 hover:text-saffron">{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
