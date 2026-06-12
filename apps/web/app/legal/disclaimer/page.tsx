// SPDX-License-Identifier: AGPL-3.0-only
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Disclaimer | JustZappIt",
};

export default function DisclaimerPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Disclaimer</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: February 21, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        The JustZappIt project (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) provides a community-driven directory of physical stores that accept cryptocurrency.
        By using the JustZappIt website (the &quot;Site&quot;), you acknowledge and agree to the following:
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">1. Community-Submitted Information</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        All store listings, locations, operating hours, accepted cryptocurrencies, and other details provided on the Site are submitted and moderated by the community.
        <strong>We do not verify, endorse, or guarantee the accuracy, completeness, or reliability of any information found on the Site.</strong>
        Listings may be outdated, inaccurate, or entirely false.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">2. Use at Your Own Risk</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Your use of the Site and your reliance on any information provided is solely at your own risk. We strongly recommend that you independently verify a store&apos;s location, operating status, and accepted payment methods before visiting or attempting to transact.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Under no circumstances shall the JustZappIt project, its contributors, or maintainers have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">3. Not Financial Advice</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Nothing on the Site constitutes financial, investment, legal, or other professional advice. We do not endorse any specific cryptocurrency, digital asset, wallet, or exchange service. Cryptocurrency transactions carry inherent risks; you are solely responsible for your own financial decisions and the security of your funds.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">4. External Links</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        The Site contains links to external websites and resources provided by third parties (including store websites and social media profiles). These links are provided for your convenience only. We have no control over the contents of those sites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">5. Contact</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        If you spot inaccurate information, we encourage you to use the community &quot;Suggest Edit&quot; or &quot;Flag&quot; features on the store&apos;s panel. For other legal inquiries, you may contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>
    </>
  );
}
