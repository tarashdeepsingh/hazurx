"use client";
import { motion, useScroll, useSpring } from "motion/react";

/** Thin amber scroll-progress line at the top of the page. */
export default function ScrollUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-saffron" />;
}
