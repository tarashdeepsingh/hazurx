"use client";
import Link from "next/link";
import { bio, principles } from "@/lib/content";
import Reveal from "./Reveal";

export default function HomeAbout() {
  return (
    <section className="theme-ink px-5 pb-24 pt-8 md:px-10 md:pb-36">
      <div className="mx-auto grid max-w-6xl gap-14 border-t border-line pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-0">
        {/* who we are */}
        <Reveal className="lg:pr-14">
          <p className="tag">// who we are</p>
          <h2 className="display mt-5 text-[clamp(1.6rem,2.8vw,2.3rem)] leading-[1.1]">
            A founder-led <span className="grad-text">software studio.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/65">{bio.lead}</p>
          <p className="tag mt-5">Led by {bio.name}</p>
          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-2 text-sm">
            <Link href="/about" className="link-u">About us →</Link>
            <Link href="/experience" className="link-u">Our experience →</Link>
          </div>
        </Reveal>

        {/* how we work */}
        <Reveal delay={0.1} className="lg:border-l lg:border-line lg:pl-14">
          <p className="tag">// how we work</p>
          <p className="display mt-5 text-[clamp(1.35rem,2.1vw,1.75rem)] leading-[1.15]">
            Work is the priority. <span className="grad-text">More of it, always.</span>
          </p>
          <ol className="mt-6 divide-y divide-line border-y border-line">
            {principles.map((p) => (
              <li key={p.n} className="flex items-center gap-4 py-3.5 text-sm text-bone/70">
                <span className="tag w-6 shrink-0 !text-saffron">{p.n}</span>
                <span>{p.title}</span>
              </li>
            ))}
          </ol>
          <Link href="/about#principles" className="link-u mt-6 text-sm">Read the principles →</Link>
        </Reveal>
      </div>
    </section>
  );
}
