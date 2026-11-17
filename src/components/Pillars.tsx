"use client";
import Link from "next/link";
import Reveal from "./Reveal";

const P = { pathLength: 1 } as const;
const stages = [
  {
    n: "01",
    title: "Build",
    text: "Web, mobile and backend, made to fit the way you work.",
    chips: ["Web", "Mobile", "APIs"],
    href: "/services",
    icon: <g><path {...P} d="M18 16 8 24l10 8" /><path {...P} d="m30 16 10 8-10 8" /><path {...P} d="m27 12-6 24" /></g>,
  },
  {
    n: "02",
    title: "Ship",
    text: "Deployed properly, monitored, and handed over clean.",
    chips: ["CI/CD", "Monitoring", "Backups"],
    href: "/work",
    icon: <g><path {...P} d="M24 40V14" /><path {...P} d="m14 23 10-10 10 10" /><path {...P} d="M10 8h28" /></g>,
  },
  {
    n: "03",
    title: "Support",
    text: "We stay on after launch for fixes and the next feature.",
    chips: ["Fixes", "Upgrades", "Uptime"],
    href: "/contact",
    icon: <g><path {...P} d="M24 6 8 12v11c0 10 7 17 16 20 9-3 16-10 16-20V12L24 6Z" /><path {...P} d="m17 24 5 5 9-10" /></g>,
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="theme-ink px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="tag mb-4">// what we do</p>
          <h2 className="display max-w-xl text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.1]">From first idea to live, <span className="grad-text">and beyond.</span></h2>
        </Reveal>

        <div className="relative mt-14">
          {/* the line, with a packet travelling build → ship → support */}
          <div aria-hidden className="absolute left-6 right-0 top-6 hidden h-px bg-line md:block">
            <span className="packet absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-saffron shadow-[0_0_14px_3px_rgba(255,180,84,0.75)]" />
          </div>

          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {stages.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.12} className="h-full">
                  <Link href={s.href} className="group block h-full">
                    <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-saffron/50 bg-ink text-saffron transition-all duration-500 group-hover:scale-110 group-hover:bg-saffron group-hover:text-ink group-hover:shadow-[0_0_30px_rgba(255,180,84,0.5)]">
                      <svg viewBox="0 0 48 48" className="icon-draw h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{s.icon}</svg>
                    </span>
                    <p className="tag mt-6">{s.n}</p>
                    <h3 className="display mt-1 text-[clamp(2rem,3.4vw,2.8rem)] transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-saffron">{s.title}</h3>
                    <p className="mt-3 max-w-[18rem] text-sm leading-relaxed text-bone/60">{s.text}</p>
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {s.chips.map((c) => (<li key={c} className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-bone/60 transition-colors duration-300 group-hover:border-saffron/40 group-hover:text-bone/85">{c}</li>))}
                    </ul>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ol>

          {/* loop back: support feeds the next build */}
          <div aria-hidden className="relative mt-10 hidden md:block">
            <svg viewBox="0 0 1000 70" preserveAspectRatio="none" className="h-[70px] w-full overflow-visible">
              <path className="flow" d="M 700 0 C 700 62, 48 62, 48 6" fill="none" stroke="rgba(255,180,84,0.55)" strokeWidth="1.2" strokeDasharray="5 7" vectorEffect="non-scaling-stroke" />
              <path d="M 44 12 L 48 4 L 53 12" fill="none" stroke="rgba(255,180,84,0.85)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="tag absolute left-1/2 top-[44px] -translate-x-1/2 bg-ink px-3 !text-saffron">and back to build, for the next feature</span>
          </div>
        </div>
      </div>
    </section>
  );
}
