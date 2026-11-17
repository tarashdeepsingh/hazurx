import { services } from "@/lib/content";

export default function Marquee() {
  const items = services.map((s) => s.title);
  const row = [...items, ...items];
  return (
    <section aria-label="Services" className="theme-ink overflow-hidden border-y border-line py-6">
      <div className="ticker-track">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center" aria-hidden={k === 1}>
            {row.map((t, i) => (
              <span key={`${k}-${i}`} className="display flex items-center text-[clamp(1.12rem,1.8vw,1.5rem)] text-bone/40">
                {t}
                <span className="mx-8 inline-block h-1.5 w-1.5 rotate-45 bg-saffron" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
