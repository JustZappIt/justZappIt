// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useSearchParams } from "next/navigation";
import { decodeInvitePayload, formatZec, playStoreUrlWithInvite } from "@/lib/invite";
import { PLAY_STORE_URL } from "@/lib/links";

export default function InviteClaim() {
  const encoded = useSearchParams().get("d");
  const invite = decodeInvitePayload(encoded);
  const installUrl = (encoded && playStoreUrlWithInvite(PLAY_STORE_URL, encoded)) ?? PLAY_STORE_URL;
  const expired = invite?.expiresAt != null && Date.now() > invite.expiresAt;
  const sender = invite?.senderName;

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <section>
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Zapp invite</p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-text-primary)] leading-tight tracking-tight">
          {sender ? `${sender} sent you Zcash` : "You've been sent Zcash"}
        </h1>
      </section>

      {invite === null ? (
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
            This invite link is incomplete
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Links sometimes get cut short when they are forwarded. Ask the sender to share it again,
            or install Zapp and paste the full link into{" "}
            <b className="text-[var(--color-text-primary)]">Got an invite link? Paste it</b> on the
            Send screen.
          </p>
        </section>
      ) : (
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <p className="text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
            {invite.zatoshi === null ? "A payment" : formatZec(invite.zatoshi)}
          </p>
          {invite.note && (
            <p className="text-sm text-[var(--color-text-secondary)] mt-2 break-words">
              {invite.note}
            </p>
          )}
          {expired && (
            <p className="text-sm font-bold text-[var(--color-accent-text)] bg-[var(--color-accent-soft)] px-3 py-2 mt-4">
              This invite has expired. Ask {sender ?? "the sender"} for a new link.
            </p>
          )}
        </section>
      )}

      <section className="space-y-3">
        <a
          href={installUrl}
          className="flex items-center justify-center gap-2.5 bg-primary hover:bg-[#d97411] text-white font-extrabold tracking-wide px-8 h-[52px] transition-colors duration-200 text-[15px]"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M3.18 23.76c.3.17.64.22.97.15l12.5-7.21-2.61-2.62-10.86 9.68zM.44 1.06C.17 1.38 0 1.84 0 2.44v19.12c0 .6.17 1.06.44 1.38l.07.07 10.7-10.7v-.26L.51.99l-.07.07zM20.13 10.3l-2.66-1.54-2.96 2.96 2.96 2.96 2.67-1.54c.76-.44.76-1.4-.01-1.84zM3.18.24L15.68 7.4 13.07 10 2.21.36A1.18 1.18 0 013.18.24z" />
          </svg>
          Get Zapp on Google Play
        </a>
        {encoded && (
          <a
            href={`zapp://invite?d=${encoded}`}
            className="block text-center text-sm font-bold text-[var(--color-accent-text)] hover:text-primary py-3"
          >
            Already have Zapp? Open it here
          </a>
        )}
      </section>

      <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-subtle)] mb-3">
          How it works
        </p>
        <ol className="list-decimal pl-5 space-y-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
          <li>Install Zapp and set up your wallet.</li>
          <li>
            Zapp opens the claim for you. If it doesn&apos;t, copy this page&apos;s address and use{" "}
            <b className="text-[var(--color-text-primary)]">Got an invite link? Paste it</b> on the
            Send screen.
          </li>
          <li>
            {sender ?? "The sender"} approves in chat — that&apos;s when the ZEC lands in your
            wallet.
          </li>
        </ol>
      </section>
    </div>
  );
}
