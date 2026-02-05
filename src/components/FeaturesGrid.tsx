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
    <section className="relative py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/features-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Overlay to blend with site colors */}
        <div className="absolute inset-0 bg-[#0a1628]/70" />
      </div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="feature-card relative">
              {/* Image area */}
              <div className="h-52 overflow-hidden border-b border-white/10">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-[center_15%]"
                />
              </div>

              {/* Content area */}
              <div className="p-6">
                <p className="text-[#a0c4ff] text-xs tracking-wider mb-2">
                  {feature.number} · {feature.category}
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-[#8fafd4] text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
