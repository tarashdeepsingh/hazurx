"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { projects, type Project } from "@/lib/content";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import PhoneFan from "./PhoneFan";

const byId = Object.fromEntries(projects.map((p) => [p.id, p])) as Record<string, Project>;
const shot = (p: Project, k: string) => p.shots.find((s) => s.src.includes(k))!;

function Browser({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="mx-auto w-full overflow-hidden rounded-xl border border-line bg-ink-2">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="h-1.5 w-1.5 rounded-full bg-white/15" /><span className="h-1.5 w-1.5 rounded-full bg-white/15" /><span className="h-1.5 w-1.5 rounded-full bg-white/15" />
        {url && <span className="tag ml-2 truncate !text-[0.65rem]">{url.replace("https://", "")}</span>}
      </div>
      <div className="relative aspect-[16/10]">
        <Image src={src} alt={alt} fill sizes="(min-width:768px) 40vw, 90vw" className="object-cover object-top" />
      </div>
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((s) => (<span key={s} className="rounded-full border border-line px-2.5 py-0.5 text-[0.7rem] text-bone/65">{s}</span>))}
    </div>
  );
}

function Featured() {
  const p = byId.vetko;
  const tabs = [
    { id: "app", label: "Android app" },
    { id: "web", label: "Website" },
    { id: "admin", label: "Admin" },
  ];
  const [tab, setTab] = useState("app");
  const web = shot(p, "vetko-home.jpg"), admin = shot(p, "admin-dashboard");
  return (
    <Tilt className="glass rounded-3xl" max={1.5}>
      <div className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10 md:p-10">
        <div>
          <p className="tag">Featured project</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,2.8vw,2.3rem)]">{p.name}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-bone/65 md:text-[0.95rem]">{p.outcome}</p>
          <div className="mt-5"><Tags items={p.stack} /></div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5 !text-sm">Visit website <span aria-hidden>↗</span></a>}
          </div>
          <div role="tablist" aria-label="Vetko views" className="mt-8 inline-flex rounded-full border border-line p-1">
            {tabs.map((t) => (
              <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} className={`rounded-full px-4 py-1.5 text-xs transition-colors ${tab === t.id ? "bg-bone text-ink" : "text-bone/65 hover:text-bone"}`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div className="min-h-[300px] md:min-h-[380px]">
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex h-full min-h-[300px] items-center md:min-h-[380px]">
              {tab === "app" && <PhoneFan className="h-[330px] max-w-[420px] md:h-[380px]" />}
              {tab === "web" && <Browser src={web.src} alt={web.alt} url={p.url} />}
              {tab === "admin" && <Browser src={admin.src} alt={admin.alt} url="admin.vetkosurveys.com" />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Tilt>
  );
}

const titles: Record<string, string> = { parakh: "PARAKH Dashboard", unicef: "NIS.Cost", ihpl: "Isher Holdings" };

function Card({ p }: { p: Project }) {
  return (
    <Tilt className="glass h-full rounded-3xl p-3" max={3}>
      <a href={p.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col" aria-label={`${titles[p.id]}, opens live site`}>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink-2">
          <Image src={p.shots[0].src} alt={p.shots[0].alt} fill sizes="(min-width:768px) 33vw, 92vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]" />
        </div>
        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="display text-xl">{titles[p.id]}</h3>
              <p className="tag mt-1.5">{p.kind}</p>
            </div>
            <span aria-hidden className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-sm transition-all duration-300 group-hover:border-saffron group-hover:bg-saffron group-hover:text-ink">↗</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-bone/60">{p.outcome}</p>
          <div className="mt-auto pt-5"><Tags items={p.stack.slice(0, 3)} /></div>
        </div>
      </a>
    </Tilt>
  );
}

export default function Work() {
  return (
    <section id="work" className="theme-ink px-5 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="tag mb-4">// work</p>
          <h1 className="display text-[clamp(1.9rem,3.6vw,3rem)]">Selected work</h1>
          <p className="mt-3 text-sm text-bone/55 md:text-base">Websites, platforms and apps, built end to end.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10"><Featured /></Reveal>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {(["parakh", "unicef", "ihpl"] as const).map((id, i) => (
            <Reveal key={id} delay={0.1 + i * 0.08}><Card p={byId[id]} /></Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <p className="text-sm text-bone/55">Have something in mind?</p>
          <Link href="/contact" className="btn-primary !px-5 !py-2.5 !text-sm">Start a project <span aria-hidden>↗</span></Link>
        </Reveal>
      </div>
    </section>
  );
}
