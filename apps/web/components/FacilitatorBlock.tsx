// SPDX-License-Identifier: AGPL-3.0-only
import WaitlistForm from "@/components/WaitlistForm";
import FacilitatorForm from "@/components/FacilitatorForm";

export default function FacilitatorBlock() {
  return (
    <section
      id="become-a-facilitator"
      className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
            Express interest in this feature
          </h2>
          <p className="mt-3 text-[var(--color-text-secondary)] max-w-lg mx-auto text-sm">
            We will let you know when this feature launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-8 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
              I Want to Pay at Shops
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] -mt-3">
              Spend your ZEC at any shop. A facilitator converts your crypto
              to fiat instantly at the point of sale.
            </p>
            <WaitlistForm source="facilitator-block" />
          </div>

          <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl p-8 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
              I Want to Become a Facilitator
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] -mt-3">
              Earn fees by helping users pay at shops. Convert their ZEC to
              fiat using your existing payment apps.
            </p>
            <FacilitatorForm source="homepage" />
          </div>
        </div>
      </div>
    </section>
  );
}
