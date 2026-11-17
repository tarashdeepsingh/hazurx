"use client";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import Scramble from "./Scramble";

export default function Enquire() {
  return (
    <section id="enquire" className="theme-paper border-y border-line/60 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1fr] md:items-start">
        <Reveal>
          <p className="tag mb-4">// get in touch</p>
          <h2 className="display text-[clamp(1.76rem,3.2vw,2.72rem)] leading-[1.05]"><Scramble text="What's the problem?" /></h2>
          <p className="mt-4 text-bone/55">Tell us a bit about it. We&apos;ll come back with a scope and a price.</p>
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
