// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

export default function CommunityBlock() {
  return (
    <section className="bg-[var(--color-surface)] border-t border-[var(--color-border)] py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-4">
          Build the network with us
        </h2>
        <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto mb-10 leading-relaxed">
          The facilitator network grows through community contribution. Add your store, verify
          existing listings, or become a facilitator — no account required.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/add"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#d97411] text-white font-semibold px-7 py-3 rounded-lg transition-colors text-sm"
          >
            Add your store
          </Link>
          <Link
            href="/directory"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-bg)] hover:bg-[var(--color-border)] text-[var(--color-text-primary)] font-semibold px-7 py-3 rounded-lg border border-[var(--color-border)] transition-colors text-sm"
          >
            Explore the directory
          </Link>
        </div>

        <p className="mt-8 text-xs text-[var(--color-text-secondary)]">
          Open source · Community verified · No accounts required
        </p>
      </div>
    </section>
  );
}
