"use client";

export default function AboutSection() {
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

      {/* Subtle radial glow effect */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1a3a6e]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0d2147]/30 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 pt-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4d8bff] to-transparent mx-auto mb-6" />
          <p className="text-[#a0c4ff] text-lg max-w-2xl mx-auto">
            A deeper look at the technology powering the MemDex Automated Portfolio
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left column - Portfolio Engine */}
          <div className="feature-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4d8bff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4d8bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">The Portfolio Engine</h3>
            </div>
            <div className="space-y-4 text-[#a0c4ff]">
              <p>
                At the core of MemDex is a custom algorithmic rebalancing engine. This engine evaluates
                portfolio composition and executes rebalancing trades automatically based on predefined
                rules and market conditions.
              </p>
              <p>
                The goal is not to predict short-term price movements, but to manage exposure over time
                in a consistent, systematic manner.
              </p>
              <p>
                By removing human emotion from the decision-making process, MemDex is designed to avoid
                the behavioral pitfalls that often affect individual market participants.
              </p>
            </div>
          </div>

          {/* Right column - AI Research Layer */}
          <div className="feature-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4d8bff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4d8bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">AI-Assisted Research</h3>
            </div>
            <div className="space-y-4 text-[#a0c4ff]">
              <p>
                Supporting the core rebalancing engine is a custom AI research layer. This layer operates
                as a set of agential research teams that continuously monitor each asset in the portfolio.
              </p>
              <p>
                Each asset is assigned a dedicated AI research team which continuously analyzes market data,
                on-chain activity, social sentiment, and relevant news.
              </p>
              <p>
                The research output informs the algorithm&apos;s rebalancing decisions while preserving the
                integrity of the rules-based framework.
              </p>
            </div>
          </div>

          {/* Bottom left - 24/7 Market */}
          <div className="feature-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4d8bff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4d8bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Built for 24/7 Markets</h3>
            </div>
            <div className="space-y-4 text-[#a0c4ff]">
              <p>
                Digital asset markets operate globally and continuously. Managing exposure across 100 assets
                in such an environment is simply not practical for most individuals without automation.
              </p>
              <p>
                MemDex is designed to handle this complexity automatically. The system operates around the
                clock, continuously monitoring and adjusting the portfolio so users do not need to react to
                every market movement.
              </p>
            </div>
          </div>

          {/* Bottom right - Community */}
          <div className="feature-card p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#4d8bff]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[#4d8bff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Community & Ecosystem</h3>
            </div>
            <div className="space-y-4 text-[#a0c4ff]">
              <p>
                Alongside the automated portfolio is the $MEMDEX community token. The token is included
                within the portfolio and serves as a core component of the broader ecosystem.
              </p>
              <p>
                The platform incorporates a buyback and burn mechanism and is designed to support future
                community-focused features such as staking and additional utilities as the ecosystem evolves.
              </p>
            </div>
          </div>
        </div>

        {/* Transparency note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 bg-[#1a3a6e]/30 border border-[#4d8bff]/20 rounded-2xl max-w-3xl">
            <h4 className="text-xl font-bold text-white mb-3">Transparency & Responsibility</h4>
            <p className="text-[#a0c4ff]">
              Transparency is a core principle of the MemDex platform. All performance reporting is subject
              to legal review and appropriate disclosures. Independent audits, clear communication, and
              responsible presentation of data are foundational to how MemDex operates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
