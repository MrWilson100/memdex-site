"use client";

const features = [
  {
    number: "01",
    category: "AUTOMATED TRADING",
    title: "Let AI Trade for You",
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
  return (
    <section className="relative py-28 lg:py-36 mt-8 lg:mt-12">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-glow z-[2]" />

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
        <div className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card relative">
              {/* Image area */}
              <div className="h-52 overflow-hidden border-b border-[var(--accent)]/20 relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-105"
                />
                {/* Gradient overlay for polish */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary-dark)]/50 to-transparent" />
              </div>

              {/* Content area */}
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
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
