"use client";

import { useEffect, useRef } from "react";

interface OverviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OverviewModal({ isOpen, onClose }: OverviewModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [isOpen, onClose]);

  // Scroll content to top when opening
  useEffect(() => {
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        ref={contentRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Modal header */}
        <h2
          className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight text-glow"
          style={{ fontFamily: "var(--font-memdex)" }}
        >
          Overview
        </h2>
        <div
          className="w-24 h-0.5 mb-8 bg-gradient-to-r from-[var(--accent)] to-transparent"
          style={{ boxShadow: "0 0 15px rgba(74, 158, 255, 0.4)" }}
        />

        {/* Content sections */}
        <div className="modal-body">
          <p>
            The MemDex Automated Portfolio is a fully automated digital asset
            portfolio system designed to provide broad, diversified exposure to
            the crypto market through a single, continuously managed structure.
            The portfolio is composed of 100 digital assets spanning major
            sectors of the ecosystem, including blue-chip assets, RWAs, AI,
            DeFi, gaming, and meme coins. It is built to operate across multiple
            blockchains and adapt to a market that never stops moving.
          </p>
          <p>
            MemDex is designed for long-term participation in digital markets
            without requiring users to actively trade, monitor charts, or manage
            complex strategies. Rather than relying on discretionary decisions or
            manual intervention, the portfolio operates through a disciplined,
            rules-based system that runs continuously.
          </p>

          <h3>The Portfolio Engine</h3>
          <p>
            At the core of MemDex is a custom algorithmic rebalancing engine.
            This engine evaluates portfolio composition and executes rebalancing
            trades automatically based on predefined rules and market conditions.
            The goal is not to predict short-term price movements, but to manage
            exposure over time in a consistent, systematic manner.
          </p>
          <p>
            By removing human emotion from the decision-making process, MemDex
            is designed to avoid the behavioral pitfalls that often affect
            individual market participants. The system operates hands-off,
            executing adjustments according to logic rather than reaction.
          </p>

          <h3>AI-Assisted Research Layer</h3>
          <p>
            Supporting the core rebalancing engine is a custom AI research layer.
            This layer operates as a set of agential research teams that
            continuously monitor each asset in the portfolio.
          </p>
          <p>
            Each asset is assigned a dedicated AI research team which
            continuously analyzes a range of inputs, including market data,
            on-chain activity, social sentiment, and relevant news.
          </p>
          <p>
            The research output is used to inform the algorithm&apos;s rebalancing
            decisions while preserving the integrity of the rules-based
            framework.
          </p>
          <p>
            The AI layer enhances situational awareness and context, helping the
            system respond to changing market environments without introducing
            discretionary behavior.
          </p>

          <h3>Built for a 24/7 Market</h3>
          <p>
            Digital asset markets operate globally and continuously. Managing
            exposure across 100 assets in such an environment is simply not
            practical for most individuals without automation.
          </p>
          <p>
            MemDex is designed to handle this complexity automatically. The
            system operates around the clock, continuously monitoring and
            adjusting the portfolio so users do not need to react to every market
            movement or maintain constant attention.
          </p>

          <h3>Cross-Chain Infrastructure</h3>
          <p>
            The MemDex Automated Portfolio is built on NEAR Protocol and
            leverages the modern cross-chain infrastructure of NEAR Intents to
            support efficient execution and scalability. This architecture allows
            the system to route transactions across multiple blockchains while
            maintaining low fees and operational efficiency.
          </p>
          <p>
            Cross-chain capability is essential for managing a diversified
            portfolio that spans multiple ecosystems. MemDex is designed with
            this requirement at its foundation.
          </p>

          <h3>Performance Evaluation</h3>
          <p>
            The MemDex algorithm has been evaluated using multi-year historical
            backtesting against major benchmarks, including Bitcoin, the S&amp;P
            500, the NASDAQ, and Gold.
          </p>
          <p>
            These backtests are based on simulated historical data and are
            intended to evaluate how the system would have behaved under past
            market conditions.
          </p>
          <p className="italic text-[var(--silver-dark)]">
            Backtest results are not guarantees of future performance. An
            independent audit of the algorithm and reported metrics is currently
            underway. Access to detailed performance data is provided through
            authorized channels and subject to appropriate disclosures.
          </p>

          <h3>Community and Ecosystem</h3>
          <p>
            Alongside the automated portfolio is the $MEMDEX community token.
            The token is included within the portfolio and serves as a core
            component of the broader ecosystem.
          </p>
          <p>
            The platform incorporates a buyback and burn mechanism and is
            designed to support future community-focused features such as staking
            and additional utilities as the ecosystem evolves.
          </p>
          <p>
            The MemDex ecosystem is designed to align long-term participation,
            transparency, and sustainability.
          </p>

          <h3>Transparency and Responsibility</h3>
          <p>
            Transparency is a core principle of the MemDex platform. All
            performance reporting is subject to legal review and appropriate
            disclosures. Independent audits, clear communication, and responsible
            presentation of data are foundational to how MemDex operates.
          </p>

          <h3>Conclusion</h3>
          <p>
            The MemDex Automated Portfolio is not a trading bot or a static
            index. It is a continuously operating portfolio system designed to
            manage broad market exposure through automation, discipline, and
            scalable infrastructure.
          </p>
          <p>As digital markets continue to evolve, MemDex is built to evolve with them.</p>
        </div>
      </div>
    </div>
  );
}
