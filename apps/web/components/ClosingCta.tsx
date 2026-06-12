// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import Link from "next/link";
import { useInView } from "@/lib/useInView";

export default function ClosingCta() {
  const { ref, inView } = useInView({ threshold: 0.3 });

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="bg-[var(--color-text-primary)] py-24">
      <div
        className={`max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${
          inView ? "animate-fade-up" : "opacity-0"
        }`}
      >
        <p className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
          Android beta live
        </p>

        <h2 className="text-4xl sm:text-5xl font-black text-[var(--color-bg)] tracking-tight leading-[1.05] mb-6">
          Your messages. Your money.{" "}
          <span className="text-primary">Encrypted.</span>
        </h2>

        {/* Thick rule — inverted for the dark band */}
        <div className="h-[3px] w-24 mx-auto mb-8 bg-[var(--color-bg)]" aria-hidden="true">
          <div className="h-full w-1/3 bg-primary" />
        </div>

        <p className="text-lg text-[var(--color-bg)] opacity-75 max-w-xl mx-auto leading-relaxed mb-10">
          The beta is free and invite-only on Google Play. Leave your email and we&apos;ll send
          you an invite. iOS is on the way.
        </p>

        <Link
          href="/app"
          className="inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-all duration-200 text-[15px] hover:-translate-y-0.5"
        >
          Get the Android beta
        </Link>

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
