import Link from "next/link";
import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="theme-ink border-t border-line px-5 py-12 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="display text-2xl">HAZUR<span className="text-saffron">X</span></p>
          <p className="mt-3 max-w-xs text-sm text-bone/50">Software studio. Web, mobile and backend.</p>
        </div>
        <nav className="flex gap-12 text-sm text-bone/70">
          <div className="flex flex-col gap-3">
            <Link href="/" className="hover:text-bone">Home</Link>
            <Link href="/services" className="hover:text-bone">Services</Link>
            <Link href="/work" className="hover:text-bone">Work</Link>
            <Link href="/experience" className="hover:text-bone">Experience</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link href="/about" className="hover:text-bone">About</Link>
            <Link href="/contact" className="hover:text-bone">Contact</Link>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-bone">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-bone">LinkedIn</a>
          </div>
        </nav>
        <div className="text-sm text-bone/50">
          <p>{site.email}</p>
          <p className="mt-1">{site.phone} · {site.location}</p>
          <p className="mt-6">© 2026 HAZUR<span className="text-saffron">X</span></p>
        </div>
      </div>
    </footer>
  );
}
