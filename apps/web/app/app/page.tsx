// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Mobile App — iOS & Android",
  description:
    "JustZappIt for iOS and Android. Private P2P messaging with in-chat Zcash payments coming soon. Send ZEC to contacts using an external wallet — no middlemen, no KYC.",
  alternates: { canonical: "/app" },
  openGraph: {
    title: "JustZappIt — Mobile App",
    description:
      "Private P2P messaging with in-chat Zcash payments coming soon. Use an external wallet like Zodl to send ZEC directly in conversations — no KYC.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt — Mobile App",
    description:
      "Private P2P messaging with in-chat Zcash payments coming soon. Use Zodl or any wallet to send ZEC in conversations.",
    images: ["/api/og?type=app"],
  },
};

export default function AppPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

      {/* Hero */}
      <section className="text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
          iOS and Android
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4">
          Private messaging for{" "}
          <span className="text-primary">iOS and Android</span>
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto leading-relaxed mb-8">
          End-to-end encrypted conversations. In-chat Zcash payments are coming — you'll use
          an external wallet like Zodl to send ZEC directly to contacts without leaving the chat.
          No KYC. No middlemen.
        </p>

        {/* Waitlist form */}
        <div className="max-w-lg mx-auto">
          <p className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
            Be notified when the app launches and when new features go live:
          </p>
          <WaitlistForm source="app-page" />
        </div>
      </section>

      {/* How it works */}
      <section className="opacity-75">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
          How in-chat ZEC payments will work{" "}
          <span className="text-sm font-normal text-primary">(coming soon)</span>
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
          You'll connect an external Zodl wallet to JustZappIt and send ZEC to contacts directly in the chat.
        </p>
        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Open a conversation",
              body: "Start or open a chat with any contact in JustZappIt. Your conversations are end-to-end encrypted.",
            },
            {
              step: "2",
              title: "Tap the payment icon and select amount",
              body: "Inside the chat thread, tap the ZEC payment button. Enter the amount you want to send from your connected Zodl wallet.",
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
            "Open source codebase — anyone can audit the implementation",
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
        <Link href="/directory" className="text-primary hover:underline text-sm font-medium">
          View the directory and share feedback →
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
          not a current feature — we are being transparent about that. The directory we are
          building now is the facilitator layer that makes it possible.
        </p>
      </section>

      {/* Open source CTA */}
      <section className="text-center border-t border-[var(--color-border)] pt-12">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
          Open source
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-5">
          The full codebase is available on GitHub. Review it, audit it, contribute to it.
        </p>
        <a
          href="https://github.com/0xVampirot/justZappIt"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-[var(--color-border)] hover:bg-[var(--color-border)] text-[var(--color-text-primary)] font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          View on GitHub →
        </a>
      </section>

    </div>
  );
}
