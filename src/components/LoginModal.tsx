"use client";

import { useEffect, useState } from "react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — no backend yet
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-content"
        style={{ maxWidth: '420px', padding: '36px 40px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M15 5L5 15M5 5l10 10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-6 translate-x-5">
          <img
            src="/memdex-logo.png"
            alt="MEMDEX"
            className="w-36 h-auto drop-shadow-[0_0_15px_rgba(74,158,255,0.3)]"
          />
        </div>

        {/* Title */}
        <h2
          className="text-2xl font-bold text-white mb-1 tracking-tight text-center text-glow"
          style={{ fontFamily: "var(--font-memdex)" }}
        >
          Welcome Back
        </h2>
        <p className="text-sm text-[var(--silver)] text-center mb-6">
          Sign in to your MemDex account
        </p>

        {/* Divider */}
        <div
          className="w-16 h-0.5 mx-auto mb-8 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          style={{ boxShadow: "0 0 15px rgba(74, 158, 255, 0.4)" }}
        />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-[var(--silver-light)] tracking-wide mb-2 uppercase">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[var(--silver-dark)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_15px_rgba(74,158,255,0.2)]"
              style={{
                background: 'rgba(10, 30, 60, 0.6)',
                border: '1px solid rgba(74, 158, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[var(--silver-light)] tracking-wide mb-2 uppercase">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-[var(--silver-dark)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:shadow-[0_0_15px_rgba(74,158,255,0.2)]"
              style={{
                background: 'rgba(10, 30, 60, 0.6)',
                border: '1px solid rgba(74, 158, 255, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-[var(--silver)] cursor-pointer">
              <input
                type="checkbox"
                className="w-3.5 h-3.5 rounded accent-[var(--accent)]"
              />
              Remember me
            </label>
            <a href="#" className="text-[var(--accent)] hover:text-[var(--accent-bright)] transition-colors">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
            style={{ marginTop: '24px' }}
          >
            Sign In
          </button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-xs text-[var(--silver)] mt-6">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-[var(--accent)] hover:text-[var(--accent-bright)] transition-colors font-semibold">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}
