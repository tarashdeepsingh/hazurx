"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Intro() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("hx-intro") === "1"; sessionStorage.setItem("hx-intro", "1"); } catch {}
    if (seen || location.search.includes("nointro") || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setShow(true);
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div key="intro" className="fixed inset-0 z-[200] flex items-center justify-center bg-black" style={{ animation: "intro-failsafe 0s linear 3s forwards" }} exit={{ y: "-100%" }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }} className="display text-[clamp(2.4rem,6.3vw,5.44rem)] text-white">
            HAZUR<span className="text-saffron">X</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
