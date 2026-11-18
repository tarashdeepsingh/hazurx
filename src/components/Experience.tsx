"use client";
import { useEffect, useState } from "react";
import { experience } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

const START = new Date(2023, 9, 1); // Oct 2023

function monthsSince(from: Date) {
  const now = new Date();
  return Math.max(0, (now.getFullYear() - from.getFullYear()) * 12 + now.getMonth() - from.getMonth());
}
function fmt(m: number) {
  const y = Math.floor(m / 12), r = m % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, r && `${r} mo`].filter(Boolean).join(" ") || "< 1 mo";
}

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "+", label: "business verticals on one bidding platform" },
  { value: 95, suffix: "+", label: "countries with active users" },
  { value: 2.3, suffix: "M+", label: "students reached by national dashboards" },
  { value: 96, suffix: "%", label: "faster API data retrieval" },
];

export default function Experience() {
  // computed after mount so the numbers stay current without freezing at build time
  const [months, setMonths] = useState(37);
  useEffect(() => setMonths(monthsSince(START)), []);
  const years = Math.max(1, Math.floor(months / 12));

  return (
    <section id="experience" className="theme-ink px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="tag mb-4">// professional experience</p>
          <h1 className="display max-w-3xl text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.08]">
            <span className="grad-text">{years}+ years</span> building software that runs in production.
          </h1>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid grid-cols-2 border-t border-line lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="py-7 pr-6 lg:border-r lg:border-line lg:pl-7 lg:first:pl-0 lg:last:border-r-0">
                <p className="display grad-text text-[clamp(2rem,3.2vw,2.6rem)]"><Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 ? 1 : 0} /></p>
                <p className="eyebrow mt-2 max-w-[13rem]">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* one role, everything visible */}
        <div className="mt-16 grid gap-10 border-t border-line pt-14 lg:grid-cols-[0.8fr_2fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="tag"><b>{experience.start}</b> → Now · {fmt(months)}</p>
              <h2 className="display mt-4 text-[clamp(1.7rem,3vw,2.4rem)] leading-tight">{experience.role}</h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-bone/60">{experience.focus}</p>
            </div>
          </Reveal>

          <ul className="grid gap-x-12 sm:grid-cols-2">
            {experience.highlights.map((h, i) => (
              <li key={h.t}>
                <Reveal delay={(i % 2) * 0.06}>
                  <div className="border-t border-line py-6">
                    <p className="display grad-text text-3xl leading-none">{h.m}</p>
                    <p className="mt-3 text-sm font-medium text-bone">{h.t}</p>
                    <p className="mt-1.5 text-[0.85rem] leading-relaxed text-bone/60">{h.d}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
