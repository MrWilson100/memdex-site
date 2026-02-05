"use client";

import { useEffect } from "react";
import { initScrollReveal } from "@/hooks/useScrollReveal";

/**
 * Global scroll reveal provider
 * Initializes intersection observers for all reveal elements
 */
export default function ScrollRevealProvider() {
  useEffect(() => {
    // Initialize on mount
    initScrollReveal();

    // Re-initialize on route changes (for SPA navigation)
    const handleRouteChange = () => {
      setTimeout(initScrollReveal, 100);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return null;
}
