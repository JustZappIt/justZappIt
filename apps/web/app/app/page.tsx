// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Get the Zapp Android Beta",
  description:
    "Zapp for Android is live in invite-only beta on Google Play: a non-custodial Zcash wallet with decentralized encrypted messaging, in-chat payments, and no-KYC cash-out. iOS coming soon.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "JustZappIt | Zapp Android Beta Is Live",
    description:
      "A non-custodial Zcash wallet with decentralized encrypted messaging, in-chat payments, and no-KYC cash-out. The Android beta is live as invite-only internal testing on Google Play; iOS coming soon.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt | Zapp Android Beta Is Live",
    description:
      "Zapp for Android: a non-custodial ZEC wallet with decentralized encrypted messaging, in-chat payments, and no-KYC cash-out, now in invite-only beta on Google Play. iOS coming soon.",
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
            Android beta live · iOS coming soon
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4">
            The Zapp beta is live on{" "}
            <span className="text-primary">Android</span>
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto md:mx-0 leading-relaxed">
            Zapp is a non-custodial Zcash wallet with decentralized, end-to-end encrypted
            messaging built in (peer-to-peer over Holepunch, no servers, no phone number), plus
            no-KYC cash-out to local currency in select countries. The Android beta is running as
            invite-only internal testing on Google Play; iOS is on the way.
          </p>
        </div>

        {/* Real screenshot of the app's first screen */}
        <div className="hidden md:block w-[220px]">
          <div className="rounded-[32px] border-[8px] border-[#0f0e0c] ring-1 ring-[var(--color-border-strong)] overflow-hidden shadow-[0_30px_80px_rgba(15,14,12,0.25)]">
            <Image
              src="/screens/zapp-onboarding.png"
              alt="Zapp onboarding screen reading: Chat privately. Send instantly."
              width={636}
              height={1230}
              priority
            />
          </div>
        </div>
      </section>

      {/* Platform waitlists */}
      <section className="space-y-6">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
            Android beta is live
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Zapp for Android is in invite-only internal testing on Google Play: a full shielded
            ZEC wallet with end-to-end encrypted chat, in-chat payments, and no-KYC cash-out
            built in. Share photos and your location in conversations, no phone number needed.
            Enter your email and we&apos;ll send you a tester invite.
          </p>
          <WaitlistForm source="app-page-android" />
          <p className="text-xs text-[var(--color-text-secondary)] mt-3">
            Use the same email as your Google Play account. Invites are sent to that address
            and only work for the matching Google account.
          </p>
        </div>

        <p className="text-xs text-[var(--color-text-secondary)] text-center">
          On iPhone? The iOS app is coming soon. Leave your email above and we&apos;ll announce
          the iOS launch to the same list.
        </p>
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

      {/* Cash-out */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Pay any UPI QR with ZEC
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          Cash-out is live in the beta today. Scan any UPI QR code or enter a UPI ID, and Zapp
          turns shielded ZEC into rupees on the spot: the swap runs through NEAR Intents and a
          verified peer on the P2P.me protocol settles the payment over UPI, secured by on-chain
          escrow.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          No exchange account, no KYC, no paperwork. India today, with more countries and
          payment rails on the way.
        </p>
      </section>

    </div>
  );
}
