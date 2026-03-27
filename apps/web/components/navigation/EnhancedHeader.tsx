// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

// X (Twitter) icon — lucide-react doesn't ship one, using inline SVG
function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// Nav link with sliding underline on hover
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-[width] duration-200 ease-out group-hover:w-full" />
    </Link>
  );
}

export default function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`bg-[var(--color-surface)] border-b border-[var(--color-border)] sticky top-0 z-40 transition-all duration-250 ease-out ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center transition-[height] duration-250 ease-out ${
            scrolled ? "h-12" : "h-16"
          }`}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-[var(--color-text-primary)] font-bold transition-[font-size,transform] duration-250 ease-out ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              Just<span className="text-primary">Zapp</span>It
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink href="/directory">Directory</NavLink>
            <NavLink href="/app">App</NavLink>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setResourcesDropdownOpen(true)}
              onMouseLeave={() => setResourcesDropdownOpen(false)}
            >
              <button className="relative flex items-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-2 text-sm group">
                Resources
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    resourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-[width] duration-200 ease-out group-hover:w-full" />
              </button>

              {resourcesDropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg shadow-lg py-2 mt-1 animate-fade-up">
                  {[
                    { href: "/faq", label: "FAQ" },
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact" },
                    { href: "/leaderboard", label: "Leaderboard" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block px-4 py-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-border)] transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/legal/privacy">Legal</NavLink>

            {/* X social icon */}
            <a
              href="https://x.com/JustZappIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Follow JustZappIt on X"
            >
              <XIcon className="h-4 w-4" />
            </a>

            {/* Download CTA */}
            <Link
              href="/app"
              className="inline-flex items-center bg-primary hover:bg-[#d97411] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              Download
            </Link>
          </nav>

          {/* Mobile: X icon + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://x.com/JustZappIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              aria-label="Follow JustZappIt on X"
            >
              <XIcon className="h-4 w-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] p-2"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-border)] py-4 animate-fade-up">
            <nav className="flex flex-col space-y-1">
              <Link
                href="/directory"
                className="block px-2 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Directory
              </Link>
              <Link
                href="/app"
                className="block px-2 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                App
              </Link>

              <div className="pt-2">
                <div className="px-2 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] mb-1">
                  Resources
                </div>
                <div className="pl-4 space-y-1">
                  {[
                    { href: "/faq", label: "FAQ" },
                    { href: "/about", label: "About Us" },
                    { href: "/contact", label: "Contact" },
                    { href: "/leaderboard", label: "Leaderboard" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block py-1.5 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/legal/privacy"
                className="block px-2 py-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Legal
              </Link>

              <div className="pt-2 px-2">
                <Link
                  href="/app"
                  className="inline-flex items-center bg-primary hover:bg-[#d97411] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download App
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
