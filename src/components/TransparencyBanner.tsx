"use client";

import { useEffect, useState, useRef } from "react";

export default function TransparencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal relative z-10 -mt-1 ${isVisible ? 'in-view' : ''}`} style={{ transitionDelay: '0.3s' }}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
      <div
        className="py-10 px-6 text-center"
        style={{ background: 'linear-gradient(180deg, rgba(74, 158, 255, 0.04) 0%, transparent 100%)' }}
      >
        <div className="max-w-3xl mx-auto">
          <h4 className="text-lg font-semibold text-[var(--silver)] mb-3 tracking-wide uppercase" style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}>Transparency & Responsibility</h4>
          <p className="text-[var(--silver-light)]/70 text-sm leading-relaxed">
            Transparency is a core principle of the MemDex platform. All performance reporting is subject
            to legal review and appropriate disclosures. Independent audits, clear communication, and
            responsible presentation of data are foundational to how MemDex operates.
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />
    </div>
  );
}
