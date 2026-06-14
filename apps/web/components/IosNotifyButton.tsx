// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useRef, useState } from "react";
import WaitlistForm from "@/components/WaitlistForm";

export default function IosNotifyButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;

    function onPointerDown(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="relative inline-flex items-center justify-center gap-2.5 bg-[var(--color-chip)] text-[var(--color-text-subtle)] hover:text-primary hover:border-primary hover:bg-[var(--color-accent-soft)] font-extrabold tracking-wide px-8 h-[52px] border border-[var(--color-border-strong)] text-[15px] transition-colors cursor-pointer select-none"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        App Store
        <span className="absolute -top-2.5 -right-2.5 bg-[var(--color-text-primary)] text-[var(--color-bg)] text-[9px] font-extrabold uppercase tracking-[0.15em] px-2 py-1">
          Coming soon
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Get notified when iOS launches"
          className="absolute z-20 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 top-full mt-3 w-[min(30rem,calc(100vw-2rem))] bg-[var(--color-surface-input)] border border-[var(--color-border-strong)] rounded-xl p-5 text-left shadow-[0_24px_60px_-12px_rgba(0,0,0,0.7)] ring-1 ring-black/5"
        >
          <p className="text-sm font-extrabold text-[var(--color-text-primary)] mb-1">
            iOS is on the way
          </p>
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">
            Drop your email and we&apos;ll notify you the day the iPhone app is ready to install.
          </p>
          <WaitlistForm source="app-page-ios" />
        </div>
      )}
    </div>
  );
}
