// SPDX-License-Identifier: AGPL-3.0-only

const features = [
  {
    index: "01",
    title: "Messaging without middlemen",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-none stroke-current stroke-2"
        aria-hidden="true"
      >
        <path
          d="M4 6.5A2.5 2.5 0 016.5 4h11A2.5 2.5 0 0120 6.5v8a2.5 2.5 0 01-2.5 2.5H12l-4 3.5V17H6.5A2.5 2.5 0 014 14.5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    paragraphs: [
      "Every message is end-to-end encrypted and travels directly between devices over Holepunch, the peer-to-peer stack behind Keet. There is no messaging server to breach, subpoena, or shut down.",
    ],
  },
  {
    index: "02",
    title: "Money that moves like a message",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-none stroke-current stroke-2"
        aria-hidden="true"
      >
        <path d="M4 12l16-8-6 16-2-6-6-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    paragraphs: [
      "The shielded Zcash wallet lives inside every conversation. Tap the payment icon, enter an amount, send. Paying a friend feels like sending a text.",
    ],
  },
  {
    index: "03",
    title: "A built-in offramp",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 fill-none stroke-current stroke-2"
        aria-hidden="true"
      >
        <rect x="3" y="6" width="18" height="12" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M6.5 9.5v.01M17.5 14.5v.01" strokeLinecap="round" />
      </svg>
    ),
    paragraphs: [
      "Swap between ZEC and USDC in-app through NEAR Intents, or turn ZEC into local currency with no exchange account and no identity checks, settled peer-to-peer through the P2P.me protocol.",
      "Live in India, Brazil, and Indonesia today, with more countries on the way.",
    ],
  },
];

export default function FeatureBlock() {
  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
            What&apos;s inside
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight">
            Private money. Private messages. Local rails.
          </h2>
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            A messenger and a wallet in one app, with no compromise on your privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.index}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-11 h-11 bg-[var(--color-accent-soft)] text-[var(--color-accent-text)] flex items-center justify-center">
                  {feature.icon}
                </div>
                <p className="text-[11px] font-extrabold tracking-[0.2em] text-[var(--color-text-subtle)]">
                  {feature.index}
                </p>
              </div>
              <h3 className="text-lg font-extrabold text-[var(--color-text-primary)] tracking-tight mb-3">
                {feature.title}
              </h3>
              {feature.paragraphs.map((text, i) => (
                <p
                  key={i}
                  className={`text-[var(--color-text-secondary)] text-sm leading-relaxed ${i > 0 ? "mt-3" : ""}`}
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
