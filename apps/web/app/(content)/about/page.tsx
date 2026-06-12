// SPDX-License-Identifier: AGPL-3.0-only
export const dynamic = "force-dynamic";

export const metadata = {
  title: "About Us",
  description:
    "JustZappIt builds Zapp: a decentralized, end-to-end encrypted messenger with a shielded Zcash wallet and no-KYC cash-out built in. Who we are, what we build on, and the rules we hold ourselves to.",
};

// Thick rule — orange as sharp graphic element
function Rule({ className = "w-16" }: { className?: string }) {
  return (
    <div className={`h-[3px] bg-[var(--color-text-primary)] ${className}`} aria-hidden="true">
      <div className="h-full w-1/3 bg-primary" />
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mt-14">
        <Rule />
      </div>
      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-4">
        {children}
      </h2>
    </>
  );
}

export default function AboutPage() {
  const businessEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  const stack = [
    {
      name: "Zcash",
      body: "Private money secured by zero-knowledge proofs. Shielded transactions keep sender, recipient, and amount confidential on the blockchain.",
    },
    {
      name: "Zodl",
      body: "The wallet foundation. Formerly Zashi, built and maintained by the Zcash protocol's original developers.",
    },
    {
      name: "Holepunch",
      body: "Serverless peer-to-peer transport for messaging, the same stack that powers Keet. Messages move directly between devices.",
    },
    {
      name: "NEAR Intents",
      body: "Cross-chain swaps between ZEC and other assets with no centralized exchange and no account.",
    },
    {
      name: "P2P.me",
      body: "Peer-to-peer fiat settlement. Verified peers pay out over UPI, secured by on-chain escrow and zero-knowledge identity proofs.",
    },
  ];

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">
        About JustZappIt
      </h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">
        Last updated: June 2026
      </p>
      <Rule className="w-24 mb-10" />

      <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
        JustZappIt is the team behind Zapp: a decentralized, end-to-end encrypted messenger with
        a shielded Zcash wallet and a no-KYC way out to cash, all in one app. This page is who we
        are, what we build on, and the rules we hold ourselves to.
      </p>

      <SectionHeading>Why we exist</SectionHeading>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Who you pay and who you talk to says more about you than almost anything else you do.
        Today that record is collected, scored, and sold by platforms, brokers, and anyone with
        an API key. We think it belongs to you.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        JustZappIt exists to make private money and private conversation ordinary. Not a premium
        tier, not a setting buried three menus deep. The default. Zcash proved that private money
        is possible. Peer-to-peer networks proved that conversations do not need a server in the
        middle. Zapp puts both in your pocket and adds the missing piece: a way to actually spend
        it in the real world.
      </p>

      <SectionHeading>What we build</SectionHeading>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is one app with three jobs:
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
        <li>
          <strong>A messenger.</strong> End-to-end encrypted conversations that travel
          peer-to-peer over Holepunch. There are no messaging servers, no phone numbers, and no
          sign-up. Your chat identity is derived from your wallet seed, entirely on your device.
        </li>
        <li>
          <strong>A wallet.</strong> A full shielded Zcash wallet, forked from Zodl. Send ZEC to
          a contact inside the conversation, or swap between ZEC and USDC through NEAR Intents
          without an exchange account.
        </li>
        <li>
          <strong>A way out to cash.</strong> No-KYC cash-out over UPI in India through the
          P2P.me protocol. Scan a shop&apos;s UPI QR or pay out to your own UPI ID, settled by
          verified peers with on-chain escrow. More countries are coming.
        </li>
      </ul>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp for Android is live as an invite-only beta on Google Play, and iOS is in
        development. The fastest way in is the{" "}
        <a href="/app" className="text-primary hover:underline">
          app page
        </a>
        .
      </p>

      <SectionHeading>Built on Zodl</SectionHeading>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is a direct fork of Zodl, formerly known as Zashi: the flagship open-source Zcash
        wallet built by the team that created the Zcash protocol. That lineage matters. Wallet
        security is not a feature you bolt on at the end; it is years of engineering by people
        who understand the protocol from the inside, hardened in the open.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Forking Zodl means Zapp inherits all of it: the shielded-by-default architecture, the
        self-custody model, and the upstream security fixes, which we track and port as they
        ship. On that foundation we add what a wallet alone cannot do: private messaging and a
        path from ZEC to cash in hand.
      </p>

      <SectionHeading>The stack</SectionHeading>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Every layer Zapp stands on is an open protocol or open-source software:
      </p>
      <ul className="mt-4 space-y-3">
        {stack.map((item) => (
          <li
            key={item.name}
            className="bg-[var(--color-surface)] border border-[var(--color-border)] p-5"
          >
            <p className="font-extrabold tracking-tight text-[var(--color-text-primary)]">
              {item.name}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-1">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Nothing in that chain requires an account with us, because there are no accounts at all.
      </p>

      <SectionHeading>Our principles</SectionHeading>

      <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mt-8">
        Self-custody
      </h3>
      <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
        Your keys are generated on your device and stay there. We cannot access, move, or freeze
        your funds, and nobody can demand from us what we do not hold.
      </p>

      <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mt-8">
        Privacy by default
      </h3>
      <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
        Shielded transactions are the default, not an option you have to find. The app ships
        with no analytics, no advertising, and no tracking SDKs. This website keeps no personal
        data beyond the email you choose to give us for the beta.
      </p>

      <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mt-8">
        Consent
      </h3>
      <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
        You should understand what happens before it happens. Zapp shows rates before you confirm
        a swap, marks third-party services clearly, and never nudges you into sharing more than
        you intended. Informed choice is a feature.
      </p>

      <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mt-8">
        Open foundations
      </h3>
      <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp builds on public, auditable code: Zcash, Zodl, Holepunch, NEAR Intents, and P2P.me
        are all open protocols or open-source software. The privacy guarantees that matter are
        checkable at the protocol level. They do not depend on taking our word for it.
      </p>

      <SectionHeading>Contact</SectionHeading>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is built by a small independent team. If you found a bug, want to shape what gets
        built next, or just want to say hello, the inbox is open.
      </p>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-6 mt-6">
        <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">
          Reach us
        </h3>
        <ul className="space-y-2 text-[var(--color-text-secondary)]">
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${businessEmail}`} className="text-primary hover:underline">
              {businessEmail}
            </a>
          </li>
          <li>
            <strong>X (Twitter):</strong>{" "}
            <a
              href="https://x.com/JustZappIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @JustZappIt
            </a>
          </li>
          <li>
            <strong>Beta access:</strong>{" "}
            <a href="/app" className="text-primary hover:underline">
              request an Android invite
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
