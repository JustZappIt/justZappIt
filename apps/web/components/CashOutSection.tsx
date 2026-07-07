// SPDX-License-Identifier: AGPL-3.0-only
import Image from "next/image";
import CashOutHeading from "@/components/CashOutHeading";

const steps = [
  {
    label: "Step 01",
    title: "Scan or enter a UPI ID",
    body: "Point Zapp at any UPI QR code, or type a UPI ID and an amount. Works at a shop counter, for a friend, or for your own bank account.",
  },
  {
    label: "Step 02",
    title: "ZEC converts privately",
    body: "Zapp swaps your shielded ZEC through NEAR Intents into a fresh wallet created just for the order. No centralized exchange, no custodian, and nothing that links back to your balance or history.",
  },
  {
    label: "Step 03",
    title: "Rupees land in minutes",
    body: "A verified peer on the P2P.me protocol settles the payment over UPI, secured by on-chain escrow. Most orders complete in minutes.",
  },
];

export default function CashOutSection() {

  return (
    <section className="bg-[var(--color-bg)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">
            ZEC in the real world
          </p>
          <CashOutHeading />
          <p className="mt-4 text-[var(--color-text-secondary)] max-w-xl mx-auto">
            Pay any UPI, PIX, or QRIS code straight from shielded ZEC, with no exchange account
            and no identity checks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            {steps.map((step) => (
              <div key={step.label}>
                {/* Thick rule — orange as sharp graphic element */}
                <div className="h-[3px] w-full bg-[var(--color-text-primary)] mb-6" aria-hidden="true">
                  <div className="h-full w-1/3 bg-primary" />
                </div>
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-accent-text)] mb-2">
                  {step.label}
                </p>
                <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          {/* Real offramp screenshot framed with official device art */}
          <div className="hidden lg:block relative w-[300px]">
            <Image
              src="/screens/zapp-offramp-framed.png"
              alt="Zapp offramp screen converting USDC from shielded ZEC into Indian Rupees over UPI"
              width={900}
              height={1901}
              className="[filter:drop-shadow(0_24px_48px_rgba(15,14,12,0.25))]"
            />
          </div>
        </div>

        <div
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {["No KYC", "No exchange account", "Fresh wallet per order"].map((chip) => (
              <span
                key={chip}
                className="bg-[var(--color-chip)] text-[var(--color-text-secondary)] text-[11px] font-extrabold uppercase tracking-[0.1em] px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>
          <p className="text-sm text-[var(--color-text-subtle)]">
            Live in India over UPI today. Brazil (PIX), Indonesia (QRIS), Argentina, Mexico, and
            Venezuela are on the way.
          </p>
        </div>
      </div>
    </section>
  );
}
