"use client";

export default function NEARSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--background-deep)]" />

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-[1]" />

      {/* NEAR-themed accent glow - brighter */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00EC97]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-[var(--accent)]/15 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - NEAR Logo/Visual */}
          <div className="reveal-left flex-1 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#00EC97]/20 blur-3xl" />
              {/* NEAR image */}
              <img
                src="/near-logo.png"
                alt="NEAR Protocol"
                className="relative w-[350px] lg:w-[500px] h-auto rounded-3xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className="reveal text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-glow"
              style={{ fontFamily: "var(--font-memdex)" }}
            >
              Built on <span className="text-[#00EC97]">NEAR</span> Protocol
            </h2>
            <div className="reveal w-32 h-0.5 bg-gradient-to-r from-transparent via-[#00EC97] to-transparent mb-8 mx-auto lg:mx-0" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(0, 236, 151, 0.4)' }} />

            <div className="reveal space-y-4 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              <p>
                The MemDex Automated Portfolio is built on NEAR Protocol because it is the only
                blockchain in the cryptoverse that provides the performance, security, low transaction
                costs, and cross-chain capabilities required to support a fully automated portfolio at
                this scale.
              </p>

              <p>
                At the core of this capability is <span className="text-[#00EC97] font-semibold">NEAR Intents</span>,
                which allows MemDex to route transactions across multiple blockchains in a unified,
                efficient way. Instead of forcing users to manually bridge assets or manage multiple
                wallets, NEAR Intents enables seamless cross-chain execution behind the scenes.
              </p>

              <p>
                Low transaction costs and efficient execution are critical for an automated system that
                rebalances frequently. NEAR&apos;s design allows MemDex to execute portfolio adjustments with
                minimal slippage and predictable gas costs, even as activity scales.
              </p>
            </div>

            {/* Key benefits */}
            <div className="reveal-stagger grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Low Fees", desc: "Minimal transaction costs" },
                { label: "Cross-Chain", desc: "Multi-network execution" },
                { label: "High Speed", desc: "Fast transaction finality" },
                { label: "Scalable", desc: "Built for high throughput" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 bg-[var(--primary)]/30 border border-[#00EC97]/30 rounded-md hover:border-[#00EC97]/50 hover:bg-[var(--primary)]/40 transition-all duration-300"
                >
                  <p className="text-[#00EC97] font-semibold">{benefit.label}</p>
                  <p className="text-[var(--silver-light)] text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
