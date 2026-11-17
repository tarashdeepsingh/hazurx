"use client";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const tel = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);

  // start clean: clear anything left over from an older visit
  useEffect(() => {
    try { sessionStorage.removeItem("hx-interest"); } catch {}
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry from ${name}`;
    const body = [
      "Hi HAZURX team,",
      "",
      `Name: ${name}`,
      `Email: ${from}`,
      "",
      "What I need built:",
      msg,
      "",
      "Thanks,",
      name,
    ].join("\r\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  const label = "mb-1.5 block text-xs text-bone/55";
  const field = "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-base text-bone outline-none transition-colors placeholder:text-bone/25 focus:border-saffron";

  return (
    <form onSubmit={submit} className="w-full max-w-lg space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Your name</label>
          <input id="cf-name" required autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Your email</label>
          <input id="cf-email" required type="email" autoComplete="email" value={from} onChange={(e) => setFrom(e.target.value)} placeholder="jane@company.com" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-msg" className={label}>What do you need built?</label>
        <textarea id="cf-msg" required rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="A few lines about your idea or problem" className={`${field} resize-none`} />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-1">
        <button type="submit" className="btn-primary">
          {sent ? "Opening your email app…" : "Send message"} <span aria-hidden>↗</span>
        </button>
        <a href={tel} className="group flex items-center gap-3 text-sm text-bone/70 transition-colors hover:text-saffron">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-line transition-colors group-hover:border-saffron">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
            </svg>
          </span>
          <span>Prefer to talk?<br /><span className="text-bone">{site.phone}</span></span>
        </a>
      </div>

      <p className="text-xs leading-relaxed text-bone/45">
        This opens your email app with everything filled in. Just press send.
        {sent && <> Nothing opened? Write to <a className="text-saffron underline" href={`mailto:${site.email}`}>{site.email}</a>.</>}
      </p>
    </form>
  );
}
