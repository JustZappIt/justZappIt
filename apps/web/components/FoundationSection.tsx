// SPDX-License-Identifier: AGPL-3.0-only

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
  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* The fork story */}
          <div>
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
              Zapp&apos;s wallet is built on Zodl, the flagship open-source Zcash wallet from the
              team that created the protocol itself. We stand on their work with respect: every
              release inherits Zodl&apos;s architecture, its shielded-by-default design, and
              years of security hardening, and we track upstream to port improvements as they
              ship.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Everything we add on top, messaging, swaps, and the offramp, is built the same
              way: non-custodial and peer-to-peer, with no servers in the middle.
            </p>
          </div>

          {/* What that buys you */}
          <div className="space-y-5">
            {guarantees.map((item) => (
              <div
                key={item.index}
                className="bg-[var(--color-bg)] border border-[var(--color-border)] p-6"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <p className="text-[11px] font-extrabold tracking-[0.2em] text-[var(--color-accent-text)]">
                    {item.index}
                  </p>
                  <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
