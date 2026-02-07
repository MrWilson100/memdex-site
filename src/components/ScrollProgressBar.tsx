"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
          const scrolled = window.scrollY;
          setProgress(scrollHeight > 0 ? scrolled / scrollHeight : 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[var(--accent)] via-[var(--accent-bright)] to-[#5AC8E8] origin-left transition-none"
        style={{
          transform: `scaleX(${progress})`,
          boxShadow: progress > 0 ? "0 0 8px rgba(74, 158, 255, 0.5), 0 0 2px rgba(90, 200, 232, 0.3)" : "none",
        }}
      />
    </div>
  );
}
