// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import Image from "next/image";
import { PLAY_STORE_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Download Zapp for Android",
  description:
    "Zapp for Android is in open beta on Google Play: a mobile Zcash wallet with encrypted messaging, in-chat ZEC payments, and a no-KYC offramp built in. No invite needed. iOS soon.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "JustZappIt | Zapp for Android Is in Open Beta",
    description:
      "A mobile Zcash wallet with encrypted messaging, in-chat payments, and a no-KYC offramp built in. Now in open beta on Google Play, no invite needed; iOS coming soon.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt | Zapp for Android Is in Open Beta",
    description:
      "Zapp for Android: a mobile Zcash wallet with encrypted messaging, in-chat payments, and a no-KYC offramp built in. Now in open beta on Google Play, no invite needed. iOS coming soon.",
    images: ["/api/og?type=app"],
  },
};

export default function AppPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

      {/* Hero */}
      <section className="text-center md:text-left md:grid md:grid-cols-[1fr_auto] md:gap-12 md:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Open beta on Android · iOS coming soon
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4">
            A Zcash wallet with{" "}
            <span className="text-primary">chat built in.</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto md:mx-0 leading-relaxed">
            Shielded ZEC payments inside encrypted chats, plus a no-KYC offramp to local cash.
            No phone number, no sign-up. Now in open beta on Google Play.
          </p>
        </div>

        {/* Real screenshot framed with official device art (Android Studio frame) */}
        <div className="hidden md:block w-[240px]">
          <Image
            src="/screens/zapp-wallet-framed.png"
            alt="Zapp wallet screen on a phone showing a shielded ZEC balance and recent activity"
            width={900}
            height={1901}
            priority
            className="[filter:drop-shadow(0_24px_48px_rgba(15,14,12,0.25))]"
          />
        </div>
      </section>

      {/* Download */}
      <section>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
            Android is in open beta
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
            No invite, no waitlist. Install Zapp straight from Google Play: a full shielded ZEC
            wallet with end-to-end encrypted chat, in-chat payments, and a no-KYC offramp built
            in. Share photos and your location in conversations, no phone number needed.
          </p>
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-colors duration-200 text-[15px]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
            </svg>
            Download on Google Play
          </a>
          <p className="text-xs text-[var(--color-text-secondary)] mt-3">
            Free and open beta, so anyone can install it. No invite and no opt-in step.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          How in-chat ZEC payments work
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Payments run on the shielded ZEC wallet built into the app. No external wallet
          to connect.
        </p>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Open a conversation",
              body: "Start or open a chat with any contact in Zapp. Your conversations are end-to-end encrypted.",
            },
            {
              step: "2",
              title: "Tap the payment icon and select amount",
              body: "Inside the chat thread, tap the ZEC payment button. Enter the amount you want to send from the wallet built into the app.",
            },
            {
              step: "3",
              title: "ZEC sent, inside the chat",
              body: "The transaction completes without leaving the conversation. Your contact sees the payment in the thread. Shielded by default.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                {step}
              </div>
              <div>
                <h3 className="font-bold text-[var(--color-text-primary)] mb-1">{title}</h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Privacy */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Privacy by design
        </h2>
        <ul className="space-y-3">
          {[
            "End-to-end encrypted conversations",
            "No phone number required to sign up",
            "Shielded ZEC transactions by default: amount and recipient not on a public ledger",
            "No message metadata sold or shared",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Offramp */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Turn ZEC into local cash
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          The offramp is live in the beta today. Scan any UPI QR code or enter a UPI ID, and Zapp
          turns shielded ZEC into rupees on the spot: the swap runs through NEAR Intents and a
          verified peer on the P2P.me protocol settles the payment over UPI, secured by on-chain
          escrow.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          No exchange account, no KYC, no paperwork. Every order runs through a fresh wallet, so
          the payout carries no link to your balance or history. Live in India over UPI today,
          with PIX (Brazil), QRIS (Indonesia), and Argentina, Mexico, and Venezuela on the way.
        </p>
      </section>

    </div>
  );
}
