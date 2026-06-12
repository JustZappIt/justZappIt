// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Mobile App — Android Beta Live, iOS Coming Soon",
  description:
    "Zapp for Android is live in invite-only beta on Google Play — a non-custodial Zcash wallet with built-in end-to-end encrypted messaging. iOS is in development. In-chat ZEC payments coming soon.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "JustZappIt — Zapp Android Beta Is Live",
    description:
      "A non-custodial Zcash wallet with built-in encrypted P2P messaging. The Android beta is live as invite-only internal testing on Google Play; iOS is in development.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt — Zapp Android Beta Is Live",
    description:
      "Zapp for Android: a non-custodial ZEC wallet with built-in encrypted messaging, now in invite-only beta on Google Play. In-chat payments coming soon. iOS in development.",
    images: ["/api/og?type=app"],
  },
};

export default function AppPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

      {/* Hero */}
      <section className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          Android beta live · iOS coming soon
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4">
          The Zapp beta is live on{" "}
          <span className="text-primary">Android</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed">
          Zapp is a non-custodial Zcash wallet with end-to-end encrypted messaging built in —
          no phone number, no KYC, no middlemen. The Android beta is running as invite-only
          internal testing on Google Play; iOS is on the way.
        </p>
      </section>

      {/* Platform waitlists */}
      <section className="space-y-6">
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
            Android — beta is live
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Zapp for Android is in invite-only internal testing on Google Play: a full shielded
            ZEC wallet with end-to-end encrypted chat built in — share photos and your location
            in conversations, no phone number needed. Enter your email and we&apos;ll send you a
            tester invite.
          </p>
          <WaitlistForm source="app-page-android" />
          <p className="text-xs text-[var(--color-text-secondary)] mt-3">
            Use the same email as your Google Play account — invites are sent to that address
            and only work for the matching Google account.
          </p>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
            iOS — coming soon
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The iOS app is coming soon. Leave your email and we&apos;ll notify you the
            moment it&apos;s ready to install.
          </p>
          <WaitlistForm source="app-page-ios" />
        </div>
      </section>

      {/* How it works */}
      <section className="opacity-75">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          How in-chat ZEC payments will work{" "}
          <span className="text-sm font-normal text-primary">(coming soon)</span>
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          Payments will run on the shielded ZEC wallet built into the app — no external wallet
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
              title: "ZEC sent — inside the chat",
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
            "Shielded ZEC transactions by default — amount and recipient not on a public ledger",
            "No message metadata sold or shared",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]">
              <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Facilitator network */}
      <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
          Building the facilitator network
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          We are building an entirely new facilitator network — not a listing of existing shops,
          but a community of people willing to facilitate ZEC-to-fiat conversions via QR codes.
          If you are interested in becoming a facilitator, we want your input on how the payment
          rails should work.
        </p>
        <Link href="/#become-a-facilitator" className="text-primary hover:underline text-sm font-medium">
          Become a facilitator →
        </Link>
      </section>

      {/* Roadmap */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          What we&apos;re building toward
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          The roadmap item that gets the most attention: QR-code shop payments via a fiat
          facilitator. You&apos;re at a shop. You generate a QR code in the app representing the
          payment. A nearby facilitator — part of the JustZappIt network — scans it and pays
          in fiat on your behalf. You settle with them in ZEC inside the conversation thread.
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          No crypto terminal at the shop. No merchant adoption required. This is a roadmap item,
          not a current feature — we are being transparent about that. The facilitator network
          we are building now is the layer that makes it possible.
        </p>
      </section>

    </div>
  );
}
