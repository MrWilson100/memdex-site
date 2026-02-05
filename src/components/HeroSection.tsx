"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen pt-28 sm:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Mobile-only full-width background image */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="/hero-mobile-bg.png"
          alt=""
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
        />
        {/* Bottom fade only - keeps image vibrant while blending at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      {/* Desktop background image - centered and vibrant */}
      <div className="absolute inset-0 hidden sm:block">
        <img
          src="/hero-bg.png"
          alt=""
          className="w-full h-full object-cover object-center brightness-110 contrast-105"
        />
        {/* Bottom fade only - keeps image vibrant while blending at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[calc(85vh-112px)] sm:min-h-[calc(100vh-128px)]">
        {/* Left - Logo with background */}
        <div className="flex-1 flex items-center justify-center lg:justify-start py-4 sm:py-12 lg:py-0 reveal-left">
          <div className="relative">
            {/* Subtle glow overlay */}
            <div className="absolute inset-0 bg-[var(--accent)]/10 blur-[40px] sm:blur-[60px] rounded-full" />

            <img
              src="/memdex-logo.png"
              alt="THE MEMDEX - Automated Portfolio"
              className="relative w-[375px] sm:w-[400px] md:w-[490px] lg:w-[630px] h-auto logo-breathe drop-shadow-[0_0_30px_rgba(74,158,255,0.3)]"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 text-center lg:text-left py-2 sm:py-12 lg:py-0 lg:pl-12">
          <h1 className="reveal font-[var(--font-memdex)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-8 tracking-tight text-glow">
            Automate Your Portfolio<br />
            with <span className="text-[var(--accent-bright)]">Cutting-Edge</span><br />
            Technology
          </h1>

          <p className="reveal text-[var(--silver-light)] text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 tracking-wide" style={{ transitionDelay: '0.1s' }}>
            <span className="text-[var(--accent)]">AI-Assisted</span>&nbsp;&nbsp;|&nbsp;&nbsp;Decentralized<br className="sm:hidden" />
            <span className="hidden sm:inline lg:hidden">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <span className="hidden lg:inline">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            Multi-Sector&nbsp;&nbsp;|&nbsp;&nbsp;<span className="text-[var(--accent)]">Cross-Chain</span>
          </p>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <button className="btn-primary">
              The Whole Market, All at Once
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade - seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[var(--background)] to-transparent" />

      {/* Glowing divider line */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
