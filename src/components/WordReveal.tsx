"use client";

import { useEffect, useRef, useState } from "react";

interface WordRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Map of words to their highlight className, e.g. { "MemDex": "text-blue-400" } */
  highlights?: Record<string, string>;
  /** Delay between each word in seconds */
  wordDelay?: number;
}

export default function WordReveal({
  text,
  className = "",
  style,
  highlights = {},
  wordDelay = 0.1,
}: WordRevealProps) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion - show all immediately
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <h2 ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const highlightClass = highlights[word];
        const content = highlightClass ? (
          <span className={highlightClass}>{word}</span>
        ) : (
          word
        );

        return (
          <span
            key={i}
            className="inline-block"
            style={{
              opacity: isInView ? 1 : 0.08,
              filter: isInView ? "blur(0px)" : "blur(6px)",
              transform: isInView ? "translateY(0)" : "translateY(6px)",
              transition: `opacity 0.6s var(--ease-cinematic), filter 0.6s var(--ease-cinematic), transform 0.6s var(--ease-cinematic)`,
              transitionDelay: isInView ? `${i * wordDelay}s` : "0s",
            }}
          >
            {content}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </h2>
  );
}
