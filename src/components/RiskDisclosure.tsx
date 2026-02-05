"use client";

export default function RiskDisclosure() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/console-plate-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[#0a1628]/60" />
        {/* Top gradient fade to blend with section above */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a1628] to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left - Title */}
          <div className="flex-1">
            <h2 className="font-[var(--font-memdex)] text-4xl lg:text-5xl font-bold text-white leading-tight">
              Important Risk<br />
              Disclosure
            </h2>
          </div>

          {/* Right - Content */}
          <div className="flex-1 max-w-md">
            <p className="text-white/90 text-lg leading-relaxed mb-8">
              Investing in cryptocurrencies involves substantial risk. Please consider your investment objectives and risk tolerance carefully before participating.
            </p>

            <button className="btn-primary">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
