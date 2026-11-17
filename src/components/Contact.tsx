"use client";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="theme-ink px-5 pb-28 pt-36 md:px-10 md:pb-40 md:pt-48">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          
          <h2 className="display text-[clamp(2.4rem,5.4vw,4.6rem)]">
            Let&apos;s build<span className="text-saffron">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          
          <ContactForm />
        </Reveal>

      </div>
    </section>
  );
}
