// SPDX-License-Identifier: AGPL-3.0-only
import Image from "next/image";
import Link from "next/link";

export default function AppHero() {
  return (
    <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-16 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <HeroCopy />
          </div>

          {/* Real screenshot of the app, framed */}
          <div className="hidden lg:block relative w-[290px] animate-scale-in" style={{ animationDelay: "360ms" }}>
            <div className="relative rounded-[36px] border-[9px] border-[#0f0e0c] ring-1 ring-[var(--color-border-strong)] overflow-hidden shadow-[0_30px_80px_rgba(15,14,12,0.25)]">
              <Image
                src="/screens/zapp-wallet.png"
                alt="Zapp wallet screen showing a shielded ZEC balance and recent activity"
                width={636}
                height={1230}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <>
        <p
          className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-text)] mb-5 animate-fade-in"
          style={{ animationDelay: "0ms" }}
        >
          Android beta live · iOS coming soon
        </p>

        <h1
          className="text-5xl sm:text-6xl font-black text-[var(--color-text-primary)] leading-[1.05] tracking-tight mb-6 animate-reveal-text"
          style={{ animationDelay: "80ms" }}
        >
          Private messages.{" "}
          <span className="text-primary">Real money.</span>
        </h1>

        {/* Thick rule — orange as sharp graphic element */}
        <div
          className="h-[3px] w-24 mx-auto lg:mx-0 mb-8 bg-[var(--color-text-primary)] animate-fade-in"
          style={{ animationDelay: "180ms" }}
          aria-hidden="true"
        >
          <div className="h-full w-1/3 bg-primary" />
        </div>

        <p
          className="text-xl text-[var(--color-text-secondary)] mb-3 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-up"
          style={{ animationDelay: "220ms" }}
        >
          A decentralized messenger with a shielded Zcash wallet and{" "}
          <span className="font-extrabold text-[var(--color-text-primary)]">
            no-KYC cash-out
          </span>{" "}
          built in.
        </p>

        <p
          className="text-base text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          Messages travel peer-to-peer over Holepunch with no servers in the middle. The wallet
          is a direct fork of Zodl, the Zcash wallet from the protocol&apos;s original creators.
          And when you need cash, ZEC pays out to local currency with no identity checks. Your
          keys never leave your device.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-all duration-200 text-[15px] hover:-translate-y-0.5 hover:shadow-[var(--shadow)] animate-scale-in"
            style={{ animationDelay: "420ms" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
            </svg>
            Get the Android beta
          </Link>

          {/* iOS — intentionally not a link: greyed out until launch */}
          <div
            aria-disabled="true"
            className="relative inline-flex items-center justify-center gap-2.5 bg-[var(--color-chip)] text-[var(--color-text-subtle)] font-extrabold tracking-wide px-8 h-[52px] border border-[var(--color-border-strong)] text-[15px] cursor-not-allowed select-none opacity-80 animate-scale-in"
            style={{ animationDelay: "500ms" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
            <span className="absolute -top-2.5 -right-2.5 bg-[var(--color-text-primary)] text-[var(--color-bg)] text-[9px] font-extrabold uppercase tracking-[0.15em] px-2 py-1">
              Coming soon
            </span>
          </div>
        </div>
    </>
  );
}
