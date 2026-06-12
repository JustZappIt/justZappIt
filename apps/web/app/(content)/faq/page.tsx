// SPDX-License-Identifier: AGPL-3.0-only
import type { ReactNode } from "react";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Frequently Asked Questions — JustZappIt",
  description: "Find answers to common questions about Zapp — the non-custodial Zcash wallet with built-in encrypted messaging — the Android beta, payments, and privacy.",
};

type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type FaqSection = {
  category: string;
  questions: FaqItem[];
};

const faqData: FaqSection[] = [
  {
    category: "general",
    questions: [
      {
        id: "general-1",
        question: "What is JustZappIt?",
        answer: "JustZappIt is the project behind Zapp, a non-custodial Zcash (ZEC) wallet with private, end-to-end encrypted messaging built in. We believe private money and private conversations belong in the same app."
      },
      {
        id: "general-2",
        question: "What is Zapp?",
        answer: "Zapp is a mobile app that combines a full Zcash wallet with peer-to-peer encrypted chat. There is no sign-up and no phone number — your chat identity is derived from your wallet. You can message contacts, share photos and (optionally) your location in chat, swap between ZEC and USDC, and cash out via UPI in India (beta). In-chat payments between contacts are coming soon."
      },
      {
        id: "general-3",
        question: "Is Zapp free to use?",
        answer: "Yes. The app is free and there is no account to create. You pay the normal Zcash network fees when sending transactions, and the third-party services behind swaps and cash-out apply their own rates and fees."
      },
      {
        id: "general-4",
        question: "Who is behind JustZappIt?",
        answer: "JustZappIt is built by a small independent team. The best way to reach us is by email — see the contact section at the bottom of this page."
      }
    ]
  },
  {
    category: "app",
    questions: [
      {
        id: "app-1",
        question: "Is Zapp available now?",
        answer: (
          <>
            Zapp for Android is live in an invite-only beta through Google Play internal testing. The iOS app is in development. You can request an Android invite or join the iOS waitlist on the <a href="/app" className="text-primary hover:underline">app page</a>.
          </>
        )
      },
      {
        id: "app-2",
        question: "How do I join the Android beta?",
        answer: (
          <>
            Enter your email on the <a href="/app" className="text-primary hover:underline">app page</a> — use the same email address as your Google Play account. We send invites with a Google Play opt-in link in batches, and this phase of the beta is limited to 100 testers.
          </>
        )
      },
      {
        id: "app-3",
        question: "When is the iOS app coming?",
        answer: (
          <>
            The iOS app is in development, but we haven&apos;t committed to a release date yet. Join the waitlist on the <a href="/app" className="text-primary hover:underline">app page</a> and we&apos;ll email you when it&apos;s ready.
          </>
        )
      },
      {
        id: "app-4",
        question: "Do I need a phone number to sign up?",
        answer: "No — there is no sign-up at all. Zapp asks for no phone number, email, or username. Your chat identity is derived from your wallet, entirely on your device."
      },
      {
        id: "app-5",
        question: "Can I pay my contacts inside a chat?",
        answer: "Not yet — in-chat payments between contacts are coming soon. Today Zapp is a full Zcash wallet (you can send and receive ZEC to any address) and a private messenger; we are connecting the two so a payment can happen without leaving the conversation."
      },
      {
        id: "app-6",
        question: "What is the QR-code shop payment feature?",
        answer: "This is a planned roadmap feature — it is not available in the current version of the app. The design is: you generate a QR code at a shop representing a payment amount. A nearby facilitator (a person in the JustZappIt network willing to pay in fiat on your behalf) scans the code and completes the fiat payment to the shop. You then settle with the facilitator in ZEC inside the conversation thread. No crypto infrastructure is required at the point of sale."
      }
    ]
  },
  {
    category: "payments",
    questions: [
      {
        id: "payments-1",
        question: "What is Zcash (ZEC)?",
        answer: "Zcash is a cryptocurrency built for privacy. Unlike Bitcoin, where every transaction is fully public, Zcash supports shielded transactions that keep the sender, recipient, and amount confidential on the blockchain. ZEC is the native currency of the Zcash network."
      },
      {
        id: "payments-2",
        question: "How do shielded transactions work?",
        answer: "Shielded transactions use zero-knowledge proofs: the network can verify a transaction is valid without the sender, recipient, or amount ever appearing on the public ledger. Zapp keeps your funds shielded by default, so your balance and payment history are not exposed on-chain."
      },
      {
        id: "payments-3",
        question: "Can I swap ZEC for other assets?",
        answer: "Yes. Zapp includes a built-in swap between ZEC and USDC. Swaps are quoted and executed by a third-party service, and you see the rate before you confirm."
      },
      {
        id: "payments-4",
        question: "Can I cash out to fiat?",
        answer: "Zapp includes a cash-out feature, currently in beta and available in India, that pays out Indian Rupees directly to a UPI ID. Orders are executed by a third-party peer-to-peer protocol."
      }
    ]
  },
  {
    category: "privacy",
    questions: [
      {
        id: "privacy-1",
        question: "Does the app track me or collect analytics?",
        answer: (
          <>
            No. The app contains no analytics, no advertising, and no tracking SDKs. We don&apos;t collect usage data, and we never sell data — there is essentially nothing to sell. The full details are in the <a href="/privacy" className="text-primary hover:underline">Zapp app privacy policy</a>; the website has its own separate <a href="/legal/privacy" className="text-primary hover:underline">privacy policy</a>.
          </>
        )
      },
      {
        id: "privacy-2",
        question: "Are my messages private?",
        answer: "Yes. Messages are end-to-end encrypted on your device and delivered over a peer-to-peer network — we cannot read them. Photos you send and the optional one-tap location share are encrypted the same way, and your location is only ever shared when you choose to send it."
      },
      {
        id: "privacy-3",
        question: "Who holds my funds?",
        answer: "You do. Zapp is non-custodial: your recovery phrase and private keys are generated and stored only on your device. We never have access to your funds and cannot move or freeze them."
      },
      {
        id: "privacy-4",
        question: "What happens if I lose my phone?",
        answer: "Your funds are recoverable with your recovery phrase — write it down when you set up the wallet and keep it somewhere safe. Restoring from the phrase recovers your wallet and your chat identity, which is derived from it. Chat history is stored only on the device, so past messages do not come back."
      },
      {
        id: "privacy-5",
        question: "How do I avoid scams?",
        answer: "Never share your recovery phrase with anyone — nobody from JustZappIt will ever ask for it. Double-check addresses before sending, be wary of deals that seem too good to be true, and remember that cryptocurrency transactions cannot be reversed."
      }
    ]
  },
  {
    category: "legal",
    questions: [
      {
        id: "legal-1",
        question: "Is cryptocurrency legal in my country?",
        answer: "Cryptocurrency regulations vary by country and change frequently. While crypto is legal in most countries, some have restrictions or bans. Research your local laws and consult with legal professionals if needed."
      },
      {
        id: "legal-2",
        question: "Do I need to pay taxes on crypto transactions?",
        answer: "In most countries, cryptocurrency transactions are taxable events. Consult with a tax professional familiar with cryptocurrency regulations in your jurisdiction. Keep detailed records of all transactions for tax purposes."
      },
      {
        id: "legal-3",
        question: "What are the risks of cryptocurrency?",
        answer: "Cryptocurrency risks include price volatility, security threats, regulatory changes, and potential scams. Only invest what you can afford to lose, do your own research, and consider consulting with financial advisors."
      },
      {
        id: "legal-4",
        question: "Is JustZappIt responsible for my transactions?",
        answer: "No. Zapp is non-custodial software — you control your keys and your transactions. Swaps and cash-out orders are executed by third-party services. The software is provided as-is, and we disclaim all liability for any losses or damages."
      }
    ]
  }
];

export default function FAQPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  const categories = {
    general: "General Questions",
    app: "The Zapp App",
    payments: "Zcash & Payments",
    privacy: "Privacy & Security",
    legal: "Legal & Regulatory"
  };

  return (
    <>
      <h1 className="text-[var(--color-text-primary)]">Frequently Asked Questions</h1>
      <p className="text-[var(--color-text-secondary)] mb-8">Last updated: June 11, 2026</p>

      <p>
        Find answers to common questions about Zapp, the Android beta, Zcash, and privacy. Can&apos;t find what you&apos;re looking for? <a href={`mailto:${email}`} className="text-primary hover:underline">Contact us</a> and we&apos;ll be happy to help.
      </p>

      {Object.entries(categories).map(([categoryKey, categoryTitle]) => (
        <section key={categoryKey} className="mt-12">
          <h2 className="text-[var(--color-text-primary)]">{categoryTitle}</h2>

          <div className="space-y-6 mt-6">
            {faqData
              .find(section => section.category === categoryKey)
              ?.questions.map((item) => (
                <div key={item.id} className="border-b border-[var(--color-border)] pb-6 last:border-b-0">
                  <h3 className="text-[var(--color-text-primary)] font-semibold mb-3">
                    {item.question}
                  </h3>
                  <div className="text-[var(--color-text-secondary)] leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}

      <section className="mt-12">
        <h2 className="text-[var(--color-text-primary)]">Still Have Questions?</h2>
        <p className="text-[var(--color-text-secondary)] mt-4">
          If you couldn&apos;t find the answer you&apos;re looking for, we&apos;re here to help:
        </p>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 mt-6">
          <ul className="space-y-3">
            <li>
              <strong>Email us:</strong> <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>
            </li>
            <li>
              <strong>Join the Android beta:</strong> Enter your email on the <a href="/app" className="text-primary hover:underline">app page</a> — invites go out in batches
            </li>
          </ul>
        </div>

        <div className="mt-6 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg">
          <p className="text-sm text-[var(--color-text-secondary)]">
            <strong>Important:</strong> The information provided in this FAQ is for informational purposes only and does not constitute legal, financial, or professional advice. Always consult with qualified professionals for your specific situation.
          </p>
        </div>
      </section>
    </>
  );
}
