"use client";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";
import Reveal from "./Reveal";

const picks = [
  { id: "vetko", title: "Vetko Surveys", kind: "Website · Admin · Android app" },
  { id: "parakh", title: "PARAKH Dashboard", kind: "Data dashboard · NCERT" },
].map((x) => ({ ...x, p: projects.find((p) => p.id === x.id)! }));

export default function WorkPreview() {
  return (
    <section className="theme-ink px-5 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex items-end justify-between gap-6">
          <p className="tag">// recent work</p>
          <Link href="/work" className="link-u text-sm">All work →</Link>
        </Reveal>

        <div className="mt-8 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {picks.map(({ id, title, kind, p }, i) => (
            <Reveal key={id} delay={i * 0.1}>
              <Link href="/work" className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-ink-2">
                  <Image src={p.shots[0].src} alt={p.shots[0].alt} fill sizes="(min-width:768px) 46vw, 92vw" className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="display text-xl">{title}</h3>
                    <p className="tag mt-1.5">{kind}</p>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-bone/55">{p.outcome}</p>
                  </div>
                  <span aria-hidden className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-sm transition-all duration-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink">↗</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
