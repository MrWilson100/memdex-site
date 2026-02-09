"use client";

import { useEffect, useState, useRef, useCallback } from "react";
// Kept for future use:
// import TechGraphic from "./hero/TechGraphic";
// import PieChartAnimated from "./hero/PieChartAnimated";
import OverviewModal from "./OverviewModal";
import AITradingGraphic from "./AITradingGraphic";
import TechLeverageGraphic from "./TechLeverageGraphic";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [activePill, setActivePill] = useState<string | null>(null);
  const [glassPos, setGlassPos] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const pillContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Map<string, HTMLSpanElement>>(new Map());

  const setPillRef = useCallback((label: string, el: HTMLSpanElement | null) => {
    if (el) pillRefs.current.set(label, el);
    else pillRefs.current.delete(label);
  }, []);

  // Update glass pane position when active pill changes
  useEffect(() => {
    if (!activePill || !pillContainerRef.current) {
      setGlassPos(null);
      return;
    }
    const pillEl = pillRefs.current.get(activePill);
    if (!pillEl) { setGlassPos(null); return; }

    setGlassPos({
      left: pillEl.offsetLeft,
      top: pillEl.offsetTop,
      width: pillEl.offsetWidth,
      height: pillEl.offsetHeight,
    });
  }, [activePill]);

  useEffect(() => {
    // Start animation sequence after a small delay
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Close pill tooltip when tapping outside
  useEffect(() => {
    if (!activePill) return;
    const handleTap = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.pill-tooltip-group')) {
        setActivePill(null);
      }
    };
    document.addEventListener('click', handleTap);
    return () => document.removeEventListener('click', handleTap);
  }, [activePill]);

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

  // Animation sequence: h1 + logo → button → tagline → datawave
  const d = { h1: '0s', logo: '0s', button: '1.0s', tagline: '1.3s', datawave: '1.5s', sideGraphic: '1.5s', sideText: '1.8s' };

  return (
    <section id="home" className="relative min-h-screen sm:min-h-[110vh] pt-32 sm:pt-44 overflow-hidden">
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

      {/* Tech Leverage Graphic - top left */}
      <div
        className={`absolute top-[17%] left-[7%] lg:left-[13%] lg:top-[20%] z-[2] w-[95px] lg:w-[180px] xl:w-[220px] pointer-events-none reveal-blur ${isVisible ? 'in-view' : ''}`}
        style={{ transitionDelay: d.sideGraphic }}
      >
        <div style={{ opacity: 0.55 }}>
          <TechLeverageGraphic />
        </div>
      </div>

      {/* "Leverage Smart Technology" text - left side */}
      <div className="absolute top-[28%] lg:top-[36%] left-[7%] lg:left-[13%] z-[2] pointer-events-none">
        <h2
          className={`reveal-blur font-[var(--font-memdex)] text-[10px] lg:text-lg xl:text-xl font-bold text-white tracking-tight text-glow ${isVisible ? 'in-view' : ''}`}
          style={{ transitionDelay: d.sideText, opacity: 0.55 }}
        >
          Leverage Smart<br />
          <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)] block text-right">Technology</span>
        </h2>
      </div>

      {/* AI Trading Graphic - top right */}
      <div
        className={`absolute top-[17%] right-[7%] lg:right-[13%] lg:top-[20%] z-[2] w-[95px] lg:w-[180px] xl:w-[220px] pointer-events-none reveal-blur ${isVisible ? 'in-view' : ''}`}
        style={{ transitionDelay: d.sideGraphic }}
      >
        <div style={{ opacity: 0.55 }}>
          <AITradingGraphic />
        </div>
      </div>

      {/* "Watch Memdex Work" text - right side */}
      <div className="absolute top-[28%] lg:top-[36%] right-[7%] lg:right-[13%] z-[2] pointer-events-none">
        <h2
          className={`reveal-blur font-[var(--font-memdex)] text-[10px] lg:text-lg xl:text-xl font-bold text-white tracking-tight text-glow ${isVisible ? 'in-view' : ''}`}
          style={{ transitionDelay: d.sideText, opacity: 0.55 }}
        >
          Enjoy a Hands-Off<br />
          <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)] block text-left">Experience</span>
        </h2>
      </div>

      {/* DataWave background - behind the h1 title, position synced via JS */}
      <div
        className={`absolute left-0 right-0 z-[1] pointer-events-none datawave-reveal top-[55%] lg:top-[58%] ${isVisible ? 'animate' : ''}`}
        style={{ animationDelay: d.datawave, transform: 'translateY(-50%)' }}
      >
        <img
          src="/datawave-bg.png"
          alt=""
          className="w-full h-auto object-cover [transform:scaleY(0.45)_rotate(1.5deg)] lg:[transform:scaleY(0.22)_rotate(1.5deg)]"
          style={{ transformOrigin: 'center' }}
        />
      </div>

      {/* Main content - centered column */}
      <div className="relative z-10 w-full min-h-[calc(100vh-112px)] sm:min-h-[calc(110vh-128px)] flex items-center justify-center">
        <div className="flex flex-col items-center text-center w-full py-8 lg:py-0 gap-4">

          {/* LEFT COLUMN - Leverage Smart Technology (hidden for now, kept for future use)
          {!isMobile && (
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
          )}
          */}

          {/* CENTER COLUMN - Automate Your Portfolio + Logo */}
          <div className="flex flex-col items-center text-center w-full pt-4 sm:pt-6 lg:pt-8 gap-4">
            <div
              className={`reveal-blur w-full ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.logo, marginTop: '-3vh', order: 1 }}
            >
              <div className="relative w-full flex justify-center">
                {/* Subtle glow overlay */}
                <div className="absolute inset-0 bg-[#4A9EFF]/8 blur-[50px] sm:blur-[70px] rounded-full" />

                <img
                  src="/memdex-logo.png"
                  alt="THE MEMDEX - Automated Portfolio"
                  className="relative w-[321px] sm:w-[330px] md:w-[407px] lg:w-[484px] h-auto logo-breathe drop-shadow-[0_0_25px_rgba(74,158,255,0.2)] -translate-y-1 sm:-translate-y-[51px]"
                  style={{ scale: '0.84' }}
                />
              </div>
            </div>

            <div className="relative" style={{ marginTop: '1vh', order: 2 }}>
              {/* Connecting lines (hidden for now, kept for future use)
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
              */}
              <div
                className={`relative z-[1] hero-title-frame reveal-blur-static translate-y-[-2px] sm:-translate-y-[63px] ${isVisible ? 'in-view' : ''}`}
                style={{
                  transitionDelay: d.h1,
                }}
              >
                <h1
                  className="text-metallic-shine font-[var(--font-memdex)] text-[0.95rem] sm:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.85rem] font-bold leading-[1.1] tracking-tight"
                  style={{
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.02em',
                  }}
                >
                  The Whole Market, All at Once
                </h1>
              </div>
            </div>

            {/* Tagline below logo */}
            <div
              className={`reveal mt-4 relative z-[2] translate-y-[20px] sm:-translate-y-[30px] ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.tagline, transitionDuration: '1.8s', marginTop: '-3vh', order: 3 }}
            >
              <div
                ref={pillContainerRef}
                className="relative flex flex-wrap justify-center gap-1.5 sm:gap-2"
                style={{ fontFamily: "var(--font-memdex)", transform: 'translateY(15px)' }}
              >
                {/* Sliding glass pane */}
                <span
                  className="absolute rounded-full pointer-events-none z-0"
                  style={{
                    left: glassPos?.left ?? 0,
                    top: glassPos?.top ?? 0,
                    width: glassPos?.width ?? 0,
                    height: glassPos?.height ?? 0,
                    opacity: glassPos ? 1 : 0,
                    background: 'linear-gradient(135deg, rgba(90,200,232,0.12), rgba(74,158,255,0.08))',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(90,200,232,0.25)',
                    boxShadow: '0 0 20px rgba(90,200,232,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                    transition: 'left 0.4s cubic-bezier(0.4, 0, 0.2, 1), top 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease',
                  }}
                />
                {([
                  { label: "Algorithmic Management", desc: "Rules-based rebalancing engine that automatically adjusts portfolio allocation based on market conditions." },
                  { label: "AI Research", desc: "Dedicated AI research teams continuously monitor each asset using market data, on-chain activity, and sentiment analysis." },
                  { label: "Multi-Sector", desc: "Diversified exposure across major crypto sectors including Blue Chips, Memecoins, RWA's, Gaming, AI, and more." },
                  { label: "Cross-Chain", desc: "Portfolio spans multiple blockchains, capturing opportunities across the entire digital asset ecosystem." },
                  { label: "100 Assets", desc: "Broad market coverage with 100 curated digital assets, continuously evaluated and rebalanced." },
                ] as const).map((item) => (
                  <span
                    key={item.label}
                    ref={(el) => setPillRef(item.label, el)}
                    className={`pill-tooltip-group relative z-[1] group px-3 py-1.5 sm:px-4 sm:py-1.5 text-xs sm:text-xs lg:text-sm tracking-[0.15em] font-light border rounded-full cursor-default transition-colors duration-300 ${activePill === item.label ? 'text-white/90 border-[rgba(90,200,232,0.3)] bg-transparent pill-scan' : 'text-[var(--silver-light)]/70 border-[var(--silver-light)]/15 bg-white/[0.03]'}`}
                    onClick={() => setActivePill(activePill === item.label ? null : item.label)}
                  >
                    <span className="pill-scan-beams" />
                    {item.label}
                    <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 px-4 py-3 rounded-lg text-base leading-relaxed tracking-normal text-[var(--silver-light)] bg-[var(--background-deep)]/95 border border-[var(--accent)]/20 shadow-lg shadow-black/30 backdrop-blur-md transition-opacity duration-200 z-50 ${activePill === item.label ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:opacity-0 lg:pointer-events-none lg:group-hover:opacity-100 lg:group-hover:pointer-events-auto`}
                      style={{ fontFamily: 'inherit' }}
                    >
                      {item.desc}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* Button below tagline */}
            <div
              className={`reveal mb-20 sm:mb-36 lg:mb-36 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.button, transitionDuration: '1.8s', marginTop: '2vh', order: 4, transform: 'translateY(30px)' }}
            >
              <button className="btn-primary mt-5 sm:mt-0" onClick={() => setOverviewOpen(true)}>
                Full Overview
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - Watch Memdex Work (hidden for now, kept for future use)
          {!isMobile && (
          <div className="hero-column hero-column-right pt-4 sm:pt-6 lg:pt-8" style={{ transform: 'translateY(-2px)' }}>
            <h2
              className={`reveal-blur font-[var(--font-memdex)] text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight text-glow lg:text-left lg:self-end lg:translate-x-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.rightText, marginTop: isMobile ? 0 : '-1.5vh' }}
            >
              Watch Memdex<br />
              <span className="text-[#5AC8E8] drop-shadow-[0_0_8px_rgba(90,200,232,0.4)] block text-left">Work</span>
            </h2>

            <div
              className={`reveal-blur flex flex-col items-center lg:items-end lg:translate-x-6 lg:translate-y-4 gap-4 ${isVisible ? 'in-view' : ''}`}
              style={{ transitionDelay: d.rightGraphic, marginTop: isMobile ? '2vh' : 0 }}
            >
              <PieChartAnimated />
            </div>
          </div>
          )}
          */}

        </div>
      </div>

      {/* Glowing divider line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />

      <OverviewModal isOpen={overviewOpen} onClose={() => setOverviewOpen(false)} />
    </section>
  );
}
