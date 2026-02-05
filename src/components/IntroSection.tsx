"use client";

export default function IntroSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/console-plate-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[#0a1628]/60" />
      </div>

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4d8bff]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Title */}
        <h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-memdex)" }}
        >
          The MemDex Automated Portfolio
        </h2>

        {/* Subtitle */}
        <p
          className="text-2xl lg:text-3xl text-[#4d8bff] mb-8"
          style={{ fontFamily: "var(--font-memdex)" }}
        >
          The Whole Market. All At Once.
        </p>

        {/* Description */}
        <div className="max-w-4xl mx-auto">
          <p className="text-[#a0c4ff] text-lg lg:text-xl leading-relaxed mb-8">
            The MemDex Automated Portfolio is a fully automated, cross-chain digital asset portfolio
            powered by a custom rules-based algorithm and AI research layer. Built on NEAR Protocol,
            MemDex continuously curates and rebalances a portfolio of 100 digital assets across major
            sectors of the crypto ecosystem.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "100 Assets",
              "Algorithmic Rebalancing",
              "AI-Assisted Research",
              "Cross-Chain",
              "Built on NEAR",
            ].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-[#1a3a6e]/50 border border-[#4d8bff]/30 rounded-full text-white text-sm"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <button className="btn-primary text-base">Full Overview</button>
        </div>
      </div>
    </section>
  );
}
