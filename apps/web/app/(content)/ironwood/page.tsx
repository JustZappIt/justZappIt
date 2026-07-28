// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";
import { PLAY_STORE_URL } from "@/lib/links";

export const metadata = {
  title: "Moving Your Funds to Ironwood",
  description:
    "Zcash upgraded to Ironwood, a new shielded pool. What it means for your Zapp wallet, what becomes public if you move funds out of Orchard yourself, and the step-by-step for doing it with the least exposure.",
  alternates: { canonical: "/ironwood" },
  openGraph: {
    title: "Ironwood: What Zapp Users Need to Know",
    description:
      "Your funds are safe and there is no deadline. What changed, what becomes public if you migrate manually, and how to move funds out of Orchard step by step.",
    url: "/ironwood",
    images: ["/og-image.jpg"],
  },
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 font-extrabold tracking-tight text-[var(--color-text-primary)]">
      {children}
    </h3>
  );
}

const steps = [
  {
    title: "Update Zapp",
    body: "Install the latest version from Google Play. An older version cannot sync or send once Ironwood is live, so do this first whether or not you plan to move anything.",
  },
  {
    title: "Turn on Tor and leave it on",
    body: "Open the You tab, find Privacy, and switch on Tor. Leave it on rather than turning it on just before a transfer. This is the single largest thing you control.",
  },
  {
    title: "Copy your shielded address",
    body: "On Home, tap the action button and choose Receive. Stay on the Shielded tab and tap Copy. Zapp shows a fresh shielded address every time you open Receive; the one you copy keeps working.",
  },
  {
    title: "Save it as a contact",
    body: "Open the You tab, then People, then Contacts. Add a contact, paste the address, and give it a distinct name such as “My Zapp wallet” so you cannot confuse it with anyone else.",
  },
  {
    title: "Send yourself a small test",
    body: "On Home, tap the action button and choose Send. Tap the address book icon, pick the contact you just saved, and send a small, non-identifying amount such as 0.001 ZEC.",
  },
  {
    title: "Check where it landed",
    body: "Wait for the transaction to confirm, then tap Total balance on Home to open the pool breakdown. Your test amount should now sit under Ironwood.",
  },
  {
    title: "Move the rest in stages",
    body: "Repeat the send with a larger amount each time, each one larger than your current Ironwood balance, leaving days in between. Check the breakdown after each transfer so you know exactly what moved.",
  },
];

export default function IronwoodPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Moving your funds to Ironwood",
    description:
      "What the Ironwood shielded-pool upgrade means for Zapp users, and how to move funds out of Orchard manually.",
    url: `${appUrl}/ironwood`,
    dateModified: "2026-07-27",
    publisher: {
      "@type": "Organization",
      name: "JustZappIt",
      url: appUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl">
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
          Network upgrade
        </p>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">
          Moving your funds to Ironwood
        </h1>
        <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">
          Last updated: July 27, 2026
        </p>
        <Rule className="w-24 mb-10" />

        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
          Zcash has a new shielded pool called Ironwood. Your funds are safe, your addresses still
          work, and there is no deadline. This page explains what changed, what it costs you
          in privacy to move funds out of Orchard yourself, and how to do it with the least
          exposure if you would rather not wait.
        </p>

        <div className="mt-8 p-6 bg-[var(--color-accent-soft)] border-l-4 border-[var(--color-accent)]">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-text)] mb-3">
            The short version
          </p>
          <ul className="space-y-2 text-sm text-[var(--color-accent-text)] leading-relaxed">
            <li>
              <strong>Update Zapp.</strong> An older version cannot sync or send once Ironwood is
              live.
            </li>
            <li>
              <strong>Nothing else is urgent.</strong> Your Orchard funds do not expire and stay
              spendable.
            </li>
            <li>
              <strong>We recommend waiting.</strong> A more private migration is coming in a later
              update, and it does this better than you can by hand.
            </li>
            <li>
              <strong>If you move funds yourself, each transfer publishes its amount.</strong> Not
              who you are, not who you paid, and not the balance you leave behind. The rest of
              this page is how to keep that to a minimum.
            </li>
          </ul>
        </div>

        <SectionHeading>What Ironwood is</SectionHeading>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Ironwood is a new shielded pool for Zcash: the same protocol as Orchard, now formally
          verified and independently audited. It activates on mainnet at block 3,428,143, around
          July 28, 2026. Shielded payments sent to you after that arrive in Ironwood without you
          doing anything.
        </p>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          ZEC you already hold stays in Orchard until you move it. Value that crosses between
          shielded pools passes through a turnstile, and the turnstile publicly accounts for what
          crosses. That is true of every Zcash wallet, and it is the whole reason this page exists.
        </p>

        <SectionHeading>Updating the app</SectionHeading>
        <SubHeading>What is in the update?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Support for the network upgrade, so your wallet keeps working through it: syncing,
          receiving, sending, swaps, and merchant payments. The update{" "}
          <strong className="text-[var(--color-text-primary)]">does not</strong> move your funds
          into Ironwood, and it will not offer to. The feature that automates that comes later.
        </p>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Get it from{" "}
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Google Play
          </a>
          . The iOS app is still in development and will ship Ironwood-ready.
        </p>

        <SubHeading>Is there a deadline for moving my funds?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          No. Orchard funds do not expire. They remain yours and spendable, today, next month, or
          whenever the migration feature arrives.
        </p>

        <SubHeading>Do I need a new address?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          No. Ironwood uses your existing addresses, so anything you have already shared keeps
          working. Your transparent balance is not in Orchard and is not affected by any of this.
        </p>

        <SectionHeading>Using Zapp before you migrate</SectionHeading>
        <SubHeading>Can I still send and receive normally?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Yes, once you have updated. Receiving is unchanged, and shielded payments to you arrive
          in Ironwood.
        </p>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Sending works too, with one difference. A payment that draws on your Orchard balance
          crosses the turnstile, so the amount of that payment becomes public. The rest of your
          balance stays in Orchard as change and stays private. The same applies to swaps and to
          merchant payments through the offramp.
        </p>

        <SubHeading>Should I hold off on spending?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          If you do not need to spend, waiting for the migration feature publishes nothing. If you
          need to spend now, that is fine too. You are not risking your money. You are accepting
          that the amount of that individual payment becomes permanently public. That is a
          reasonable trade for plenty of people, and we would rather you made the choice knowing
          what it involves.
        </p>

        <SectionHeading>Your three options</SectionHeading>
        <div className="mt-6 space-y-4">
          {[
            {
              name: "Move everything in one transfer",
              body: "The quickest way to be done with it. It also publishes your Orchard balance as a single figure, which is about the most identifying number you could put on a blockchain.",
            },
            {
              name: "Move it across in stages",
              body: "Each transfer publishes only what you send, so nobody sees your balance. Spread the transfers across days, keep Tor on, and make each one larger than your current Ironwood balance.",
            },
            {
              name: "Wait for the migration feature",
              body: "The best privacy for the least effort. It breaks your balance into standard-sized amounts that do not identify you and spaces the transfers out for you. This is what we recommend.",
            },
          ].map(({ name, body }) => (
            <div
              key={name}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-5"
            >
              <p className="font-extrabold tracking-tight text-[var(--color-text-primary)]">
                {name}
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        <SectionHeading>What becomes public</SectionHeading>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Value that crosses from Orchard into Ironwood is public. Every wallet works this way,
          because the turnstile publicly accounts for value moving between pools. What crosses is
          the amount you enter on the Send screen plus the network fee. Send 1 ZEC and the public
          record shows 1 ZEC. The rest of the funds you spend returns to Orchard as change, and
          none of that is disclosed. Check the pool breakdown after each transfer to confirm what
          moved.
        </p>
        <ul className="mt-5 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
          <li>
            <strong className="text-[var(--color-text-primary)]">Public:</strong> the amount you
            send in each transfer, plus the fee.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">Not public:</strong> who sent it,
            who received it, and every address involved. Those stay shielded.
          </li>
          <li>
            <strong className="text-[var(--color-text-primary)]">
              Not public unless you make it so:
            </strong>{" "}
            the fact that several separate transfers belong to the same wallet.
          </li>
        </ul>

        <SectionHeading>What you control</SectionHeading>

        <SubHeading>Pick amounts that do not describe you</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Plenty of people will send 10 ZEC. Almost nobody will send exactly 10.3467 ZEC. Specific
          amounts point back to you. Avoid any amount that already appears somewhere public: if you
          withdrew a specific sum from an exchange, sending that same sum across the pools connects
          the two actions.
        </p>

        <SubHeading>Turn on Tor protection and leave it on</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Tor in Zapp covers both syncing and sending, so switch it on once in the You tab under
          Privacy and leave it there. Without it, your wallet reveals its IP address to the server
          it connects to, and that server sees every transfer you make. Someone in that position
          does not have to work out which transfers are yours; they watched you submit all of them.
        </p>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          If Tor is not usable where you are, a trusted VPN is the next best option. A VPN moves
          the observer from your wallet&apos;s server to your VPN provider rather than removing the
          observer, so choose your provider accordingly.
        </p>

        <SubHeading>Spread your transfers out</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          If you make more than one transfer, timing matters. Transfers made minutes apart in a
          single sitting are easy to group together. Transfers spread across days are much harder
          to connect.
        </p>
        <ul className="mt-4 space-y-2 text-[var(--color-text-secondary)] leading-relaxed list-disc pl-5">
          <li>Leave days between transfers, not minutes.</li>
          <li>Vary the time of day. Sending every evening at nine is a pattern in itself.</li>
          <li>
            Do not pair a transfer with anything else that identifies you, such as a payment you
            have announced publicly.
          </li>
        </ul>

        <SubHeading>How Zapp chooses which funds to spend</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Zapp spends from Ironwood first. It only draws on Orchard when your Ironwood balance
          cannot cover the amount on its own. That matters if you are moving your balance in
          stages: send yourself two transfers of the same size and the second simply spends what
          the first moved. Your Orchard balance does not change and you have paid a fee for
          nothing. To keep drawing on Orchard, each transfer has to be larger than your current
          Ironwood balance.
        </p>

        <SectionHeading>Step by step</SectionHeading>
        <ol className="mt-6 space-y-5">
          {steps.map(({ title, body }, i) => (
            <li key={title} className="flex gap-4">
              <span
                className="shrink-0 w-8 h-8 bg-[var(--color-text-primary)] text-[var(--color-bg)] font-black text-sm flex items-center justify-center"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <p className="font-extrabold tracking-tight text-[var(--color-text-primary)]">
                  {title}
                </p>
                <p className="mt-1 text-[var(--color-text-secondary)] leading-relaxed">{body}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-8 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)]">
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Remember:</strong> if you are
            moving your balance in stages, repeat the steps with a larger amount each time and
            leave days in between.
          </p>
        </div>

        <SubHeading>How do I know whether my funds are in Orchard or Ironwood?</SubHeading>
        <p className="mt-3 text-[var(--color-text-secondary)] leading-relaxed">
          Tap Total balance on Home to see how much sits in each pool. When Orchard reads zero, or
          close to it, you are through.
        </p>

        <SectionHeading>The migration feature</SectionHeading>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          The migration that ships in a later update moves your funds in standard-sized pieces that
          do not identify you, spaces the transfers out for you, and keeps them off the connection
          your wallet syncs on. It is strictly better than doing this by hand, which is why we
          recommend waiting for it.
        </p>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          What remains before it ships is testing, fixing what the testing finds, and tuning. That
          is the part we are least willing to rush. A missed defect here is not a bug we can patch
          later; it is a permanent public disclosure.
        </p>

        <SectionHeading>Need help?</SectionHeading>
        <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
          Email us at{" "}
          <a href={`mailto:${email}`} className="text-primary hover:underline">
            {email}
          </a>{" "}
          and we will be glad to help. There is more on how Zapp handles your data in the{" "}
          <Link href="/privacy" className="text-primary hover:underline">
            app privacy policy
          </Link>
          , and general questions are answered in the{" "}
          <Link href="/faq" className="text-primary hover:underline">
            FAQ
          </Link>
          .
        </p>

        <div className="mt-10 p-4 bg-[var(--color-accent-soft)] border-l-4 border-[var(--color-accent)]">
          <p className="text-sm text-[var(--color-accent-text)] leading-relaxed">
            <strong>Important:</strong> nobody from JustZappIt will ever ask for your recovery
            phrase, and we cannot move, freeze, or recover your funds. This page is guidance about
            your own wallet, not financial advice.
          </p>
        </div>
      </div>
    </>
  );
}
