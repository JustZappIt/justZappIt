// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";
import { PLAY_STORE_URL } from "@/lib/links";

export default function ClosingCta() {

  return (
    <section className="bg-[var(--color-text-primary)] py-24">
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          Open beta on Android
        </p>

        <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-bg)] tracking-tight leading-[1.05] mb-6">
          Your money and your messages
          <br />
          <span className="text-primary">Encrypted.</span>
        </h2>

        {/* Thick rule — inverted for the dark band */}
        <div className="h-[3px] w-24 mx-auto mb-8 bg-[var(--color-bg)]" aria-hidden="true">
          <div className="h-full w-1/3 bg-primary" />
        </div>

        <p className="text-lg text-[var(--color-bg)] opacity-75 max-w-xl mx-auto leading-relaxed mb-10">
          No server to breach. No account to mine. No custodian to trust. The beta is free and
          open on Google Play.
        </p>

        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-colors duration-200 text-[15px]"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
          </svg>
          Download on Google Play
        </a>

        <p className="mt-6 text-sm text-[var(--color-bg)] opacity-60">
          Questions first?{" "}
          <Link href="/faq" className="underline underline-offset-4 hover:no-underline">
            Read the FAQ
          </Link>
        </p>
      </div>
    </section>
  );
}
