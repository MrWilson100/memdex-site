"use client";

export default function StockChartAnimated() {
  // Path representing 5-year growth with some volatility
  const chartPath = "M10,85 Q30,80 50,70 T90,55 T130,40 T170,30 T190,15";
  const fillPath = "M10,85 Q30,80 50,70 T90,55 T130,40 T170,30 T190,15 L190,95 L10,95 Z";

  return (
    <div className="relative w-40 h-24 sm:w-48 sm:h-28 lg:w-56 lg:h-32">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[var(--accent)]/10 blur-[20px] rounded-lg" />

      <svg
        viewBox="0 0 200 100"
        className="relative w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-bright)" />
          </linearGradient>
          <filter id="chartGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Grid lines */}
        <g className="opacity-20">
          <line x1="10" y1="25" x2="190" y2="25" stroke="var(--silver-dark)" strokeWidth="0.5" />
          <line x1="10" y1="50" x2="190" y2="50" stroke="var(--silver-dark)" strokeWidth="0.5" />
          <line x1="10" y1="75" x2="190" y2="75" stroke="var(--silver-dark)" strokeWidth="0.5" />

          {/* Year markers */}
          <line x1="50" y1="15" x2="50" y2="95" stroke="var(--silver-dark)" strokeWidth="0.5" />
          <line x1="90" y1="15" x2="90" y2="95" stroke="var(--silver-dark)" strokeWidth="0.5" />
          <line x1="130" y1="15" x2="130" y2="95" stroke="var(--silver-dark)" strokeWidth="0.5" />
          <line x1="170" y1="15" x2="170" y2="95" stroke="var(--silver-dark)" strokeWidth="0.5" />
        </g>

        {/* Gradient fill under the line */}
        <path
          d={fillPath}
          fill="url(#chartGradient)"
          className="chart-fill"
        />

        {/* Main chart line */}
        <path
          d={chartPath}
          fill="none"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#chartGlow)"
          className="chart-line"
        />

        {/* Data point dots */}
        <g fill="var(--accent-bright)" filter="url(#chartGlow)">
          <circle cx="10" cy="85" r="3" className="node-pulse" style={{ animationDelay: '2.5s' }} />
          <circle cx="50" cy="70" r="3" className="node-pulse" style={{ animationDelay: '2.7s' }} />
          <circle cx="90" cy="55" r="3" className="node-pulse" style={{ animationDelay: '2.9s' }} />
          <circle cx="130" cy="40" r="3" className="node-pulse" style={{ animationDelay: '3.1s' }} />
          <circle cx="170" cy="30" r="3" className="node-pulse" style={{ animationDelay: '3.3s' }} />
          <circle cx="190" cy="15" r="4" className="node-pulse" style={{ animationDelay: '3.5s' }} />
        </g>

        {/* Year labels */}
        <g fill="var(--silver-dark)" fontSize="6" textAnchor="middle">
          <text x="10" y="98">Y1</text>
          <text x="50" y="98">Y2</text>
          <text x="90" y="98">Y3</text>
          <text x="130" y="98">Y4</text>
          <text x="170" y="98">Y5</text>
        </g>
      </svg>

      {/* Growth indicator */}
      <div className="absolute -top-2 -right-2 bg-[#00EC97]/20 backdrop-blur-sm rounded-full px-2 py-1 border border-[#00EC97]/30">
        <span className="text-[#00EC97] text-xs font-bold">+247%</span>
      </div>
    </div>
  );
}
