"use client";

import { useEffect, useState } from "react";
import TechGraphic from "./hero/TechGraphic";
import PieChartAnimated from "./hero/PieChartAnimated";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    setIsMobile(mq.matches);

    // Start animation sequence after a small delay
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Cleanup will-change after animations complete
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        document.querySelectorAll('.reveal-blur').forEach(el => {
          (el as HTMLElement).style.willChange = 'auto';
        });
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  // Mobile: left text → left graphic → right text → right graphic → h1 → logo → button
  // Desktop: unchanged sequence
  const d = isMobile
    ? { leftText: '0s', leftGraphic: '0.5s', rightText: '1.0s', rightGraphic: '1.5s', h1: '2.0s', logo: '2.0s', button: '3.0s', tagline: '3.3s', datawave: '3.5s' }
    : { leftText: '0s', leftGraphic: '0.5s', rightText: '3.4s', rightGraphic: '4.0s', h1: '1.6s', logo: '1.6s', button: '4.6s', tagline: '4.9s', datawave: '5.2s' };

  return (
    <section id="home" className="relative min-h-[85vh] sm:min-h-screen pt-44 sm:pt-52 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Mobile-only full-width background image */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="/hero-mobile-bg.png"
          alt=""
          className="w-full h-full object-fill contrast-110 saturate-105"
        />
        <div className="absolute inset-0 bg-[var(--background)]/40" />
      </div>

      {/* Desktop background image */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-fill contrast-110 saturate-105"
        />
        <div className="absolute inset-0 bg-[var(--background)]/40" />
      </div>

      {/* DataWave background - spans full width behind button area */}
      <div
        className={`absolute bottom-[210px] left-0 right-0 z-[1] pointer-events-none datawave-reveal ${isVisible ? 'animate' : ''}`}
        style={{ animationDelay: d.datawave }}
      >
        <img
          src="/datawave-bg.png"
          alt=""
          className="w-full h-auto object-cover"
          style={{ transform: 'scaleY(0.65) rotate(1.5deg)', transformOrigin: 'bottom' }}
        />
      </div>

      {/* Main content - Three column grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 min-h-[calc(85vh-112px)] sm:min-h-[calc(100vh-128px)] flex items-center translate-x-0">
        <div className="hero-grid w-full py-8 lg:py-0">

          {/* LEFT COLUMN - Leverage Smart Technology */}
          <div className="hero-column hero-column-left pt-4 sm:pt-6 lg:pt-8" style={{ transform: 'translateY(-2px)' }}>
            <h2
              className={`reveal-blur font-[var(--font-memdex)] text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight text-glow ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.leftText, marginTop: isMobile ? 0 : '-1.5vh' }}
            >
              Leverage Smart<br />
              <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)] block text-right">Technology</span>
            </h2>

            <div
              className={`reveal-blur lg:self-start lg:-translate-x-6 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.leftGraphic }}
            >
              <TechGraphic />
            </div>
          </div>

          {/* CENTER COLUMN - Automate Your Portfolio + Logo */}
          <div className="hero-column hero-column-center pt-4 sm:pt-6 lg:pt-8">
            <div
              className={`reveal-blur ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.logo, marginTop: isMobile ? 0 : '4vh', order: isMobile ? 1 : 2 }}
            >
              <div className="relative">
                {/* Subtle glow overlay */}
                <div className="absolute inset-0 bg-[#4A9EFF]/8 blur-[50px] sm:blur-[70px] rounded-full" />

                <img
                  src="/memdex-logo.png"
                  alt="THE MEMDEX - Automated Portfolio"
                  className="relative w-[278px] sm:w-[330px] md:w-[407px] lg:w-[484px] h-auto logo-breathe drop-shadow-[0_0_25px_rgba(74,158,255,0.2)]"
                  style={{ top: '-2px', scale: '1.10' }}
                />
              </div>
            </div>

            <div className="relative" style={{ marginTop: isMobile ? '4vh' : '0vh', order: isMobile ? 2 : 1 }}>
              {/* Left connecting line - from left column to center */}
              <div
                className={`hidden lg:block absolute right-full h-[2px] bg-gradient-to-r from-[#4A9EFF]/30 to-[#5AC8E8] hero-line-left ${isVisible ? 'animate' : ''}`}
                style={{
                  width: '100px',
                  top: '50%',
                  transform: 'translateY(calc(-50% - 38px))',
                  marginRight: '35px',
                  boxShadow: '0 0 10px rgba(90,200,232,0.6)',
                }}
              />
              {/* Right connecting line - from center to right column */}
              <div
                className={`hidden lg:block absolute left-full h-[2px] bg-gradient-to-r from-[#5AC8E8] to-[#4A9EFF]/30 hero-line-right ${isVisible ? 'animate' : ''}`}
                style={{
                  width: '120px',
                  top: '50%',
                  transform: 'translateY(calc(-50% - 38px))',
                  marginLeft: '33px',
                  boxShadow: '0 0 10px rgba(90,200,232,0.6)',
                }}
              />
              <div
                className={`hero-title-frame reveal-blur-static ${isVisible ? 'in-view' : ''}`}
                style={{
                  transitionDelay: d.h1,
                  transform: 'translateY(-36px)',
                }}
              >
                <h1
                  className="text-metallic-shine font-[var(--font-memdex)] text-[1.35rem] sm:text-[1.7rem] lg:text-[2rem] xl:text-[2.7rem] font-bold leading-[1.1] tracking-tight"
                  style={{
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                  }}
                >
                  Automate Your Portfolio
                </h1>
              </div>
            </div>

            {/* Tagline below logo */}
            <div
              className={`reveal mt-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.tagline, transitionDuration: '1.8s', marginTop: '4vh', order: 3 }}
            >
              <p className="text-sm sm:text-base lg:text-lg tracking-[0.2em] sm:tracking-[0.25em] text-[var(--silver-light)]/70 font-light leading-relaxed"
                style={{ fontFamily: "var(--font-memdex)", transform: 'translateY(24px)' }}
              >
                AI-Assisted <span className="text-[var(--accent)]/50 mx-1">|</span> Decentralized<br />
                Multi-Sector <span className="text-[var(--accent)]/50 mx-1">|</span> Cross-Chain
              </p>
            </div>

            {/* Button below tagline */}
            <div
              className={`reveal mb-28 sm:mb-36 lg:mb-36 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.button, transitionDuration: '1.8s', marginTop: '4vh', order: 4 }}
            >
              <button className="btn-primary">
                The Whole Market, All at Once
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Watch Memdex Work */}
          <div className="hero-column hero-column-right pt-4 sm:pt-6 lg:pt-8" style={{ transform: 'translateY(-2px)' }}>
            <h2
              className={`reveal-blur font-[var(--font-memdex)] text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight text-glow lg:text-left lg:self-end lg:translate-x-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.rightText, marginTop: isMobile ? 0 : '-1.5vh' }}
            >
              Watch Memdex<br />
              <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)]">Work</span>
            </h2>

            <div
              className={`reveal-blur flex flex-col items-center lg:items-end lg:translate-x-6 lg:translate-y-4 gap-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.rightGraphic, marginTop: isMobile ? '2vh' : 0 }}
            >
              <PieChartAnimated />
            </div>
          </div>

        </div>
      </div>

      {/* Glowing divider line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
