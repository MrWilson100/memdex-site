"use client";

import { useEffect, useState } from "react";

interface Segment {
  percentage: number;
  color: string;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Generate random but consistent portfolio allocations for each month
const generateMonthData = (seed: number): Segment[] => {
  const colors = [
    '#4A9EFF',
    '#5AC8E8',
    '#6B8AAE',
    '#3D7ABF',
    '#8BA5C0',
    '#5B9BD5',
    '#4178A4',
    '#7699B8',
  ];

  // Create 8 major segments representing asset groups
  const baseAllocations = [25, 20, 15, 12, 10, 8, 6, 4];

  // Add some variation based on seed (year)
  const variation = baseAllocations.map((base, i) => {
    const change = Math.sin(seed * (i + 1) * 0.7) * 8;
    return Math.max(2, Math.min(35, base + change));
  });

  // Normalize to 100%
  const total = variation.reduce((a, b) => a + b, 0);
  const normalized = variation.map(v => (v / total) * 100);

  return normalized.map((percentage, i) => ({
    percentage,
    color: colors[i % colors.length],
  }));
};

// Pre-generate 12 months of data
const monthsData = [
  generateMonthData(1),
  generateMonthData(2),
  generateMonthData(3),
  generateMonthData(4),
  generateMonthData(5),
  generateMonthData(6),
  generateMonthData(7),
  generateMonthData(8),
  generateMonthData(9),
  generateMonthData(10),
  generateMonthData(11),
  generateMonthData(12),
];

export default function PieChartAnimated() {
  const [monthIndex, setMonthIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after a delay (after pie chart becomes visible at 4.0s)
    const startTimer = setTimeout(() => {
      setIsAnimating(true);
    }, 4800);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    // Cycle through months every 1.2 seconds
    const interval = setInterval(() => {
      setMonthIndex(prev => (prev + 1) % 12);
    }, 1200);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const currentData = monthsData[monthIndex];

  // Calculate cumulative percentages for positioning
  let cumulative = 0;
  const segments = currentData.map(segment => {
    const start = cumulative;
    cumulative += segment.percentage;
    return { ...segment, start, end: cumulative };
  });

  // SVG donut chart using stroke-dasharray
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[#4A9EFF]/12 blur-[25px] rounded-full" />

      <svg viewBox="0 0 100 100" className="relative w-full h-full -rotate-90">
        <defs>
          <filter id="pieGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="var(--primary-dark)"
          strokeWidth="12"
          opacity="0.3"
        />

        {/* Animated segments */}
        {segments.map((segment, i) => {
          const dashLength = (segment.percentage / 100) * circumference;
          const dashOffset = ((100 - segment.start) / 100) * circumference;

          return (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke={segment.color}
              strokeWidth="12"
              strokeDasharray={`${dashLength} ${circumference}`}
              strokeDashoffset={-((segment.start / 100) * circumference)}
              filter="url(#pieGlow)"
              style={{
                transition: 'stroke-dasharray 0.8s var(--ease-cinematic), stroke-dashoffset 0.8s var(--ease-cinematic)',
              }}
            />
          );
        })}

        {/* Center hole overlay */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="var(--background)"
        />
      </svg>

      {/* Month indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs sm:text-sm font-medium text-[var(--silver)] tracking-wider uppercase">
          {months[monthIndex]}
        </span>
      </div>
    </div>
  );
}
