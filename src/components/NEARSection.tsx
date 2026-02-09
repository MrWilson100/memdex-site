"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export default function NEARSection() {
  const [activeBenefit, setActiveBenefit] = useState<string | null>(null);
  const [glassPos, setGlassPos] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const benefitRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const setBenefitRef = useCallback((label: string, el: HTMLDivElement | null) => {
    if (el) benefitRefs.current.set(label, el);
    else benefitRefs.current.delete(label);
  }, []);

  // Update glass pane position when active benefit changes
  useEffect(() => {
    if (!activeBenefit || !gridRef.current) {
      setGlassPos(null);
      return;
    }
    const el = benefitRefs.current.get(activeBenefit);
    if (!el) { setGlassPos(null); return; }

    setGlassPos({
      left: el.offsetLeft,
      top: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
    });
  }, [activeBenefit]);

  // Close tooltip when tapping outside
  useEffect(() => {
    if (!activeBenefit) return;
    const handleTap = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.near-benefit-group')) {
        setActiveBenefit(null);
      }
    };
    document.addEventListener('click', handleTap);
    return () => document.removeEventListener('click', handleTap);
  }, [activeBenefit]);

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-glow z-[2]" />

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--background-deep)]" />

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-[1]" />

      {/* NEAR-themed accent glow - brighter, smaller on mobile */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#4A9EFF]/20 rounded-full blur-[80px] sm:blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[var(--accent)]/15 rounded-full blur-[60px] sm:blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left - NEAR Logo/Visual */}
          <div className="reveal-left flex-1 flex justify-center">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[#4A9EFF]/25 blur-3xl" />
              {/* NEAR image */}
              <img
                src="/near-logo.png"
                alt="NEAR Protocol"
                className="relative w-[260px] sm:w-[350px] lg:w-[500px] h-auto rounded-2xl sm:rounded-3xl"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2
              className="reveal text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 text-glow"
              style={{ fontFamily: "var(--font-memdex)" }}
            >
              Built on <span className="text-[#00C1DE]">NEAR</span> Protocol
            </h2>
            <div className="reveal w-32 h-0.5 bg-gradient-to-r from-transparent via-[#00C1DE] to-transparent mb-8 mx-auto lg:mx-0" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(0, 236, 151, 0.4)' }} />

            <div className="reveal space-y-4 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed" style={{ transitionDelay: '0.2s' }}>
              <p>
                The MemDex Automated Portfolio is built on NEAR Protocol because it is the only
                blockchain in the cryptoverse that provides the performance, security, low transaction
                costs, and cross-chain capabilities required to support a fully automated portfolio at
                this scale.
              </p>

              <p>
                At the core of this capability is <span className="text-[#00C1DE] font-semibold">NEAR Intents</span>,
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
            <div ref={gridRef} className="reveal-stagger relative grid grid-cols-2 gap-4 mt-8">
              {/* Sliding glass pane */}
              <span
                className="absolute rounded-md pointer-events-none z-0"
                style={{
                  left: glassPos?.left ?? 0,
                  top: glassPos?.top ?? 0,
                  width: glassPos?.width ?? 0,
                  height: glassPos?.height ?? 0,
                  opacity: glassPos ? 1 : 0,
                  background: 'linear-gradient(135deg, rgba(0,193,222,0.12), rgba(74,158,255,0.08))',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,193,222,0.25)',
                  boxShadow: '0 0 20px rgba(0,193,222,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                  transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), top 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
                }}
              />
              {[
                { label: "Low Fees", desc: "Minimal transaction costs", tooltip: "NEAR transactions cost fractions of a cent thanks to deterministic gas pricing and Nightshade sharding, avoiding the volatile fee spikes common on other blockchains.", tooltipPos: "left-0 sm:left-1/2 sm:-translate-x-1/2" },
                { label: "Cross-Chain", desc: "Multi-network execution", tooltip: "NEAR Intents enables seamless cross-chain swaps and execution without users needing to bridge assets or manage multiple wallets — all handled behind the scenes.", tooltipPos: "right-0 left-auto sm:right-auto sm:left-1/2 sm:-translate-x-1/2" },
                { label: "High Speed", desc: "Fast transaction finality", tooltip: "NEAR processes 100,000+ transactions per second with sub-second block times and roughly 1-second finality, ensuring portfolio rebalancing executes near-instantly.", tooltipPos: "left-0 sm:left-1/2 sm:-translate-x-1/2" },
                { label: "Scalable", desc: "Built for high throughput", tooltip: "Nightshade sharding processes transactions across parallel shards with dynamic resharding that automatically scales network capacity as demand increases.", tooltipPos: "right-0 left-auto sm:right-auto sm:left-1/2 sm:-translate-x-1/2" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  ref={(el) => setBenefitRef(benefit.label, el)}
                  className={`near-benefit-group group relative z-[1] p-4 border rounded-md cursor-default transition-all duration-300 ${activeBenefit === benefit.label ? 'bg-transparent border-transparent' : 'bg-[var(--primary)]/30 border-[#00C1DE]/30 hover:border-[#00C1DE]/50 hover:bg-[var(--primary)]/40'}`}
                  onClick={() => setActiveBenefit(activeBenefit === benefit.label ? null : benefit.label)}
                  onMouseEnter={() => { if (window.matchMedia('(hover: hover)').matches) setActiveBenefit(benefit.label); }}
                  onMouseLeave={() => { if (window.matchMedia('(hover: hover)').matches) setActiveBenefit(null); }}
                >
                  <p className="text-[#00C1DE] font-semibold">{benefit.label}</p>
                  <p className="text-[var(--silver-light)] text-sm">{benefit.desc}</p>
                  <span className={`absolute bottom-full ${benefit.tooltipPos} mb-2 w-72 px-4 py-3 rounded-lg text-base leading-relaxed tracking-normal text-[var(--silver-light)] bg-[var(--background-deep)]/95 border border-[#00C1DE]/20 shadow-lg shadow-black/30 backdrop-blur-md transition-opacity duration-200 z-50 ${activeBenefit === benefit.label ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:opacity-0 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto`}
                    style={{ fontFamily: 'inherit' }}
                  >
                    {benefit.tooltip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
