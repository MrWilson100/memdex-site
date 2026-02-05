"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Mobile-only full-width background image */}
      <div className="absolute inset-0 sm:hidden">
        <img
          src="/hero-logo-bg.png"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Bottom fade to blend into gradient below */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-[var(--background)]/50 to-transparent" />
      </div>

      {/* Hero background image behind logo - hidden on mobile for cleaner look */}
      <div className="absolute -left-[5.5%] top-0 w-[65.5%] h-full hidden sm:block">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        {/* Gradient fade to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--background)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)]/50 via-transparent to-[var(--background)]/50" />
      </div>

      {/* Particles effect on right - hidden on mobile for better performance */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden sm:block">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + Math.random() * 3}px`,
                height: `${2 + Math.random() * 3}px`,
                background: i % 3 === 0 ? 'var(--accent)' : 'var(--silver)',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${3 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: i % 3 === 0 ? '0 0 10px var(--accent-glow)' : 'none',
              }}
            />
          ))}
        </div>
        {/* Horizontal accent glow lines */}
        <div className="absolute right-0 top-[30%] w-full h-px bg-gradient-to-l from-[var(--accent)]/30 to-transparent" />
        <div className="absolute right-0 top-[50%] w-full h-px bg-gradient-to-l from-[var(--accent)]/20 to-transparent" />
        <div className="absolute right-0 top-[70%] w-full h-px bg-gradient-to-l from-[var(--accent)]/30 to-transparent" />
      </div>

      {/* Ambient glow orbs - smaller on mobile */}
      <div className="absolute top-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[var(--accent)]/10 rounded-full blur-[80px] sm:blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/3 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[var(--primary-light)]/15 rounded-full blur-[60px] sm:blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
        {/* Left - Logo with background */}
        <div className="flex-1 flex items-center justify-center lg:justify-start py-8 sm:py-12 lg:py-0 reveal-left">
          <div className="relative -translate-x-[5%]">
            {/* Glow overlay - stronger on desktop where there's no background image */}
            <div className="absolute inset-0 bg-[var(--accent)]/10 sm:bg-[var(--accent)]/25 blur-[40px] sm:blur-[100px] rounded-full" />
            <div className="absolute inset-0 hidden sm:block bg-[var(--primary-light)]/30 blur-[60px] rounded-full" />

            <img
              src="/memdex-logo.png"
              alt="THE MEMDEX - Automated Portfolio"
              className="relative w-[280px] sm:w-[400px] md:w-[490px] lg:w-[630px] h-auto logo-breathe drop-shadow-[0_0_30px_rgba(74,158,255,0.3)]"
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 text-center lg:text-left py-6 sm:py-12 lg:py-0 lg:pl-12">
          <h1 className="reveal font-[var(--font-memdex)] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight text-glow">
            Automate Your Portfolio<br />
            with <span className="text-[var(--accent-bright)]">Cutting-Edge</span><br />
            Technology
          </h1>

          <p className="reveal text-[var(--silver-light)] text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 tracking-wide" style={{ transitionDelay: '0.1s' }}>
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
