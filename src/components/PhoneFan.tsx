import Image from "next/image";
import { appShots } from "@/lib/content";

export function Phone({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`rounded-[1.4rem] border border-line bg-ink p-1.5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.95)] ${className}`}>
      <div className="relative aspect-[1080/2340] overflow-hidden rounded-[1rem]">
        <Image src={src} alt={alt} fill sizes="160px" className="object-cover" />
      </div>
    </div>
  );
}

/** Three overlapping app screens that spread on hover of the nearest `group/phones`. */
export default function PhoneFan({ className = "" }: { className?: string }) {
  const [a, b, , d] = appShots;
  return (
    <div className={`group/phones relative mx-auto w-full ${className}`}>
      <Phone src={a.src} alt={a.alt} className="absolute left-[4%] top-[10%] z-0 w-[31%] -rotate-[7deg] transition-transform duration-500 ease-out group-hover/phones:-translate-x-3 group-hover/phones:-rotate-[10deg]" />
      <Phone src={d.src} alt={d.alt} className="absolute right-[4%] top-[10%] z-0 w-[31%] rotate-[7deg] transition-transform duration-500 ease-out group-hover/phones:translate-x-3 group-hover/phones:rotate-[10deg]" />
      <Phone src={b.src} alt={b.alt} className="absolute left-1/2 top-0 z-10 w-[36%] -translate-x-1/2 transition-transform duration-500 ease-out group-hover/phones:-translate-y-2" />
    </div>
  );
}
