// SPDX-License-Identifier: AGPL-3.0-only
export const metadata = {
  title: "Disclaimer",
  description:
    "Important disclaimers about Zapp: non-custodial software, beta status, cryptocurrency risk, third-party swap and offramp services, and no financial advice.",
  alternates: { canonical: "/legal/disclaimer" },
};

export default function DisclaimerPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Disclaimer</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: July 6, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        JustZappIt (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) builds Zapp, a non-custodial, peer-to-peer
        encrypted messenger with a shielded Zcash wallet built in. By using the JustZappIt website (the &quot;Site&quot;)
        or the Zapp app (the &quot;App&quot;), you acknowledge and agree to the following.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">1. Non-Custodial Software</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is self-custody software. Your recovery phrase and private keys are generated and stored only on your
        device. <strong>We never hold, control, or have access to your funds, and we cannot move, freeze, reverse, or
        recover them on your behalf.</strong> You are solely responsible for safeguarding your recovery phrase. If you
        lose it, your funds may be permanently inaccessible, and we cannot help you restore them.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">2. Beta Software, Provided As Is</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is early-stage software currently offered as an open beta. It is provided on an &quot;as is&quot;
        and &quot;as available&quot; basis, without warranties of any kind. It may contain bugs, may change without
        notice, and may be unavailable at times. Use it at your own risk, and do not store more value in it than you
        are prepared to lose.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">3. Cryptocurrency Risk</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Cryptocurrencies, including Zcash (ZEC), are volatile and carry significant risk. Transactions are generally
        irreversible. You are solely responsible for verifying recipient addresses, understanding the assets you hold,
        and complying with the laws and tax obligations of your jurisdiction. Cryptocurrency may be restricted or
        regulated where you live.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">4. Third-Party Services</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Some features rely on independent third-party protocols and services, including but not limited to swaps via
        NEAR Intents and the no-KYC offramp via the P2P.me protocol. These services are operated by third parties,
        apply their own rates, fees, availability, and terms, and are outside our control. We do not guarantee their
        performance and accept no responsibility for any loss or damage arising from their use.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">5. Not Financial or Legal Advice</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Nothing on the Site or in the App constitutes financial, investment, legal, tax, or other professional advice.
        We do not endorse any specific cryptocurrency, asset, or service. You are solely responsible for your own
        decisions and for the security of your funds. Consult a qualified professional for your specific situation.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">6. Limitation of Liability</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        To the fullest extent permitted by law, JustZappIt, its contributors, and maintainers shall have no liability
        for any loss or damage of any kind arising from your use of, or inability to use, the Site or the App, or from
        your reliance on any information provided.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">7. Contact</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        For legal inquiries, contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>
    </>
  );
}
