"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    category: "AUTOMATED TRADING",
    title: "Hands Off Approach",
    description:
      "Your portfolio executes trades in real time, continuously reallocating capital into the most efficient assets available — no micromanaging required.",
    image: "/feature-bars.png",
  },
  {
    number: "02",
    category: "DYNAMIC WEIGHTING",
    title: "Allocation That Adapts",
    description:
      "The system rebalances asset weightings as market conditions change, keeping capital aligned with the strongest opportunities.",
    image: "/feature-fingers.png",
  },
  {
    number: "03",
    category: "SIGNAL RECOGNITION",
    title: "Move With the Market",
    description:
      "Built to recognize market signals early — rotating toward safety during downturns and leaning into momentum when conditions improve.",
    image: "/feature-head.png",
  },
  {
    number: "04",
    category: "COMMUNITY LAYER",
    title: "Collective Intelligence",
    description:
      "A community-driven layer where members can create, refine, and share strategies that others can deploy when performance proves out.",
    image: "/feature-man.png",
  },
];

export default function FeaturesGrid() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1023px)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          cardRefs.current.forEach((card, i) => {
            if (!card || i === features.length - 1) return;

            const nextCard = cardRefs.current[i + 1];
            if (!nextCard) return;

            const rect = card.getBoundingClientRect();
            const nextRect = nextCard.getBoundingClientRect();
            const overlapDistance = rect.bottom - nextRect.top;
            const overlap = Math.max(0, Math.min(1, overlapDistance / rect.height));

            if (overlap > 0) {
              card.style.transform = `scale(${1 - overlap * 0.05})`;
              card.style.filter = `brightness(${1 - overlap * 0.3})`;
            } else {
              card.style.transform = "scale(1)";
              card.style.filter = "brightness(1)";
            }
          });
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
    <section className="relative py-28 lg:pt-36 lg:pb-16 mt-8 lg:mt-12">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/features-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-70"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[var(--background)]/80" />
      </div>

      {/* Top blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--background)] to-transparent z-[1]" />

      {/* Bottom blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-[1]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Mobile/tablet: original grid layout */}
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {features.map((feature, index) => (
            <div key={index} className="feature-card relative">
              {/* Image area */}
              <div className="h-52 overflow-hidden border-b border-[var(--accent)]/20 relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-3 font-medium">
                  {feature.number}&nbsp;&nbsp;·&nbsp;&nbsp;{feature.category}
                </p>
                <h3 className="text-white text-xl font-semibold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-[var(--silver-light)] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: sticky card stack */}
        <div className="hidden lg:block">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`sticky ${index < features.length - 1 ? "mb-[280px]" : ""}`}
              style={{
                top: `${100 + index * 40}px`,
                zIndex: index + 1,
                willChange: "transform, filter",
                transformOrigin: "center top",
              }}
            >
              <div
                className="feature-card flex h-[340px] overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(10, 61, 122, 0.92) 0%, rgba(5, 25, 55, 0.96) 100%)",
                }}
              >
                {/* Image side */}
                <div className="w-2/5 relative overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover object-[center_15%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[rgba(5,25,55,0.85)]" />
                </div>

                {/* Content side */}
                <div className="w-3/5 p-12 flex flex-col justify-center">
                  <p className="text-[var(--accent)] text-xs tracking-widest uppercase mb-4 font-medium">
                    {feature.number}&nbsp;&nbsp;·&nbsp;&nbsp;{feature.category}
                  </p>
                  <h3 className="text-white text-3xl font-semibold mb-5 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--silver-light)] text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
