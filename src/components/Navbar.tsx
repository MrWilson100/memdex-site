"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const mobileWidgetRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    // Set custom attributes after mount so they're not stripped by React
    if (widgetRef.current) {
      widgetRef.current.setAttribute("lcw-base", "USD");
      widgetRef.current.setAttribute("lcw-color-tx", "#ffffff");
      widgetRef.current.setAttribute("lcw-marquee-1", "coins");
      widgetRef.current.setAttribute("lcw-marquee-2", "coins");
      widgetRef.current.setAttribute("lcw-marquee-items", "10");
    }
    if (mobileWidgetRef.current) {
      mobileWidgetRef.current.setAttribute("lcw-base", "USD");
      mobileWidgetRef.current.setAttribute("lcw-color-tx", "#ffffff");
      mobileWidgetRef.current.setAttribute("lcw-marquee-1", "coins");
      mobileWidgetRef.current.setAttribute("lcw-marquee-2", "coins");
      mobileWidgetRef.current.setAttribute("lcw-marquee-items", "10");
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
      {/* Navbar container with logo and menu outside glass */}
      <div
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4"
        style={{
          paddingBottom: '16px',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(74, 158, 255, 0.15)',
        }}
      >
        <div className="flex items-center justify-center sm:justify-between mx-auto max-w-7xl gap-4 sm:gap-16">
          {/* Logo + text - outside glass on left */}
          <a
            href="#home"
            className="flex-shrink-0 flex items-center gap-2 sm:gap-3 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span
              className="text-white font-bold text-sm sm:text-lg tracking-[0.15em] drop-shadow-[0_0_10px_rgba(74,158,255,0.3)]"
              style={{ fontFamily: 'var(--font-memdex)' }}
            >
              MEMDEX
            </span>
            <img
              src="/memdex-logo.png"
              alt="MEMDEX Logo"
              className="h-10 sm:h-14 w-auto drop-shadow-[0_0_10px_rgba(74,158,255,0.3)]"
            />
          </a>

          {/* Glass slab with ticker - hidden on mobile */}
          <nav
            className="relative hidden sm:block flex-1 rounded-full overflow-hidden"
            style={{
              background: 'rgba(10, 20, 35, 0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(4, 137, 205, 0.35)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.45), 0 0 20px rgba(74, 158, 255, 0.1)',
            }}
          >
            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(74,158,255,0.5)] to-transparent" />

            {/* LiveCoinWatch Crypto Ticker */}
            <div className="px-4 sm:px-6 -my-1 overflow-hidden ticker-container">
              <div
                ref={widgetRef}
                className="livecoinwatch-widget-5"
              ></div>
            </div>
          </nav>

          {/* Menu button + Login - outside glass on right */}
          <div className="flex-shrink-0 flex items-center gap-3 sm:gap-4">
            <div className="relative menu-container">
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
                  {[
                    { label: "Home", id: "home" },
                    { label: "Overview", id: "overview" },
                    { label: "About", id: "about" },
                    { label: "Features", id: "features" },
                    { label: "How It Works", id: "how-it-works" },
                  ].map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="menu-item"
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        const el = document.getElementById(item.id);
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="menu-divider" />
                  <a href="#" className="menu-item">Connect Wallet</a>
                </div>
              )}
            </div>

            <button
              className="btn-primary -translate-y-1"
              style={{
                padding: '8px 20px',
                fontSize: '11px',
                textTransform: 'none',
              }}
              onClick={() => setLoginOpen(true)}
            >
              Login <span className="ml-1">&rsaquo;</span>
            </button>
          </div>
        </div>

        {/* Mobile ticker strip - below navbar */}
        <div
          className="sm:hidden mt-2 mx-auto rounded-full overflow-hidden"
          style={{
            background: 'rgba(10, 20, 35, 0.55)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(4, 137, 205, 0.35)',
          }}
        >
          <div className="px-4 -my-1 overflow-hidden ticker-container">
            <div
              ref={mobileWidgetRef}
              className="livecoinwatch-widget-5"
            ></div>
          </div>
        </div>
      </div>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
