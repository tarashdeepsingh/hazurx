"use client";
import { achievements } from "@/lib/content";
import Reveal from "./Reveal";

export default function Recognition() {
  return (
    <section className="theme-ink px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal><p className="tag mb-4">// recognition</p></Reveal>
        <div className="border-t border-line">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[6rem_1fr]">
                <span className="tag pt-1">{a.year}</span>
                <div>
                  <h3 className="display text-lg md:text-xl">{a.title}{a.org && <span className="text-bone/50">, {a.org}</span>}</h3>
                  <p className="mt-1.5 text-sm text-bone/60">{a.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
