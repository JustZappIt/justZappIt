// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useInView } from "@/lib/useInView";

const lineage = [
  {
    name: "Zcash",
    body: "The most private money there is. Shielded transactions keep sender, recipient, and amount confidential behind zero-knowledge proofs.",
  },
  {
    name: "Zodl",
    body: "The flagship Zcash wallet, formerly Zashi, built and maintained by the protocol's original developers.",
  },
  {
    name: "Zapp",
    body: "A direct fork of Zodl with everything it inherits, plus peer-to-peer messaging and a way out to cash.",
  },
];

const guarantees = [
  {
    index: "01",
    title: "Self-custody, always",
    body: "Your keys are generated on your device and never leave it. We cannot move, freeze, or even see your funds. One recovery phrase restores your wallet and your chat identity.",
  },
  {
    index: "02",
    title: "Shielded by default",
    body: "Payments use shielded Zcash, so amounts, balances, and counterparties stay off the public ledger. Transparent ZEC that arrives can be shielded in one tap.",
  },
  {
    index: "03",
    title: "Nothing to know about you",
    body: "No accounts, no analytics, no tracking SDKs. Zapp collects nothing about you, so there is nothing to leak, sell, or hand over.",
  },
];

export default function FoundationSection() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-24"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
          {/* The fork story */}
          <div className={inView ? "animate-slide-in-left" : "opacity-0"}>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
              The foundation
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight mb-6">
              Security inherited, not invented
            </h2>
            <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-8" aria-hidden="true">
              <div className="h-full w-1/3 bg-primary" />
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              Zapp is a direct fork of Zodl, formerly Zashi: the flagship open-source Zcash
              wallet from the team that created the protocol itself. Every release inherits its
              architecture, its shielded-by-default design, and years of security hardening. We
              track upstream and port improvements as they ship.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              What we add on top, the messaging, the swaps, the cash-out, follows one rule: it
              has to work without trusting us.
            </p>
          </div>

          {/* Lineage */}
          <ol
            className={`relative border-l-2 border-[var(--color-border-strong)] pl-7 ml-2 space-y-9 ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "120ms" }}
          >
            {lineage.map((step, i) => (
              <li key={step.name} className="relative">
                <span
                  className={`absolute -left-9 top-1 w-3.5 h-3.5 ${
                    i === lineage.length - 1 ? "bg-primary" : "bg-[var(--color-text-primary)]"
                  }`}
                  aria-hidden="true"
                />
                <p className="text-base font-black tracking-tight text-[var(--color-text-primary)]">
                  {step.name}
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-1">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* What that buys you */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {guarantees.map((item, i) => (
            <div
              key={item.index}
              className={`bg-[var(--color-bg)] border border-[var(--color-border)] p-7 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 80}ms` }}
            >
              <p className="text-[11px] font-extrabold tracking-[0.2em] text-[var(--color-accent-text)] mb-3">
                {item.index}
              </p>
              <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
