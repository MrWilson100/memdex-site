"use client";

export default function SolutionSection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] via-[var(--primary-dark)] to-[var(--background-deep)]" />

      {/* Vibrant ambient lights - smaller on mobile */}
      <div className="absolute top-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-[var(--accent)]/20 rounded-full blur-[80px] sm:blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-[var(--primary-light)]/25 rounded-full blur-[60px] sm:blur-[120px]" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2
            className="reveal text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight text-glow"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            The <span className="text-[var(--accent-bright)]">MemDex</span> Solution
          </h2>
          <div className="reveal w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" style={{ transitionDelay: '0.1s', boxShadow: '0 0 15px rgba(74, 158, 255, 0.4)' }} />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* The Challenge */}
          <div className="reveal-left mb-16">
            <h3 className="text-xl lg:text-2xl font-semibold text-[var(--accent)] mb-6 tracking-wide">The Challenge</h3>
            <div className="space-y-5 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed">
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

          {/* Glowing divider */}
          <div className="reveal w-full h-px my-16 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />

          {/* Our Approach */}
          <div className="reveal-right mb-16">
            <h3 className="text-xl lg:text-2xl font-semibold text-[var(--accent)] mb-6 tracking-wide">Our Approach</h3>
            <div className="space-y-5 text-[var(--silver-light)] text-base lg:text-lg leading-relaxed">
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

          {/* Key benefits */}
          <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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
                className="feature-card p-8 text-center"
              >
                <div className="text-3xl font-bold text-[var(--accent-bright)] mb-4 tracking-tight">{benefit.icon}</div>
                <h4 className="text-white font-semibold text-lg mb-3">{benefit.title}</h4>
                <p className="text-[var(--silver-light)] text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 divider-glow" />
    </section>
  );
}
