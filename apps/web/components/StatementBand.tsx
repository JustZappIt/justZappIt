// SPDX-License-Identifier: AGPL-3.0-only
import Image from "next/image";

export default function StatementBand() {
  return (
    <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)] py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-[1.45rem] sm:text-3xl lg:text-[2.4rem] font-black tracking-tight leading-[1.15] text-[var(--color-text-primary)]">
              <span className="block">Your messages are encrypted.</span>
              <span className="block mt-[0.55em]">Your photos are encrypted.</span>
              <span className="block mt-[0.55em]">Your files are encrypted.</span>
              <span className="block mt-[0.55em] text-primary">Your money is encrypted.</span>
            </h2>

            <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mt-10 mb-8" aria-hidden="true">
              <div className="h-full w-1/3 bg-primary" />
            </div>

            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-xl">
              On a transparent blockchain, every payment you ever make is public: the amount, the
              counterparty, the time, forever. Anyone who learns your address can read your
              balance and your entire history.
            </p>
            <p className="text-[var(--color-text-secondary)] leading-relaxed max-w-xl">
              Zcash closed that gap with shielded transactions: encryption at the protocol level,
              not obfuscation. Zapp finishes the thought by putting encrypted money and encrypted
              conversations in the same app, behind the same seed phrase.
            </p>
          </div>

          {/* Real chat screenshot framed with official device art */}
          <div className="hidden lg:block relative w-[300px]">
            <Image
              src="/screens/zapp-chat-framed.png"
              alt="An end-to-end encrypted Zapp conversation on a phone"
              width={900}
              height={1901}
              className="[filter:drop-shadow(0_24px_48px_rgba(15,14,12,0.25))]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
