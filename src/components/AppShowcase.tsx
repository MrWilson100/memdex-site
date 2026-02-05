"use client";

export default function AppShowcase() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/digital-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[var(--background)]/70" />
        {/* Right side gradient to hide grey box in image */}
        <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[var(--background)] to-transparent" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-[1]" />

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-[1]" />

      {/* Wavy lines background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a3a6e" stopOpacity="0" />
              <stop offset="50%" stopColor="#1a3a6e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#1a3a6e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="wave-line"
            d="M0,300 Q360,200 720,300 T1440,300"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
          <path
            className="wave-line"
            style={{ animationDelay: "1s" }}
            d="M0,350 Q360,250 720,350 T1440,350"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
          />
          <path
            className="wave-line"
            style={{ animationDelay: "2s" }}
            d="M0,400 Q360,300 720,400 T1440,400"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Grid floor */}
      <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
        <div className="perspective-grid w-full h-full" />
      </div>

      {/* Vertical lines behind phone */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex gap-8">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="w-px h-full bg-gradient-to-b from-[var(--silver)]/30 via-[var(--silver)]/15 to-transparent"
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Phone showcase image */}
        <div className="reveal-scale flex items-center justify-center">
          <img
            src="/phone-showcase.png"
            alt="MemDex App Interface"
            className="w-auto h-[400px] sm:h-[500px] lg:h-[600px] object-contain drop-shadow-[0_0_40px_rgba(74,158,255,0.3)]"
          />
        </div>
      </div>
    </section>
  );
}
