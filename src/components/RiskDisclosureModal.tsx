"use client";

import { useEffect, useRef } from "react";

interface RiskDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RiskDisclosureModal({ isOpen, onClose }: RiskDisclosureModalProps) {
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
          Risk Disclosure
        </h2>
        <div
          className="w-24 h-0.5 mb-8 bg-gradient-to-r from-[var(--accent)] to-transparent"
          style={{ boxShadow: "0 0 15px rgba(74, 158, 255, 0.4)" }}
        />

        {/* Content sections */}
        <div className="modal-body">
          <p>
            Investing in digital assets, including cryptocurrencies, involves substantial risk and is not suitable
            for every investor. Before participating, you should carefully consider your investment objectives,
            level of experience, and risk tolerance. The following disclosures outline the key risks associated
            with digital asset investing and the MemDex Automated Portfolio.
          </p>

          <h3>Market Volatility and Price Risk</h3>
          <p>
            Digital assets are highly speculative investments. The price of digital assets is highly volatile
            and may experience significant fluctuations over short periods of time. The value of your holdings
            can decrease substantially and may be reduced to zero. Cryptocurrency markets are sensitive to new
            developments, media coverage, and public sentiment, any of which can induce large swings in volume,
            liquidity, and price. You should be prepared for the possibility of losing some or all of your
            investment.
          </p>

          <h3>No Guarantee of Returns</h3>
          <p>
            There is no guarantee that any investment strategy, including automated portfolio management, will
            generate income or achieve a profit. The value of digital assets is not guaranteed by any institution
            and cannot be insured through traditional mechanisms. Digital asset holdings are not protected by
            the Federal Deposit Insurance Corporation (FDIC) or the Securities Investor Protection Corporation
            (SIPC). You should not invest money that you cannot afford to lose.
          </p>

          <h3>Past Performance Disclaimer</h3>
          <p className="italic text-[var(--silver-dark)]">
            Past performance is not indicative of future results. Any historical information, backtesting data,
            or performance analysis presented is based on simulated historical conditions and does not guarantee
            or reliably indicate future performance. No representation or warranty is made with respect to the
            accuracy or completeness of any performance data or the future performance of any digital asset or
            portfolio strategy.
          </p>

          <h3>Automated and Algorithmic Trading Risks</h3>
          <p>
            Automated trading systems, including algorithmic rebalancing engines, may experience errors, delays,
            software bugs, or unexpected behavior. System outages, network congestion, or connectivity issues
            can cause strategies to execute incorrectly, fail to execute, or execute at unintended prices.
            No representation is made or implied that the use of any automated system will generate income or
            guarantee a profit. Automated systems operate based on predefined rules and may not adapt to all
            market conditions or unprecedented events.
          </p>

          <h3>Technology and Security Risks</h3>
          <p>
            Investing in digital assets carries various technology and security risks, including but not limited
            to fraud, theft, hacking, cybersecurity breaches, programming bugs, smart contract vulnerabilities,
            and accidental loss. Transactions in digital assets may be irreversible, and losses due to fraudulent
            or accidental transactions may not be recoverable. If private keys are lost or compromised, the
            associated assets may be permanently inaccessible. Trading platforms and blockchain networks may
            experience unplanned outages, system failures, or malicious attacks.
          </p>

          <h3>Blockchain and DeFi-Specific Risks</h3>
          <p>
            Blockchain-based protocols and decentralized finance (DeFi) systems carry unique risks including
            smart contract bugs or exploits, protocol failures, oracle manipulation, irreversible transactions,
            hard forks, 51% attacks, and technological obsolescence. Smart contract code, once deployed, may
            contain vulnerabilities that can be exploited. Blockchain-based transactions automatically execute
            and settle, and confirmed transactions cannot be reversed or undone.
          </p>

          <h3>Liquidity Risk</h3>
          <p>
            Digital assets may have limited liquidity, which may make it difficult or impossible to sell or
            exit a position when you wish to do so. Market conditions, trading volume, and counterparty
            availability can all affect the ability to execute trades at desired prices. Low liquidity may
            result in significant slippage or inability to complete transactions.
          </p>

          <h3>Regulatory and Legal Risks</h3>
          <p>
            Legislative and regulatory changes or actions at the state, federal, or international level may
            adversely affect the use, transfer, exchange, and value of digital assets. The regulatory landscape
            for digital assets is still developing and may change significantly. It may be, or in the future
            become, restricted or illegal to acquire, own, sell, or use certain digital assets in one or more
            jurisdictions. Markets and exchanges for digital assets are not currently regulated in the same
            manner and do not provide the same customer protections available in traditional financial markets.
          </p>

          <h3>Tax Implications</h3>
          <p>
            The tax treatment of digital assets varies by jurisdiction and is subject to change. Each transaction,
            whether executed manually or automatically, may create a tax obligation that requires proper
            documentation and reporting. You are solely responsible for determining and fulfilling your tax
            obligations. We strongly recommend consulting with a qualified tax professional regarding the tax
            implications of digital asset transactions.
          </p>

          <h3>Not Financial Advice</h3>
          <p>
            No communication or information provided by MemDex is intended as, or shall be considered or construed
            as, investment advice, financial advice, trading advice, or any other sort of advice. All information
            is provided for informational purposes only. You are solely responsible for determining whether any
            investment, strategy, or related transaction is appropriate for you based on your personal investment
            objectives, financial circumstances, and risk tolerance. You should consult with qualified financial,
            legal, and tax professionals before making any investment decisions.
          </p>

          <h3>Acknowledgment</h3>
          <p className="italic text-[var(--silver-dark)]">
            By using the MemDex platform, you acknowledge that you have read, understood, and accepted the risks
            described in this disclosure. You understand that digital asset markets are volatile and unpredictable,
            that losses can be substantial, and that no system or strategy can eliminate the inherent risks of
            investing in digital assets. You agree that you are solely responsible for your investment decisions
            and that MemDex shall not be liable for any losses incurred.
          </p>
        </div>
      </div>
    </div>
  );
}
