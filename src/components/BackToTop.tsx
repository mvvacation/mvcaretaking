"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onMotionChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      mq.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gold-500 text-navy-950 shadow-luxury flex items-center justify-center hover:bg-gold-400 hover:shadow-gold focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-offset-2 ${
        reducedMotion ? "" : "transition-all duration-300"
      } ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
