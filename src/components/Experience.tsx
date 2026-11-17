"use client";
import { useEffect, useState } from "react";
import { experience } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";

const START = new Date(2023, 9, 1); // Oct 2023: first professional role

function fmt(m: number) {
  const y = Math.floor(m / 12), r = m % 12;
  return [y && `${y} yr${y > 1 ? "s" : ""}`, r && `${r} mo`].filter(Boolean).join(" ") || "< 1 mo";
}
function monthsSince(from: Date) {
  const now = new Date();
  return Math.max(0, (now.getFullYear() - from.getFullYear()) * 12 + now.getMonth() - from.getMonth());
}

const stats: { value: number; suffix: string; label: string }[] = [
  { value: 6, suffix: "+", label: "business verticals on one bidding platform" },
  { value: 150, suffix: "+", label: "agents onboarded in 4 months" },
  { value: 2.3, suffix: "M+", label: "students reached by dashboards we built" },
  { value: 96, suffix: "%", label: "faster API data retrieval" },
];

export default function Experience() {
  // computed after mount so the numbers stay current without freezing at build time
  const [years, setYears] = useState(3);
  const [current, setCurrent] = useState(experience[0].months);
  useEffect(() => {
    setYears(Math.max(1, Math.floor(monthsSince(START) / 12)));
    setCurrent(monthsSince(new Date(2025, 6, 1)));
  }, []);

  return (
    <section id="experience" className="theme-ink px-5 pb-16 pt-20 md:px-10 md:pb-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* the answer, up front */}
        <Reveal>
          <p className="tag mb-4">// experience</p>
          <h1 className="display max-w-3xl text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.08]">
            <span className="grad-text">{years}+ years</span> building software that runs in production.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-bone/60 md:text-base">
            Backend and full-stack engineer. Real-time bidding platforms, billing systems, and national-scale dashboards, from design to deployment.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink/70 p-6 backdrop-blur-xl">
                <p className="display grad-text text-[clamp(2rem,3.2vw,2.6rem)]"><Counter value={s.value} suffix={s.suffix} decimals={s.value % 1 ? 1 : 0} /></p>
                <p className="eyebrow mt-2 max-w-[14rem]">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* roles: everything visible, nothing to click */}
        <div className="mt-20 md:mt-28">
          <Reveal><p className="tag mb-8">// where</p></Reveal>
          <div className="relative space-y-14">
            <span aria-hidden className="absolute bottom-2 left-[5px] top-2 hidden w-px bg-gradient-to-b from-saffron via-line to-transparent md:block" />
            {experience.map((r, idx) => (
              <Reveal key={r.role}>
                <div className="relative grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10 md:pl-10">
                  <span aria-hidden className="absolute left-0 top-1.5 hidden h-[11px] w-[11px] rounded-full border-2 border-saffron bg-ink md:block" />
                  <div>
                    <p className="tag"><b>{idx === 0 ? "now" : "then"}</b> · {r.start} → {r.end}</p>
                    <p className="mt-2 text-sm text-bone/55">{fmt(idx === 0 ? current : r.months)}</p>
                  </div>
                  <div>
                    <h2 className="display text-[clamp(1.4rem,2.4vw,1.9rem)] leading-tight">{r.role}</h2>
                    <p className="mt-1.5 text-sm text-bone/55">{r.focus}</p>
                    <ul className="mt-6 divide-y divide-line border-y border-line">
                      {r.highlights.map((h) => (
                        <li key={h.t} className="grid gap-x-6 gap-y-1 py-4 sm:grid-cols-[6.5rem_1fr]">
                          <p className="display grad-text text-2xl leading-none sm:pt-0.5">{h.m}</p>
                          <div>
                            <p className="text-sm font-medium text-bone">{h.t}</p>
                            <p className="mt-1 text-[0.85rem] leading-relaxed text-bone/60">{h.d}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
