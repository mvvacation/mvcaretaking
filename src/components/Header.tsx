"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Caretakers", href: "/caretakers" },
  { name: "Cost Guide", href: "/cost-guide" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Resources", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white backdrop-blur-md shadow-luxury border-b border-navy-100/50"
          : "bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-transparent"
      }`}
    >
      <nav ref={navRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-gold transition-shadow duration-300">
              <span className="text-white font-serif font-bold text-base">MV</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-serif font-semibold leading-tight tracking-wide transition-colors duration-300 ${scrolled ? "text-navy-900" : "text-white"}`}>
                MVCaretaking
              </span>
              <span className={`text-[10px] uppercase tracking-luxe leading-tight hidden sm:block transition-colors duration-300 ${scrolled ? "text-navy-400" : "text-white/60"}`}>
                Martha&apos;s Vineyard
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-[13px] font-medium uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-current/10">
              <Link href="/get-a-quote" className="btn-primary text-xs px-6 py-2.5">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={hamburgerRef}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-navy-700 hover:bg-navy-50" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 animate-fade-in" role="navigation" aria-label="Mobile navigation">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-navy-100/50 shadow-luxury-lg p-4 mt-2">
              <div className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-xl tracking-wide transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-3 pt-3 border-t border-navy-100">
                  <Link
                    href="/get-a-quote"
                    className="btn-primary w-full text-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
