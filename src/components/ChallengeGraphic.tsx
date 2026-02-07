"use client";

export default function ChallengeGraphic() {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background glow */}
      <defs>
        <radialGradient id="challengeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#ff4d4d" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="lineOrange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ff8c42" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="lineBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4A9EFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4A9EFF" stopOpacity="0.15" />
        </linearGradient>
      </defs>

      <rect width="280" height="200" fill="url(#challengeGlow)" rx="8" />

      {/* Grid lines - faint */}
      {[40, 70, 100, 130, 160].map((y) => (
        <line key={`h-${y}`} x1="20" y1={y} x2="260" y2={y} stroke="#4A9EFF" strokeOpacity="0.06" strokeWidth="0.5" />
      ))}
      {[60, 100, 140, 180, 220].map((x) => (
        <line key={`v-${x}`} x1={x} y1="30" x2={x} y2="170" stroke="#4A9EFF" strokeOpacity="0.06" strokeWidth="0.5" />
      ))}

      {/* Volatile chart line 1 - sharp drops and spikes (red) */}
      <polyline
        points="20,90 40,85 55,60 70,95 85,40 100,110 115,75 130,130 145,55 160,100 175,120 190,50 205,90 220,140 235,70 250,105 260,95"
        stroke="url(#lineRed)"
        strokeWidth="1.5"
        fill="none"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      {/* Volatile chart line 2 - erratic movement (orange) */}
      <polyline
        points="20,110 38,100 52,120 68,80 82,115 98,70 112,105 128,90 142,130 158,65 172,95 188,110 202,60 218,100 232,85 248,120 260,75"
        stroke="url(#lineOrange)"
        strokeWidth="1.2"
        fill="none"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}
      />

      {/* Volatile chart line 3 - subtle (blue) */}
      <polyline
        points="20,70 35,80 50,65 65,90 80,60 95,85 110,95 125,70 140,100 155,80 170,110 185,75 200,95 215,85 230,100 245,90 260,80"
        stroke="url(#lineBlue)"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
        className="animate-pulse"
        style={{ animationDuration: '5s', animationDelay: '1s' }}
      />

      {/* Scattered data points - representing fragmented assets */}
      {[
        { cx: 45, cy: 55, r: 2.5 },
        { cx: 88, cy: 42, r: 2 },
        { cx: 132, cy: 128, r: 2.5 },
        { cx: 192, cy: 48, r: 2 },
        { cx: 222, cy: 138, r: 2.5 },
        { cx: 160, cy: 98, r: 2 },
        { cx: 72, cy: 95, r: 1.8 },
        { cx: 248, cy: 72, r: 2 },
      ].map((dot, i) => (
        <circle
          key={`dot-${i}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill="#ff4d4d"
          opacity="0.5"
          className="animate-pulse"
          style={{ animationDuration: `${2 + i * 0.4}s`, animationDelay: `${i * 0.3}s` }}
        />
      ))}

      {/* 24/7 clock icon - top right */}
      <g transform="translate(235, 25)" opacity="0.4">
        <circle cx="0" cy="0" r="10" stroke="#5AC8E8" strokeWidth="1" fill="none" />
        <line x1="0" y1="0" x2="0" y2="-6" stroke="#5AC8E8" strokeWidth="1" strokeLinecap="round" />
        <line x1="0" y1="0" x2="4" y2="2" stroke="#5AC8E8" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Alert/warning triangles - scattered */}
      {[
        { x: 30, y: 35 },
        { x: 110, y: 145 },
        { x: 210, y: 155 },
      ].map((pos, i) => (
        <g key={`alert-${i}`} transform={`translate(${pos.x}, ${pos.y})`} opacity="0.35">
          <polygon points="0,-5 4.5,4 -4.5,4" stroke="#ff8c42" strokeWidth="0.8" fill="none" />
          <line x1="0" y1="-2" x2="0" y2="1" stroke="#ff8c42" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="0" cy="2.5" r="0.5" fill="#ff8c42" />
        </g>
      ))}

      {/* Fragmented chain links - bottom area */}
      <g opacity="0.25">
        <rect x="35" y="165" width="16" height="8" rx="4" stroke="#4A9EFF" strokeWidth="0.8" fill="none" />
        <rect x="55" y="168" width="16" height="8" rx="4" stroke="#4A9EFF" strokeWidth="0.8" fill="none" transform="rotate(-10, 63, 172)" />
        <rect x="78" y="163" width="16" height="8" rx="4" stroke="#4A9EFF" strokeWidth="0.8" fill="none" transform="rotate(8, 86, 167)" />

        <rect x="170" y="168" width="16" height="8" rx="4" stroke="#4A9EFF" strokeWidth="0.8" fill="none" transform="rotate(5, 178, 172)" />
        <rect x="192" y="165" width="16" height="8" rx="4" stroke="#4A9EFF" strokeWidth="0.8" fill="none" transform="rotate(-8, 200, 169)" />
      </g>

      {/* "FOMO" / sentiment pulse rings */}
      <circle cx="140" cy="100" r="20" stroke="#ff4d4d" strokeWidth="0.5" fill="none" opacity="0.15" className="animate-ping" style={{ animationDuration: '3s' }} />
      <circle cx="140" cy="100" r="35" stroke="#ff4d4d" strokeWidth="0.3" fill="none" opacity="0.08" className="animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
    </svg>
  );
}
