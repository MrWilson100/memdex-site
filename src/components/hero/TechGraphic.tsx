"use client";

export default function TechGraphic() {
  return (
    <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">

      <svg
        viewBox="0 0 200 200"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5AC8E8" />
            <stop offset="100%" stopColor="#4A9EFF" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Circuit lines */}
        <g stroke="url(#circuitGradient)" strokeWidth="2" fill="none" filter="url(#glow)">
          {/* Main horizontal line */}
          <path
            d="M20,100 L60,100 L80,80 L120,80 L140,100 L180,100"
            className="circuit-line"
            style={{ animationDelay: '0.2s' }}
          />
          {/* Top diagonal */}
          <path
            d="M100,20 L100,50 L120,80"
            className="circuit-line"
            style={{ animationDelay: '0.4s' }}
          />
          {/* Bottom diagonal */}
          <path
            d="M100,180 L100,150 L80,120 L80,80"
            className="circuit-line"
            style={{ animationDelay: '0.6s' }}
          />
          {/* Left branch */}
          <path
            d="M60,100 L60,140 L40,160"
            className="circuit-line"
            style={{ animationDelay: '0.8s' }}
          />
          {/* Right branch */}
          <path
            d="M140,100 L140,60 L160,40"
            className="circuit-line"
            style={{ animationDelay: '1.0s' }}
          />
        </g>

        {/* Connection nodes */}
        <g filter="url(#glow)">
          {/* Center node - main */}
          <circle cx="100" cy="80" r="8" fill="#5AC8E8" className="node-pulse" />

          {/* Secondary nodes */}
          <circle cx="60" cy="100" r="5" fill="#4A9EFF" className="node-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="140" cy="100" r="5" fill="#4A9EFF" className="node-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="100" cy="50" r="4" fill="#4A9EFF" className="node-pulse" style={{ animationDelay: '0.7s' }} />
          <circle cx="100" cy="150" r="4" fill="#4A9EFF" className="node-pulse" style={{ animationDelay: '0.9s' }} />

          {/* Outer nodes */}
          <circle cx="20" cy="100" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.1s' }} />
          <circle cx="180" cy="100" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.2s' }} />
          <circle cx="100" cy="20" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.3s' }} />
          <circle cx="100" cy="180" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.4s' }} />
          <circle cx="40" cy="160" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.5s' }} />
          <circle cx="160" cy="40" r="3" fill="#8BA5C0" className="node-pulse" style={{ animationDelay: '1.6s' }} />
        </g>

        {/* Data flow particles (small dots along paths) */}
        <g fill="var(--foreground)" opacity="0.6">
          <circle cx="40" cy="100" r="2" className="node-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="100" cy="80" r="2" className="node-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="160" cy="100" r="2" className="node-pulse" style={{ animationDelay: '0.6s' }} />
        </g>
      </svg>
    </div>
  );
}
