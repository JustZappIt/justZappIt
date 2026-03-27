// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useInView } from "@/lib/useInView";

interface RoadmapItem {
  phase: "Now" | "Next" | "Later";
  title: string;
  badge: "Live" | "Soon" | "In progress" | "Roadmap";
  body: string;
  badgeColor: string;
}

const items: RoadmapItem[] = [
  {
    phase: "Next",
    title: "In-chat ZEC sending with external wallet",
    badge: "Soon",
    badgeColor: "bg-green-100 text-green-700",
    body: "Private, encrypted conversations. Send ZEC to any contact directly inside the chat using an external wallet like Zodl. No KYC. Available on iOS and Android.",
  },
  {
    phase: "Now",
    title: "Physical crypto exchange directory",
    badge: "Live",
    badgeColor: "bg-green-100 text-green-700",
    body: "Community-driven map of verified physical stores that accept or exchange cryptocurrency.",
  },
  {
    phase: "Next",
    title: "Building the facilitator network",
    badge: "In progress",
    badgeColor: "bg-yellow-100 text-yellow-700",
    body: "Recruiting a community of people willing to facilitate ZEC-to-fiat conversions via QR codes. We want feedback on how the payment rails should work.",
  },
  {
    phase: "Later",
    title: "QR-code shop payments via fiat facilitator",
    badge: "Roadmap",
    badgeColor: "bg-purple-100 text-purple-700",
    body: "Pay at any shop in fiat, settled in ZEC. A nearby facilitator pays on your behalf and receives ZEC in return. No crypto infrastructure required at the point of sale.",
  },
];

export default function RoadmapSection() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[var(--color-bg)] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight animate-reveal-text">
            The network is expanding
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)] max-w-lg mx-auto animate-fade-up" style={{ animationDelay: "120ms" }}>
            Here is where JustZappIt is headed — honest about what is live today and what is
            being built.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col sm:flex-row gap-4 transition-none ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="sm:w-20 flex-shrink-0">
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                  {item.phase}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${item.badgeColor} ${
                      item.badge === "Live" ? "animate-pulse" : ""
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
