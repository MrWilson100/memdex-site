"use client";

export default function SolutionSection() {
  return (
    <section className="relative pt-10 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a2d] via-[#0a1628] to-[#081422]" />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#4d8bff]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[300px] h-[300px] bg-[#4d8bff]/10 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 pt-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            The MemDex Solution
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#4d8bff] to-transparent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* The Problem */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#4d8bff] mb-6">The Challenge</h3>
            <div className="space-y-4 text-[#a0c4ff] text-base lg:text-lg leading-relaxed">
              <p>
                Anyone who has spent any meaningful time in the digital asset space is certainly aware
                of how quickly the thrill of excitement can turn into a tumultuous, existential crisis
                in a market that operates around the clock.
              </p>
              <p>
                Digital asset markets move continuously, across every time zone, with no pause for rest
                or reflection. Prices shift rapidly, information flows without interruption, and
                sentiment can change multiple times in a single day. Over time, the constant need to
                stay alert and responsive can take a real toll, leading to fatigue and emotional strain.
              </p>
              <p>
                Participation often involves navigating a fragmented landscape of blockchains, wallets,
                applications, and tools. Each asset carries its own behavior, risks, and evolving
                narrative. Keeping track of even a small group of assets requires sustained attention.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#4d8bff] mb-6">Our Approach</h3>
            <div className="space-y-4 text-[#a0c4ff] text-base lg:text-lg leading-relaxed">
              <p>
                MemDex is designed to operate within this reality. The MemDex Automated Portfolio
                manages a diversified set of digital assets continuously, handling monitoring and
                rebalancing according to predefined rules. The system runs in the background, allowing
                participation in the market without requiring constant intervention.
              </p>
              <p>
                The intention is to create a more sustainable way to engage with digital markets by
                reducing the mental and emotional burden of continuous decision-making.
              </p>
              <p>
                As markets continue to evolve and accelerate, MemDex provides a structured, automated
                approach that supports long-term participation in an always-on financial environment.
              </p>
            </div>
          </div>

          {/* Key benefits visual */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "24/7",
                title: "Always On",
                desc: "Operates around the clock so you don't have to",
              },
              {
                icon: "AI",
                title: "Emotion-Free",
                desc: "Removes human emotion from trading decisions",
              },
              {
                icon: "100",
                title: "Diversified",
                desc: "Broad exposure across 100 digital assets",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="feature-card p-6 text-center"
              >
                <div className="text-4xl font-bold text-[#4d8bff] mb-3">{benefit.icon}</div>
                <h4 className="text-white font-semibold text-lg mb-2">{benefit.title}</h4>
                <p className="text-[#a0c4ff] text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
