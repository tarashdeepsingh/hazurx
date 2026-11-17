"use client";
import { aboutStats, bio, strengths } from "@/lib/content";
import Counter from "./Counter";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

function StatValue({ v }: { v: string }) {
  const m = v.match(/^([\d.]+)(.*)$/)!;
  const num = parseFloat(m[1]);
  return <Counter value={num} suffix={m[2]} decimals={m[1].includes(".") ? 1 : 0} />;
}

export default function AboutStory() {
  return (
    <>
      <section className="theme-ink px-5 py-20 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <p className="tag mb-4">// the short story</p>
            <h2 className="display text-[clamp(1.76rem,3.2vw,2.72rem)]">Learned in production.</h2>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {bio.facts.map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-4">
                  <dt className="tag">{k}</dt>
                  <dd className="text-right text-sm">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-base leading-relaxed text-bone/75 md:text-lg">
            {bio.paras.slice(1).map((p) => <p key={p}>{p}</p>)}
          </Reveal>
        </div>

        <div className="mx-auto mt-20 grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-line bg-line grid-cols-2 lg:grid-cols-4">
          {aboutStats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="h-full bg-ink/70 p-5 backdrop-blur-xl sm:p-7">
                <p className="display grad-text text-[clamp(2.08rem,3.1vw,2.72rem)]"><StatValue v={s.v} /></p>
                <p className="eyebrow mt-3 max-w-[14rem]">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="theme-ink px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="tag mb-4">// where we're strongest</p></Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <Tilt className="glass h-full rounded-3xl" max={4}>
                  <div className="flex h-full min-h-[15rem] flex-col justify-between p-7">
                    <span className="tag">// {s.n}</span>
                    <div>
                      <h3 className="display text-xl md:text-2xl">{s.title}</h3>
                      <p className="mt-3 leading-relaxed text-bone/60">{s.text}</p>
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
