"use client";

import { useEffect, useRef } from "react";
import CountUp from "./CountUp";
import WordReveal from "./WordReveal";
import ChallengeGraphic from "./ChallengeGraphic";

export default function SolutionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 639px)").matches) return;
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
            if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${offset * 120}px)`;
            if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${offset * -90}px)`;
            if (gridRef.current) gridRef.current.style.transform = `perspective(800px) rotateX(${offset * 4}deg) rotateY(${offset * 2}deg)`;
            if (phoneRef.current) phoneRef.current.style.transform = `scaleY(1.1) translateY(${offset * -220}px)`;
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

  // Mobile-only parallax for phone image
  useEffect(() => {
    if (!window.matchMedia("(max-width: 639px)").matches) return;
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
            if (blob1Ref.current) blob1Ref.current.style.transform = `translateY(${offset * 80}px)`;
            if (blob2Ref.current) blob2Ref.current.style.transform = `translateY(${offset * -60}px)`;
            if (phoneRef.current) phoneRef.current.style.transform = `scaleY(1.1) translateY(${offset * -420}px)`;
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
    <>
    {/* Grid bridge to connect with section above */}
    <div
      className="relative h-80 lg:h-96 -mb-80 lg:-mb-96 pointer-events-none z-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(74, 158, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 158, 255, 0.04) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <section id="how-it-works" ref={sectionRef} className="relative pt-28 pb-24 lg:pt-36 lg:pb-32 -mt-4 lg:-mt-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--primary-dark)] to-[var(--background-deep)]" />

      {/* Perspective grid overlay */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74, 158, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 158, 255, 0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          transformOrigin: "center center",
          willChange: "transform",
        }}
      />

      {/* Vibrant ambient lights - smaller on mobile, parallax on desktop */}
      <div ref={blob1Ref} className="absolute top-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[var(--accent)]/20 rounded-full blur-[80px] sm:blur-[150px]" />
      <div ref={blob2Ref} className="absolute bottom-1/4 right-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[var(--primary-light)]/25 rounded-full blur-[60px] sm:blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <WordReveal
            text="The MemDex Solution"
            className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-glow"
            style={{ fontFamily: "var(--font-memdex)" }}
            highlights={{ "MemDex": "text-[var(--accent-bright)]" }}
            wordDelay={0.15}
          />
          <div className="reveal w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(74, 158, 255, 0.4)' }} />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* The Challenge */}
          <div className="reveal-left mb-16">
            <h3 className="text-xl lg:text-2xl font-semibold text-[var(--accent)] mb-6 tracking-wide">The Challenge</h3>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="space-y-5 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed lg:flex-1">
                <p>
                  Anyone who has spent any meaningful time in the digital asset space is certainly aware
                  of how quickly the thrill of excitement can turn into a tumultuous, existential crisis
                  in a market that operates around the clock.
                </p>
                <p>
                  Digital asset markets move continuously, across every time zone, with no pause for rest
                  or reflection. Prices shift rapidly, information flows without interruption, and
                  sentiment can change multiple times in a single day. Over time, the constant need to
                  stay alert and responsive can take a real toll, leading to fatigue and emotional strain.
                </p>
                <p>
                  Participation often involves navigating a fragmented landscape of blockchains, wallets,
                  applications, and tools. Each asset carries its own behavior, risks, and evolving
                  narrative. Keeping track of even a small group of assets requires sustained attention.
                </p>
              </div>
              <div className="lg:flex-shrink-0 self-center lg:self-start flex flex-col items-center gap-0 -mt-8 lg:-mt-14">
                <img
                  ref={phoneRef}
                  src="/phone-transparent.png"
                  alt="MemDex mobile app"
                  className="w-56 sm:w-72 lg:w-80 h-auto mx-auto scale-y-110"
                  style={{ transform: 'scaleY(1.1)', willChange: 'transform' }}
                />
                <div className="w-56 sm:w-72 lg:w-80">
                  <ChallengeGraphic />
                </div>
              </div>
            </div>
          </div>

          {/* Glowing divider */}
          <div className="reveal w-full h-px my-16 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          {/* Our Approach */}
          <div className="reveal-right mb-16">
            <h3 className="text-xl lg:text-2xl font-semibold text-[var(--accent)] mb-6 tracking-wide">Our Approach</h3>
            <div className="space-y-5 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed">
              <p>
                MemDex is designed to operate within this reality. The MemDex Automated Portfolio
                manages a diversified set of digital assets continuously, handling monitoring and
                rebalancing according to predefined rules. The system runs in the background, allowing
                participation in the market without requiring constant intervention.
              </p>
              <p>
                The intention is to create a more sustainable way to engage with digital markets by
                reducing the mental and emotional burden of continuous decision-making.
              </p>
              <p>
                As markets continue to evolve and accelerate, MemDex provides a structured, automated
                approach that supports long-term participation in an always-on financial environment.
              </p>
            </div>
          </div>

          {/* Key benefits */}
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="feature-card p-8 text-center">
              <div className="text-3xl font-bold text-[var(--accent-bright)] mb-4 tracking-tight">
                <CountUp end={24} suffix="/7" duration={1800} />
              </div>
              <h4 className="text-white font-semibold text-lg mb-3">Always On</h4>
              <p className="text-[var(--silver-light)] text-sm leading-relaxed">Operates around the clock so you don&apos;t have to</p>
            </div>
            <div className="feature-card p-8 text-center">
              <div className="text-3xl font-bold text-[var(--accent-bright)] mb-4 tracking-tight">AI</div>
              <h4 className="text-white font-semibold text-lg mb-3">Emotion-Free</h4>
              <p className="text-[var(--silver-light)] text-sm leading-relaxed">Removes human emotion from trading decisions</p>
            </div>
            <div className="feature-card p-8 text-center">
              <div className="text-3xl font-bold text-[var(--accent-bright)] mb-4 tracking-tight">
                <CountUp end={100} duration={2200} />
              </div>
              <h4 className="text-white font-semibold text-lg mb-3">Diversified</h4>
              <p className="text-[var(--silver-light)] text-sm leading-relaxed">Broad exposure across 100 digital assets</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
    </>
  );
}
