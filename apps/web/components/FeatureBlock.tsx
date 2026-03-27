// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useInView } from "@/lib/useInView";

export default function FeatureBlock() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[var(--color-bg)] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight animate-reveal-text">
            Privacy and payments in one place
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)] max-w-xl mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            Two features that belong together — finally in the same app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Feature 1 — slides in from left */}
          <div
            className={`bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-8 ${
              inView ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary fill-none stroke-current stroke-2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v2m0 4v4m-2-2h4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              Send Zcash directly to contacts <span className="text-xs font-normal text-primary">(Coming soon)</span>
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Open a conversation, tap the payment icon, enter an amount, and send. Use an external wallet
              like Zodl to send ZEC directly to your contact within the chat — no middlemen, no separate
              app to switch to.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-3">
              Shielded transactions by default. Amount and recipient are not visible on a public
              ledger.
            </p>
          </div>

          {/* Feature 2 — slides in from right */}
          <div
            className={`bg-[var(--color-surface)] rounded-xl border border-[var(--color-border)] p-8 ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "80ms" }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary fill-none stroke-current stroke-2" aria-hidden="true">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-3">
              Messages that stay between you
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              End-to-end encrypted conversations. No phone number required to sign up. No message
              metadata sold or shared. When you delete a conversation, it is gone.
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mt-3">
              Open source codebase — anyone can audit how privacy is implemented.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
