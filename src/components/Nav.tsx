"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [["Services", "/services"], ["Work", "/work"], ["Experience", "/experience"], ["About", "/about"]] as const;

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-500 md:px-10 md:py-5 ${scrolled ? "bg-gradient-to-b from-ink/90 via-ink/50 to-transparent" : ""}`}>
        <Link href="/" className="display relative z-10 text-xl">
          HAZUR<span className="text-saffron">X</span>
        </Link>
        <nav className={`glass hidden items-center gap-1 rounded-full p-1 transition-all duration-500 md:flex ${scrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : ""}`}>
          {links.map(([l, h]) => {
            const active = path.startsWith(h);
            return (
              <Link key={h} href={h} className={`rounded-full px-5 py-2 text-sm transition-colors ${active ? "bg-bone text-ink" : "text-bone/70 hover:bg-white/10 hover:text-bone"}`}>
                {l}
              </Link>
            );
          })}
        </nav>
        <div className="relative z-10 flex items-center gap-4">
          <Link href="/contact" className="glass hidden rounded-full px-5 py-2.5 text-sm transition-colors hover:border-saffron hover:text-saffron sm:block">
            Start a project
          </Link>
          <button onClick={() => setOpen((o) => !o)} aria-label="Menu" className="glass rounded-full px-4 py-2 text-sm md:hidden">{open ? "Close" : "Menu"}</button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-center gap-6 bg-ink/95 px-8 backdrop-blur-xl md:hidden">
          {[["Home", "/"], ...links, ["Contact", "/contact"]].map(([l, h]) => (
            <Link key={h} href={h} className="display text-4xl">{l}</Link>
          ))}
        </div>
      )}
    </>
  );
}
