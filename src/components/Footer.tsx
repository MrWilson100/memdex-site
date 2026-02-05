"use client";

import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Top section with links and subscription */}
      <div className="relative z-10 py-12">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/console-plate-bg.png"
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Overlay to blend with site colors */}
          <div className="absolute inset-0 bg-[var(--background)]/70" />
          {/* Bottom gradient fade to blend with section below */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left - Stay Connected */}
            <div className="reveal-left">
              <h3 className="text-white text-xl font-semibold mb-4">Stay Connected</h3>
              <p className="text-[var(--silver)] mb-2">Follow Us for Updates and Insights</p>
              <p className="text-[var(--silver)] mb-6">Privacy Policy Accessibility Statement</p>

              {/* Social icons */}
              <div className="flex gap-4">
                {/* Email */}
                <a
                  href="mailto:contact@memdex.com"
                  className="w-10 h-10 rounded-full border border-[var(--silver)]/30 flex items-center justify-center text-white hover:bg-[var(--silver)]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                {/* Telegram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-[var(--silver)]/30 flex items-center justify-center text-white hover:bg-[var(--silver)]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-[var(--silver)]/30 flex items-center justify-center text-white hover:bg-[var(--silver)]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth={1.5} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                </a>
                {/* X (Twitter) */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-[var(--silver)]/30 flex items-center justify-center text-white hover:bg-[var(--silver)]/10 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right - Email subscription */}
            <div className="reveal-right w-full lg:w-auto">
              <form onSubmit={handleSubmit}>
                <label className="text-white text-sm mb-2 block">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full lg:w-80 px-4 py-3 bg-white text-black rounded-sm border-2 border-black mb-4 focus:outline-none focus:border-[var(--silver)]"
                />
                <button
                  type="submit"
                  className="w-full lg:w-80 px-4 py-3 bg-white text-black font-semibold border-2 border-black hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section with large MAP text and grid */}
      <div className="relative h-[280px] sm:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--background)] to-[var(--background-deep)]" />

        {/* Large MAP text - behind the grid */}
        <div className="absolute inset-0 flex items-end justify-center pb-0 z-0">
          <h2
            className="text-[80px] sm:text-[150px] lg:text-[300px] font-bold text-white/10 leading-none tracking-wider"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            MAP
          </h2>
        </div>

        {/* Grid image - on top of MAP text */}
        <div className="absolute inset-0 z-10">
          <img
            src="/grid-bottom.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Horizon glow */}
        <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--silver)] to-transparent opacity-60 z-20" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-white/20 blur-3xl z-20" />

        {/* Title text - below the blue line */}
        <div className="absolute top-[35%] left-0 right-0 text-center z-20 px-4">
          <p
            className="text-white/70 text-sm sm:text-lg lg:text-xl tracking-widest uppercase"
            style={{ fontFamily: "var(--font-memdex)" }}
          >
            The Memdex Automated Portfolio
          </p>
        </div>

        {/* Gradient overlay for fade effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background-deep)] via-transparent to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}
