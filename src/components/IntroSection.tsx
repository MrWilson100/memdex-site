"use client";

import { useState } from "react";
import OverviewModal from "./OverviewModal";

export default function IntroSection() {
  const [overviewOpen, setOverviewOpen] = useState(false);

  return (
    <section id="overview" className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/console-plate-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[var(--background)]/70" />
      </div>

      {/* Ambient glow lights - smaller on mobile for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[200px] sm:h-[400px] bg-[var(--accent)]/15 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[var(--primary-light)]/20 rounded-full blur-[60px] sm:blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="reveal text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 tracking-tight text-glow"
          style={{ fontFamily: "var(--font-memdex)" }}
        >
          The <span className="text-[var(--accent-bright)]">MemDex</span> Automated Portfolio
        </h2>

        {/* Glowing divider */}
        <div className="reveal w-32 h-0.5 mx-auto mb-6 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(74, 158, 255, 0.4)' }} />

        {/* Subtitle */}
        <p
          className="reveal text-xl lg:text-2xl text-[var(--silver-light)] mb-10"
          style={{ fontFamily: "var(--font-memdex)", transitionDelay: '0.15s' }}
        >
          The Whole Market. <span className="text-[var(--accent)]">All At Once.</span>
        </p>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <p className="reveal text-[var(--silver-light)] text-lg lg:text-xl leading-relaxed mb-10" style={{ transitionDelay: '0.2s' }}>
            The MemDex Automated Portfolio is a fully automated, cross-chain digital asset portfolio
            powered by a custom rules-based algorithm and AI research layer. Built on NEAR Protocol,
            MemDex continuously curates and rebalances a portfolio of 100 digital assets across major
            sectors of the crypto ecosystem.
          </p>

          {/* Feature pills */}
          <div className="reveal-stagger flex flex-wrap justify-center gap-3 mb-12">
            {[
              "100 Assets",
              "Algorithmic Rebalancing",
              "AI-Assisted Research",
              "Cross-Chain",
              "Built on NEAR",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-5 py-2.5 bg-[var(--primary)]/40 border border-[var(--accent)]/30 rounded-md text-white text-sm tracking-wide hover:border-[var(--accent)]/60 hover:bg-[var(--primary)]/60 transition-all duration-300 cursor-default"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <div className="reveal" style={{ transitionDelay: '0.4s' }}>
            <button className="btn-primary" onClick={() => setOverviewOpen(true)}>Full Overview</button>
          </div>
        </div>
      </div>

      <OverviewModal isOpen={overviewOpen} onClose={() => setOverviewOpen(false)} />

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
