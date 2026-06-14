// SPDX-License-Identifier: AGPL-3.0-only
import Image from "next/image";
import Link from "next/link";
import IosNotifyButton from "@/components/IosNotifyButton";

const stack = [
  {
    label: "Messaging",
    name: "Holepunch P2P",
    note: "The stack behind Keet",
  },
  {
    label: "Wallet",
    name: "Zodl fork",
    note: "By Zcash's creators",
  },
  {
    label: "Swaps",
    name: "NEAR Intents",
    note: "No exchange account",
  },
  {
    label: "Offramp",
    name: "P2P.me",
    note: "On-chain escrow",
  },
];

export default function AppHero() {
  return (
    <section className="bg-[var(--color-bg)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-16 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <HeroCopy />
          </div>

          {/* Real screenshot framed with official device art (Android Studio frame) */}
          <div className="hidden lg:block relative w-[320px]">
            <Image
              src="/screens/zapp-hero-framed.png"
              alt="Zapp welcome screen on a phone reading: Your messages and money. Encrypted."
              width={900}
              height={1901}
              priority
              className="[filter:drop-shadow(0_24px_48px_rgba(15,14,12,0.25))]"
            />
          </div>
        </div>

        {/* The stack: what each layer runs on. Hairline grid, no logos. */}
        <div className="mt-16 lg:mt-20 border-t border-[var(--color-border-strong)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--color-border)] pt-px">
            {stack.map((item) => (
              <div key={item.label} className="bg-[var(--color-bg)] px-4 lg:px-6 py-5">
                <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-1.5">
                  {item.label}
                </p>
                <p className="text-sm font-extrabold tracking-tight text-[var(--color-text-primary)]">
                  {item.name}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCopy() {
  return (
    <>
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-text)] mb-5">
        Android beta live · iOS coming soon
      </p>

      <h1 className="text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.02] font-black text-[var(--color-text-primary)] tracking-tight mb-6">
        Encrypt the messages
        <br />
        <span className="text-primary">and the money.</span>
      </h1>

      {/* Thick rule — orange as sharp graphic element */}
      <div
        className="h-[3px] w-24 mx-auto lg:mx-0 mb-8 bg-[var(--color-text-primary)]"
        aria-hidden="true"
      >
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="text-xl text-[var(--color-text-secondary)] mb-3 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
        Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in. Conversations
        travel device to device, never through a server. Payments settle in shielded ZEC, never
        on a public ledger.
      </p>

      <p className="text-base text-[var(--color-text-secondary)] mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        No phone number. No email. No sign-up. One seed phrase holds your money and your chat
        identity, and it never leaves your device.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
        <Link
          href="/app"
          className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-colors duration-200 text-[15px]"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
          </svg>
          Get the Android beta
        </Link>

        {/* iOS — not launched yet: opens an email dropdown to capture interest */}
        <IosNotifyButton />
      </div>
    </>
  );
}
