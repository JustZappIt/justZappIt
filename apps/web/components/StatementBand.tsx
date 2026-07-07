// SPDX-License-Identifier: AGPL-3.0-only
import Image from "next/image";

export default function StatementBand() {
  return (
    <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[1.45rem] sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.15] text-[var(--color-text-primary)]">
              <span className="block">Private money should be</span>
              <span className="block mt-[0.55em] text-primary">spendable money.</span>
              <span className="block mt-[0.9em] text-[0.68em] leading-snug text-[var(--color-text-secondary)]">
                That&apos;s why we built Zapp to settle in fiat.
              </span>
            </h2>

            <div
              className="h-[3px] w-24 bg-[var(--color-text-primary)] mt-10 mb-8"
              aria-hidden="true"
            >
              <div className="h-full w-1/3 bg-primary" />
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-xl">
              On a transparent blockchain, every payment you ever make is public: the amount, the
              counterparty, the time, forever. Anyone who learns your address can read your balance
              and your entire history.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Zcash closed that gap with shielded transactions: encryption at the protocol level,
              not obfuscation. Zapp brings that same protection to your messages, so your money and
              your chats live in one app, secured by a single seed phrase.
            </p>
          </div>

          {/* Real chat screenshot in a hand-held device mockup */}
          <div className="hidden lg:block relative w-[420px]">
            <Image
              src="/screens/zapp-chat-hand.png"
              alt="A hand holding a phone showing an end-to-end encrypted Zapp chat list"
              width={1658}
              height={1541}
              className="[filter:drop-shadow(0_18px_40px_rgba(15,14,12,0.18))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
