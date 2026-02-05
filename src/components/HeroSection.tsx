"use client";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Hero background image behind logo */}
      <div className="absolute -left-[5.5%] top-0 w-[65.5%] h-full">
        <img
          src="/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        {/* Gradient fade to blend into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a1628]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/50 via-transparent to-[#0a1628]/50" />
      </div>

      {/* Light particles effect on right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#4d8bff] rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        {/* Horizontal glow lines */}
        <div className="absolute right-0 top-[30%] w-full h-px bg-gradient-to-l from-[#4d8bff]/40 to-transparent" />
        <div className="absolute right-0 top-[50%] w-full h-px bg-gradient-to-l from-[#4d8bff]/30 to-transparent" />
        <div className="absolute right-0 top-[70%] w-full h-px bg-gradient-to-l from-[#4d8bff]/40 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)]">
        {/* Left - Logo */}
        <div className="flex-1 flex items-center justify-center lg:justify-start py-12 lg:py-0">
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-[#4d8bff]/10 blur-3xl rounded-full" />

            <img
              src="/memdex-logo.png"
              alt="THE MEMDEX - Automated Portfolio"
              className="relative w-[490px] lg:w-[630px] h-auto"
              style={{ animation: "breathe 8s ease-in-out infinite" }}
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex-1 text-center lg:text-left py-12 lg:py-0 lg:pl-12">
          <h1 className="font-[var(--font-memdex)] text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
            Automate Your Portfolio<br />
            with Cutting-Edge<br />
            Technology
          </h1>

          <p className="text-[#a0c4ff] text-base lg:text-lg mb-8 tracking-wide">
            AI-Assisted | Decentralized<br className="lg:hidden" />
            <span className="hidden lg:inline"> | </span>
            Multi-Sector | Cross-Chain
          </p>

          <button className="btn-primary text-base">
            The Whole Market, All at Once
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent" />
    </section>
  );
}
