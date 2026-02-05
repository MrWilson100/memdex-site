"use client";

export default function RiskDisclosure() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
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

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-[1]" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left - Title */}
          <div className="reveal-left flex-1">
            <h2
              className="text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight"
              style={{ fontFamily: "var(--font-memdex)" }}
            >
              Important Risk<br />
              Disclosure
            </h2>
          </div>

          {/* Right - Content */}
          <div className="reveal-right flex-1 max-w-md">
            <p className="text-[var(--silver-light)] text-lg leading-relaxed mb-8">
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
