"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Set custom attributes after mount so they're not stripped by React
    if (widgetRef.current) {
      widgetRef.current.setAttribute("lcw-base", "USD");
      widgetRef.current.setAttribute("lcw-color-tx", "#ffffff");
      widgetRef.current.setAttribute("lcw-marquee-1", "coins");
      widgetRef.current.setAttribute("lcw-marquee-2", "coins");
      widgetRef.current.setAttribute("lcw-marquee-items", "20");
    }
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.menu-container')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <Script
        src="https://www.livecoinwatch.com/static/lcw-widget.js"
        strategy="afterInteractive"
      />
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--silver)]/10">
        <div className="flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/memdex-logo.png"
              alt="MEMDEX Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          {/* LiveCoinWatch Crypto Ticker - scaled down on mobile */}
          <div className="flex-1 mx-2 sm:mx-4 lg:mx-8 overflow-hidden ticker-container">
            <div
              ref={widgetRef}
              className="livecoinwatch-widget-5"
            ></div>
          </div>

          {/* Right side icon - Menu button */}
          <div className="flex-shrink-0 relative menu-container">
            <button
              className="grid-icon-btn"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <img
                src="/grid-icon.jpg"
                alt="Menu"
                className="grid-icon-default"
              />
              <img
                src="/grid-icon-hover.png"
                alt="Menu"
                className="grid-icon-hover"
              />
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="menu-dropdown">
                <a href="#" className="menu-item">Home</a>
                <a href="#" className="menu-item">About</a>
                <a href="#" className="menu-item">Features</a>
                <a href="#" className="menu-item">How It Works</a>
                <a href="#" className="menu-item">Documentation</a>
                <div className="menu-divider" />
                <a href="#" className="menu-item">Connect Wallet</a>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
