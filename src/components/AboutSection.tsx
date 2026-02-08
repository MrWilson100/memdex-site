"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          if (!section) { ticking = false; return; }
          const rect = section.getBoundingClientRect();
          const wh = window.innerHeight;
          if (rect.bottom > 0 && rect.top < wh) {
            const offset = ((wh - rect.top) / (wh + rect.height) - 0.5) * 2;
            if (blob1Ref.current) blob1Ref.current.style.transform = `translate(-50%, calc(-50% + ${offset * 140}px))`;
            if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${offset * -100}px)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative pt-32 pb-0 lg:pt-10 lg:pb-0 -mt-16 lg:-mt-8 overflow-hidden">
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

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-[1]" />

      {/* Subtle radial glow effect - smaller on mobile, parallax on desktop */}
      <div ref={blob1Ref} className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-[var(--primary)]/20 rounded-full blur-[80px] sm:blur-[150px]" />
      <div ref={blob2Ref} className="absolute bottom-0 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[var(--primary-dark)]/30 rounded-full blur-[60px] sm:blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 pt-8">
        {/* Section header */}
        <div className="text-center mb-8 lg:mb-20">
          <h2
            className="reveal text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-glow"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            How It <span className="text-[var(--accent-bright)]">Works</span>
          </h2>
          <div className="reveal w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto mb-6" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(74, 158, 255, 0.4)' }} />
          <p className="reveal text-[var(--silver)] text-lg max-w-2xl mx-auto" style={{ transitionDelay: '0.15s' }}>
            A deeper look at the technology powering the MemDex Automated Portfolio
          </p>
        </div>

        {/* Cards - horizontal swipe on mobile, 2x2 grid on desktop */}
        {(() => {
          const cards = [
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />,
              title: "The Portfolio Engine",
              content: [
                "At the core of MemDex is a custom algorithmic rebalancing engine. This engine evaluates portfolio composition and executes rebalancing trades automatically based on predefined rules and market conditions.",
                "The goal is not to predict short-term price movements, but to manage exposure over time in a consistent, systematic manner.",
                "By removing human emotion from the decision-making process, MemDex is designed to avoid the behavioral pitfalls that often affect individual market participants.",
              ],
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />,
              title: "AI-Assisted Research",
              content: [
                "Supporting the core rebalancing engine is a custom AI research layer. This layer operates as a set of agential research teams that continuously monitor each asset in the portfolio.",
                "Each asset is assigned a dedicated AI research team which continuously analyzes market data, on-chain activity, social sentiment, and relevant news.",
                "The research output informs the algorithm\u2019s rebalancing decisions while preserving the integrity of the rules-based framework.",
              ],
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />,
              title: "Built for 24/7 Markets",
              content: [
                "Digital asset markets operate globally and continuously. Managing exposure across 100 assets in such an environment is simply not practical for most individuals without automation.",
                "MemDex is designed to handle this complexity automatically. The system operates around the clock, continuously monitoring and adjusting the portfolio so users do not need to react to every market movement.",
              ],
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />,
              title: "Community & Ecosystem",
              content: [
                "Alongside the automated portfolio is the $MEMDEX community token. The token is included within the portfolio and serves as a core component of the broader ecosystem.",
                "The platform incorporates a buyback and burn mechanism and is designed to support future community-focused features such as staking and additional utilities as the ecosystem evolves.",
              ],
            },
          ];

          const renderCard = (card: typeof cards[0], index: number, contentOpacity?: number) => (
            <div key={index} className="feature-card p-8">
              <div style={typeof contentOpacity === 'number' ? { opacity: contentOpacity, transition: 'opacity 0.5s ease-out' } : undefined}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {card.icon}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                </div>
                <div className="space-y-4 text-[var(--silver-light)]">
                  {card.content.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>
            </div>
          );

          return (
            <>
              {/* Mobile: playing cards fan effect */}
              <div className="lg:hidden reveal">
                <div
                  className="relative grid"
                  style={{ gridTemplateColumns: '1fr' }}
                  onTouchStart={(e) => {
                    touchStartRef.current = e.touches[0].clientX;
                  }}
                  onTouchEnd={(e) => {
                    const diff = touchStartRef.current - e.changedTouches[0].clientX;
                    if (Math.abs(diff) > 50) {
                      if (diff > 0 && activeCard < cards.length - 1) {
                        setActiveCard(prev => prev + 1);
                      } else if (diff < 0 && activeCard > 0) {
                        setActiveCard(prev => prev - 1);
                      }
                    }
                  }}
                >
                  {cards.map((card, i) => {
                    const offset = i - activeCard;
                    const isPast = offset < 0;
                    const isActive = offset === 0;

                    let transform: string;
                    let opacity: number;
                    let zIdx: number;

                    if (isPast) {
                      transform = 'translateX(-110%) rotate(-8deg)';
                      opacity = 0;
                      zIdx = 0;
                    } else if (isActive) {
                      transform = 'rotate(0deg)';
                      opacity = 1;
                      zIdx = cards.length;
                    } else {
                      transform = `rotate(${offset * 5}deg)`;
                      opacity = 0.7 - offset * 0.15;
                      zIdx = cards.length - offset;
                    }

                    return (
                      <div
                        key={i}
                        className="transition-all duration-500 ease-out"
                        style={{
                          gridArea: '1 / 1',
                          transform,
                          transformOrigin: '50% 130%',
                          zIndex: zIdx,
                          opacity,
                          pointerEvents: isActive ? 'auto' : 'none',
                          filter: offset > 0 ? `brightness(${1 - offset * 0.08})` : 'none',
                        }}
                      >
                        {renderCard(card, i, isActive ? undefined : 0.1)}
                      </div>
                    );
                  })}
                </div>
                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-6">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{
                        background: activeCard === i ? 'var(--accent)' : 'rgba(184, 197, 208, 0.3)',
                        transform: activeCard === i ? 'scale(1.3)' : 'scale(1)',
                        boxShadow: activeCard === i ? '0 0 8px rgba(74, 158, 255, 0.5)' : 'none',
                      }}
                      onClick={() => setActiveCard(i)}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop: 2x2 grid */}
              <div className="hidden lg:grid reveal-stagger grid-cols-2 gap-8">
                {cards.map((card, i) => renderCard(card, i))}
              </div>
            </>
          );
        })()}

      </div>

      {/* Transparency banner - full width */}
      <div className="reveal relative z-10 mt-28 lg:mt-36" style={{ transitionDelay: '0.3s' }}>
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
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
