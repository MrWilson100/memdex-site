"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const widgetRef = useRef<HTMLDivElement>(null);

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
        className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-4 pt-4 sm:pt-5"
        style={{
          paddingBottom: '20px',
          backgroundColor: 'transparent',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(74, 158, 255, 0.15)',
        }}
      >
        <div className="flex items-center mx-auto max-w-7xl gap-2 sm:gap-4">
          {/* Menu button - first on mobile, after ticker on desktop */}
          <div className="relative menu-container order-1 flex-shrink-0">
            <button
              className={`grid-icon-btn translate-y-[1px] sm:translate-y-[-2px]${menuOpen ? ' active' : ''}`}
              onPointerUp={(e) => {
                e.stopPropagation();
                setMenuOpen(prev => !prev);
              }}
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
                  { label: "Solution", id: "solution" },
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

          {/* MEMDEX text - close to menu on mobile */}
          <a
            href="#home"
            className="order-2 flex-shrink-0 cursor-pointer translate-y-0.5 sm:translate-y-0 translate-x-1"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span
              className="text-white font-bold text-base sm:text-xl tracking-[0.15em] drop-shadow-[0_0_10px_rgba(74,158,255,0.3)]"
              style={{ fontFamily: 'var(--font-memdex)' }}
            >
              MemDex
            </span>
          </a>

          {/* Glass slab with ticker - hidden on mobile */}
          <nav
            className="relative hidden sm:block order-3 flex-1 max-w-[60%] mx-auto rounded-full overflow-hidden"
            style={{
              background: 'rgba(10, 20, 35, 0.4)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(74, 158, 255, 0.12)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Top edge highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(74,158,255,0.25)] to-transparent" />

            {/* LiveCoinWatch Crypto Ticker */}
            <div className="px-8 sm:px-10 overflow-hidden ticker-container">
              <div
                ref={widgetRef}
                className="livecoinwatch-widget-5"
              ></div>
            </div>
          </nav>

          {/* Login button - last on both */}
          <button
            className="order-4 btn-primary flex-shrink-0 ml-auto translate-y-0.5"
            style={{
              padding: '5px 16px',
              fontSize: '11.5px',
              textTransform: 'none',
            }}
            onClick={() => setLoginOpen(true)}
          >
            Login <span className="ml-1">&rsaquo;</span>
          </button>
        </div>

      </div>

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
