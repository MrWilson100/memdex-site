"use client";

import { useEffect, useState } from "react";
import TechGraphic from "./hero/TechGraphic";
import PieChartAnimated from "./hero/PieChartAnimated";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
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

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen pt-28 sm:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Mobile-only full-width background image */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="/hero-mobile-bg.png"
          alt=""
          className="w-full h-full object-cover object-center contrast-110 saturate-105"
        />
        <div className="absolute inset-0 bg-[var(--background)]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      {/* Desktop background image */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-center contrast-110 saturate-105"
        />
        <div className="absolute inset-0 bg-[var(--background)]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      {/* Main content - Three column grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 min-h-[calc(85vh-112px)] sm:min-h-[calc(100vh-128px)] flex items-center -translate-x-1 lg:-translate-x-2">
        <div className="hero-grid w-full py-8 lg:py-0">

          {/* LEFT COLUMN - Leverage Our Technology */}
          <div className="hero-column hero-column-left pt-4 sm:pt-6 lg:pt-8">
            <h2
              className={`reveal-blur font-[var(--font-memdex)] text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight text-glow ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0s' }}
            >
              Leverage Our<br />
              <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)]">Technology</span>
            </h2>

            <div
              className={`reveal-blur lg:self-start lg:-translate-x-10 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '0.5s' }}
            >
              <TechGraphic />
            </div>
          </div>

          {/* CENTER COLUMN - Automate Your Portfolio + Logo */}
          <div className="hero-column pt-4 sm:pt-6 lg:pt-8">
            <div className="relative">
              {/* Left connecting line - from left column to center */}
              <div
                className={`hidden lg:block absolute right-full h-[2px] bg-gradient-to-r from-[#5AC8E8] to-[#4A9EFF]/30 hero-line-left ${isVisible ? 'animate' : ''}`}
                style={{
                  width: '120px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  marginRight: '30px',
                  boxShadow: '0 0 10px rgba(90,200,232,0.6)',
                }}
              />
              {/* Right connecting line - from center to right column */}
              <div
                className={`hidden lg:block absolute left-full h-[2px] bg-gradient-to-r from-[#5AC8E8] to-[#4A9EFF]/30 hero-line-right ${isVisible ? 'animate' : ''}`}
                style={{
                  width: '120px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  marginLeft: '38px',
                  boxShadow: '0 0 10px rgba(90,200,232,0.6)',
                }}
              />
              <h1
                className={`reveal-blur-static font-[var(--font-memdex)] text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-[1.1] tracking-tight ${isVisible ? 'in-view' : ''}`}
                style={{
                  transitionDelay: '1.6s',
                  background: 'linear-gradient(135deg, #D0D8E0 0%, #E8EEF5 30%, #FFFFFF 50%, #E0E8F0 70%, #C8D4E0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.02em',
                }}
              >
                Automate Your Portfolio
              </h1>
            </div>

            <div
              className={`reveal-blur ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '2.2s' }}
            >
              <div className="relative">
                {/* Subtle glow overlay */}
                <div className="absolute inset-0 bg-[#4A9EFF]/8 blur-[50px] sm:blur-[70px] rounded-full" />

                <img
                  src="/memdex-logo.png"
                  alt="THE MEMDEX - Automated Portfolio"
                  className="relative w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] h-auto logo-breathe drop-shadow-[0_0_25px_rgba(74,158,255,0.2)]"
                />
              </div>
            </div>

            {/* Button below logo */}
            <div
              className={`reveal-blur mt-4 mb-16 sm:mb-20 lg:mb-24 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '4.6s' }}
            >
              <button className="btn-primary">
                The Whole Market, All at Once
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Watch Memdex Work */}
          <div className="hero-column hero-column-right pt-4 sm:pt-6 lg:pt-8">
            <h2
              className={`reveal-blur font-[var(--font-memdex)] text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight text-glow lg:text-left lg:self-end lg:translate-x-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '3.4s' }}
            >
              Watch Memdex<br />
              <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)]">Work</span>
            </h2>

            <div
              className={`reveal-blur flex flex-col items-center lg:items-end lg:translate-x-10 lg:translate-y-4 gap-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: '4.0s' }}
            >
              <PieChartAnimated />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--background)] to-transparent" />

      {/* Glowing divider line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
