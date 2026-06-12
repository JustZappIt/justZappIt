// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useInView } from "@/lib/useInView";

export default function FeatureBlock() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[var(--color-bg)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
            What&apos;s inside
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight animate-reveal-text">
            Privacy and payments in one place
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            Private money, private conversations, and a private way out to cash, finally in the
            same app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Messaging — slides in from left */}
          <div
            className={`bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-8 ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="w-11 h-11 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" aria-hidden="true">
                <path d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8a2.5 2.5 0 01-2.5 2.5H12l-4 3.5V17H6.5A2.5 2.5 0 014 14.5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] tracking-tight mb-3">
              Messaging without middlemen
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Every message is end-to-end encrypted and travels directly between devices over
              Holepunch, the peer-to-peer stack behind Keet. There is no messaging server to
              breach, subpoena, or shut down.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-3">
              No sign-up, no phone number, no email. Your identity lives in your seed phrase,
              on your device, and when you delete a conversation, it is gone.
            </p>
          </div>

          {/* In-chat payments — fades up */}
          <div
            className={`bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-8 ${
              inView ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "80ms" }}
          >
            <div className="w-11 h-11 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" aria-hidden="true">
                <path d="M4 12l16-8-6 16-2-6-6-2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] tracking-tight mb-3">
              Send ZEC like a message
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Open a conversation, tap the payment icon, enter an amount, and send. The shielded
              Zcash wallet is built into the app, so paying a friend feels like sending a text.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-3">
              Shielded by default. Amounts and recipients never appear on a public ledger.
            </p>
          </div>

          {/* Cash-out — slides in from right */}
          <div
            className={`bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-8 ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "160ms" }}
          >
            <div className="w-11 h-11 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2" aria-hidden="true">
                <rect x="3" y="6" width="18" height="12" />
                <circle cx="12" cy="12" r="2.5" />
                <path d="M6.5 9.5v.01M17.5 14.5v.01" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] tracking-tight mb-3">
              Cash out without KYC
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Turn ZEC into local currency with no exchange account, no identity checks, and no
              paperwork. Swaps run on NEAR Intents and cash-out settles peer-to-peer through the
              P2P.me protocol.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-3">
              Live in India over UPI today, with more countries on the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
