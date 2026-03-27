// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";

export default function AppHero() {
  return (
    <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
          Available on iOS and Android
        </p>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight mb-4">
          Private messages.{" "}
          <span className="text-primary">Real money.</span>
        </h1>

        <p className="text-xl text-[var(--color-text-secondary)] mb-3 max-w-2xl mx-auto leading-relaxed">
          Private, encrypted messaging — with ZEC payments coming soon.
        </p>

        <p className="text-base text-[var(--color-text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed">
          JustZappIt is a private messaging app for iOS and Android. In-chat Zcash (ZEC) sending is
          coming — you'll use an external wallet like Zodl to send ZEC to contacts directly in conversation.
          No KYC. No middlemen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#d97411] text-white font-semibold px-8 py-3 rounded-lg transition-colors text-base"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
          </Link>
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-[var(--color-bg)] hover:bg-[var(--color-border)] text-[var(--color-text-primary)] font-semibold px-8 py-3 rounded-lg border border-[var(--color-border)] transition-colors text-base"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
              <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
            </svg>
            Get it on Google Play
          </Link>
        </div>

        <p className="text-sm text-[var(--color-text-secondary)]">
          Already using the store directory?{" "}
          <Link href="/directory" className="text-primary hover:underline font-medium">
            Browse facilitators →
          </Link>
        </p>
      </div>
    </section>
  );
}
