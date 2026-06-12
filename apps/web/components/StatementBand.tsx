// SPDX-License-Identifier: AGPL-3.0-only

export default function StatementBand() {
  return (
    <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">
              The gap
            </p>
            <h2 className="text-[1.45rem] sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.15] text-[var(--color-text-primary)]">
              <span className="block">Your messages are encrypted.</span>
              <span className="block mt-[0.55em]">Your photos are encrypted.</span>
              <span className="block mt-[0.55em]">Your files are encrypted.</span>
              <span className="block mt-[0.55em] text-primary">Your money is not.</span>
            </h2>
          </div>

          <div>
            <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-8" aria-hidden="true">
              <div className="h-full w-1/3 bg-primary" />
            </div>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
              On a transparent blockchain, every payment you ever make is public: the amount, the
              counterparty, the time, forever. Anyone who learns your address can read your
              balance and your entire history.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Zcash closed that gap with shielded transactions: encryption at the protocol level,
              not obfuscation. Zapp finishes the thought by putting encrypted money and encrypted
              conversations in the same app, behind the same seed phrase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
