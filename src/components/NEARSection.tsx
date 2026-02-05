"use client";

export default function NEARSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] to-[#0d1a2d]" />

      {/* Top divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* NEAR-themed accent glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00EC97]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - NEAR Logo/Visual */}
          <div className="flex-1 flex justify-center">
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
              className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-memdex)" }}
            >
              Built on NEAR Protocol
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4d8bff] to-transparent mb-8 mx-auto lg:mx-0" />

            <div className="space-y-4 text-[#a0c4ff] text-base lg:text-lg leading-relaxed">
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
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Low Fees", desc: "Minimal transaction costs" },
                { label: "Cross-Chain", desc: "Multi-network execution" },
                { label: "High Speed", desc: "Fast transaction finality" },
                { label: "Scalable", desc: "Built for high throughput" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 bg-[#1a3a6e]/30 border border-[#00EC97]/20 rounded-xl"
                >
                  <p className="text-[#00EC97] font-semibold">{benefit.label}</p>
                  <p className="text-[#a0c4ff] text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
