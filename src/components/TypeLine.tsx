"use client";
import { useEffect, useState } from "react";

export default function TypeLine({ phrases }: { phrases: string[] }) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = phrases[i];
    const t = setTimeout(() => {
      if (!del && n < full.length) setN(n + 1);
      else if (!del) setDel(true);
      else if (n > 0) setN(n - 1);
      else { setDel(false); setI((i + 1) % phrases.length); }
    }, !del && n === full.length ? 1400 : del ? 28 : 55);
    return () => clearTimeout(t);
  }, [n, del, i, phrases]);
  return <span>{phrases[i].slice(0, n)}<span className="caret" /></span>;
}
