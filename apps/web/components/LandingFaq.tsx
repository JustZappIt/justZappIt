// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

const faqs = [
  {
    question: "What is Zapp?",
    answer:
      "Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in. Messages travel directly between devices over Holepunch, with no servers in the middle. Payments are shielded Zcash: encrypted on-chain and invisible on the public ledger. The wallet is a direct fork of Zodl, the flagship Zcash wallet.",
  },
  {
    question: "How is Zapp different from WhatsApp, Telegram, or Signal?",
    answer:
      "All three need an account and route your traffic through their servers. Even when the content is encrypted, the record of who talks to whom is theirs to keep. Zapp has no servers and no accounts, so that record is never collected anywhere. And none of them carry private money: Zapp's payments are shielded Zcash, settled between you and the recipient.",
  },
  {
    question: "Do I need a phone number or an email address?",
    answer:
      "No. There is no sign-up at all. Your chat identity and your wallet both derive from one seed phrase generated on your device. Nobody, including us, learns who you are.",
  },
  {
    question: "Who can read my messages?",
    answer:
      "Only the people in the conversation. Messages are end-to-end encrypted and exchanged directly between devices. There is no Zapp server that could read, store, or hand over your conversations, because there is no Zapp server at all.",
  },
  {
    question: "Who holds my money?",
    answer:
      "You do. Zapp is non-custodial: your keys are generated and stored only on your device. We cannot move, freeze, or even see your funds. One recovery phrase restores both your wallet and your chat identity.",
  },
  {
    question: "How do I turn ZEC into cash?",
    answer:
      "Swap between ZEC and USDC in-app through NEAR Intents, or pay any UPI QR code in India directly from shielded ZEC: a verified peer on the P2P.me protocol settles the rupees, secured by on-chain escrow. No exchange account, no identity checks. Every order runs through a fresh wallet, so nothing links the payout back to your balance or history. More countries are on the way.",
  },
  {
    question: "What happens if I lose my phone?",
    answer:
      "Your money survives; your messages do not. The recovery phrase restores your wallet and your chat identity on a new device. Chat history lives only on the device it happened on, which is exactly what makes it private.",
  },
  {
    question: "Is Zapp free?",
    answer:
      "Yes. The app is free, with no ads and no subscriptions. You pay normal Zcash network fees when you transact, and the third-party protocols behind swaps and the offramp set their own rates.",
  },
];

export default function LandingFaq() {
  return (
    <section className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight">
            Frequently asked questions
          </h2>
          <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mt-6" aria-hidden="true">
            <div className="h-full w-1/3 bg-primary" />
          </div>
        </div>

        <div className="border-y border-[var(--color-border-strong)] divide-y divide-[var(--color-border)]">
          {faqs.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-base sm:text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent-text)] transition-colors">
                {item.question}
                <span
                  className="text-2xl font-black text-primary leading-none transition-transform duration-200 group-open:rotate-45 select-none"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 pr-10 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-secondary)]">
          More questions, including beta access, swaps, and recovery details, in the{" "}
          <Link href="/faq" className="text-primary font-semibold hover:underline">
            full FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
