// SPDX-License-Identifier: AGPL-3.0-only
export const metadata = {
  title: "Acceptable Use Policy",
  description:
    "The rules for using the JustZappIt website and the Zapp app: no unlawful, abusive, or automated misuse.",
  alternates: { canonical: "/legal/acceptable-use" },
};

export default function AcceptableUsePage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Acceptable Use Policy</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: July 6, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        This Acceptable Use Policy sets out the rules for using the JustZappIt website (the &quot;Site&quot;) and the
        Zapp app (the &quot;App&quot;). It works alongside our{" "}
        <a href="/legal/terms" className="text-primary hover:underline">Terms of Use</a>. By using the Site or the App,
        you agree to follow it.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">1. Lawful Use Only</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        You must use the Site and the App only for lawful purposes and in compliance with all applicable laws and
        regulations in your jurisdiction, including those governing cryptocurrency, payments, sanctions, and taxation.
        You are responsible for determining whether your use is legal where you live.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">2. Prohibited Activities</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        You agree not to:
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
        <li>Use the Site or App for any illegal activity, including fraud, money laundering, terrorist financing, or evading sanctions.</li>
        <li>Send unlawful, harassing, abusive, hateful, or threatening content, or content that infringes the rights of others, to any other person through the App.</li>
        <li>Attempt to gain unauthorized access to, disrupt, or interfere with the Site, the App, the peer-to-peer network, or the infrastructure of any third-party service we rely on.</li>
        <li>Probe, scan, or test the vulnerability of our systems, or breach any security or authentication measures, except through a responsible disclosure to us.</li>
        <li>Reverse the intended operation of privacy or security features to harm others.</li>
      </ul>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">3. No Automated Abuse</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Do not use bots, scripts, scrapers, or other automated means to submit forms, join the waitlist repeatedly, or
        otherwise circumvent rate limits, spam protection, or the intended use of the Site.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">4. Self-Custody Reminder</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is non-custodial. You control your keys and your transactions, and they are generally irreversible. We
        cannot moderate, reverse, or recover peer-to-peer messages or payments between users, and we do not have access
        to your funds or conversations. Use good judgment: verify who you are transacting with, and never share your
        recovery phrase with anyone.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">5. Enforcement</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Where we are technically able, we may restrict or block access to the Site or its forms for anyone who violates
        this policy, for example by rate-limiting or blocking abusive traffic. Because the App is non-custodial and
        peer-to-peer, our ability to intervene in activity within the App is limited by design.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">6. Reporting Abuse</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        To report abuse of the Site, a security vulnerability, or a legal concern, contact us at{" "}
        <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>
    </>
  );
}
