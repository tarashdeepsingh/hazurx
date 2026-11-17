"use client";
import Link from "next/link";
import { proofs } from "@/lib/content";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function CaseStudies() {
  return (
    <section className="theme-ink px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-end justify-between gap-6">
          <div>
            <p className="tag mb-4">// at scale</p>
            <h2 className="display text-[clamp(1.6rem,3vw,2.4rem)]">Built for millions</h2>
          </div>
          <Link href="/work" className="link-u pb-1 text-sm">See our work →</Link>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {proofs.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Tilt className="glass h-full rounded-3xl" max={3}>
                <div className="flex h-full flex-col p-7">
                  <p className="tag">{p.org}</p>
                  <p className="display grad-text mt-5 text-[clamp(2.6rem,4.4vw,3.6rem)]">{p.metric}</p>
                  <p className="eyebrow mt-1">{p.metricLabel}</p>
                  <h3 className="display mt-7 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{p.points[0]}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {p.stack.map((s) => (<span key={s} className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-bone/65">{s}</span>))}
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
