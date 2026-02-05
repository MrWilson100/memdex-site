"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook for cinematic scroll-triggered reveal animations
 * Adds 'in-view' class when element enters viewport
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {}
): [RefObject<T | null>, boolean] {
  const {
    threshold = 0.15,
    rootMargin = "0px 0px -80px 0px",
    triggerOnce = true
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

/**
 * Hook for subtle parallax effect on scroll
 */
export function useParallax(speed: number = 0.3): RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = element.getBoundingClientRect();
          const scrolled = window.scrollY;
          const windowHeight = window.innerHeight;

          // Only apply when element is in view
          if (rect.top < windowHeight && rect.bottom > 0) {
            const rate = (scrolled - element.offsetTop + windowHeight) * speed * 0.1;
            element.style.transform = `translateY(${rate}px)`;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}

/**
 * Global scroll reveal initializer - adds 'in-view' class to elements with reveal classes
 */
export function initScrollReveal(): void {
  if (typeof window === "undefined") return;

  const revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger, .line-draw"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -80px 0px",
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
