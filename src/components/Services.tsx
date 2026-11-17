"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { process, services } from "@/lib/content";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

/* Line icons. Every shape has pathLength=1 so CSS can "draw" it on hover. */
const P = { pathLength: 1 } as const;
const icons: React.ReactNode[] = [
  <g key="0"><path {...P} d="M18 16 8 24l10 8" /><path {...P} d="m30 16 10 8-10 8" /><path {...P} d="m27 12-6 24" /></g>,
  <g key="1"><rect {...P} x="6" y="9" width="36" height="30" rx="4" /><path {...P} d="M6 18h36" /><path {...P} d="M14 26h12" /><path {...P} d="M14 32h20" /></g>,
  <g key="2"><rect {...P} x="14" y="5" width="20" height="38" rx="5" /><path {...P} d="M20 10h8" /><path {...P} d="M21 38h6" /></g>,
  <g key="3"><circle {...P} cx="24" cy="24" r="5" /><circle {...P} cx="10" cy="12" r="3" /><circle {...P} cx="38" cy="12" r="3" /><circle {...P} cx="10" cy="36" r="3" /><circle {...P} cx="38" cy="36" r="3" /><path {...P} d="m12.5 14 7.5 7M35.5 14 28 21M12.5 34l7.5-7M35.5 34 28 27" /></g>,
  <g key="4"><path {...P} d="M15 35C9 35 6 31 6 27c0-5 4-8 8-7.5C15 13 20 9 26 9c6 0 11 4 11.500 10C42 19.500 45 23 45 27.500 45 32 41.500 35 37 35Z" /><path {...P} d="M24 31V21" /><path {...P} d="m19.500 25.500 4.500-4.500 4.500 4.500" /></g>,
  <g key="5"><path {...P} d="M24 6a12 12 0 0 0-7 21.700V32h14v-4.300A12 12 0 0 0 24 6Z" /><path {...P} d="M19 37h10" /><path {...P} d="M21 42h6" /></g>,
];

function Card({ i }: { i: number }) {
  const s = services[i];
  const router = useRouter();
  const go = () => router.push("/contact");
  return (
    <Reveal delay={(i % 3) * 0.08} className="h-full">
      <Tilt className="glass group h-full rounded-3xl" max={3}>
        <div className="flex h-full flex-col p-6 md:p-7">
          <div className="flex items-start justify-between">
            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-line bg-white/[0.03] text-saffron transition-all duration-500 group-hover:border-saffron/50 group-hover:bg-saffron/10">
              <svg viewBox="0 0 48 48" className="icon-draw h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {icons[i]}
              </svg>
            </span>
            <span className="tag">{s.n}</span>
          </div>
          <h3 className="display mt-8 text-lg leading-snug md:text-xl">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-bone/55">{s.blurb}</p>
          <ul className="mt-5 space-y-1.5 text-[0.82rem] text-bone/70">
            {s.items.slice(0, 4).map((it) => (
              <li key={it} className="flex gap-2.5"><span className="mt-[0.55em] h-px w-3 shrink-0 bg-saffron" />{it}</li>
            ))}
          </ul>
          <button onClick={go} className="mt-auto flex items-center gap-2 pt-7 text-left text-sm text-bone/60 transition-colors group-hover:text-saffron">
            Start with this <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </button>
        </div>
      </Tilt>
    </Reveal>
  );
}

function Step({ i, n, p }: { i: number; n: number; p: MotionValue<number> }) {
  const t = i / (n - 1);
  const o = useTransform(p, [Math.max(0, t - 0.14), t], [0.3, 1]);
  const step = process[i];
  return (
    <motion.li style={{ opacity: o }} className="relative flex gap-5 md:block">
      <span className="relative z-10 mt-1 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-saffron bg-ink md:mt-0">
        <span className="h-1.5 w-1.5 rounded-full bg-saffron" />
      </span>
      <div className="md:mt-6">
        <p className="tag">{step.n}</p>
        <h3 className="display mt-1.5 text-lg">{step.title}</h3>
        <p className="mt-1.5 text-sm text-bone/55">{step.text}</p>
      </div>
    </motion.li>
  );
}

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.65"] });
  const w = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section className="theme-ink px-5 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="tag mb-4">// how it works</p>
          <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">One team, five steps.</h2>
        </Reveal>
        <div ref={ref} className="relative mt-14">
          <div aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-line md:block" />
          <motion.div aria-hidden style={{ width: w }} className="absolute left-0 top-[7px] hidden h-px bg-saffron shadow-[0_0_12px_rgba(255,180,84,0.6)] md:block" />
          <ol className="grid gap-8 md:grid-cols-5">
            {process.map((_, i) => <Step key={i} i={i} n={process.length} p={scrollYProgress} />)}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <section id="services" className="theme-ink px-5 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="tag mb-4">// services</p>
            <h1 className="display text-[clamp(1.9rem,3.6vw,3rem)]">What we <span className="grad-text">build.</span></h1>
            <p className="mt-3 max-w-lg text-sm text-bone/55 md:text-base">Six ways we can help, from a single page to a full platform. One accountable team, start to finish.</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((_, i) => <Card key={i} i={i} />)}
          </div>
        </div>
      </section>
      <Process />
    </>
  );
}
