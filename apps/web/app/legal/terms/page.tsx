// SPDX-License-Identifier: AGPL-3.0-only
export const metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the JustZappIt website and the Zapp app.",
  alternates: { canonical: "/legal/terms" },
};

export default function TermsPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Terms of Use</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: July 6, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        These Terms of Use (&quot;Terms&quot;) govern your access to and use of the JustZappIt website (the
        &quot;Site&quot;) and the Zapp mobile app (the &quot;App&quot;), built by JustZappIt, an open, independent
        project. By using the Site or the App, you agree to these Terms, our{" "}
        <a href="/legal/acceptable-use" className="text-primary hover:underline">Acceptable Use Policy</a>, and our{" "}
        <a href="/legal/disclaimer" className="text-primary hover:underline">Disclaimer</a>.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">1. Acceptance of Terms</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        By accessing the Site or the App, you agree to these Terms and all applicable laws and regulations. If you do
        not agree with any part of these Terms, you must not use the Site or the App.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">2. Eligibility</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        You may use the Site and the App only if you can form a legally binding agreement and only where doing so is
        permitted by the laws of your jurisdiction. You are responsible for ensuring that your use of cryptocurrency
        and the App&apos;s features is lawful where you live.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">3. The Beta and Waitlist</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        The Android app is a free open beta on Google Play, so anyone can install it with no email or invite
        required. The iOS app is still in development. Only the iOS waitlist asks for an email; if you submit yours,
        you agree that we may email you product updates about Zapp. You can ask us to remove your email at any
        time, as described in our{" "}
        <a href="/legal/privacy" className="text-primary hover:underline">Website Privacy Policy</a>. Beta features may
        change, break, or be withdrawn without notice.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">4. Self-Custody and Your Responsibilities</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Zapp is non-custodial software: you alone control your recovery phrase, keys, and funds. We cannot access,
        move, freeze, or recover them. You are solely responsible for safeguarding your recovery phrase, verifying
        transaction details before sending, and the consequences of your transactions, which are generally
        irreversible.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">5. Third-Party Services</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Certain features depend on independent third-party protocols and services, including swaps via NEAR Intents
        and the offramp via the P2P.me protocol. Your use of those services is subject to their own terms, rates, and
        availability, and is at your own risk. We do not control and are not responsible for third-party services.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">6. Open-Source License</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        JustZappIt software is released under an open-source license. Your rights to use, copy, modify, and distribute
        the source code are governed by that license, which is available in our public repository and prevails over
        these Terms with respect to the code itself.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">7. No Warranty</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        The Site and the App are provided on an &quot;as is&quot; and &quot;as available&quot; basis.
        <strong> We make no warranties, express or implied, regarding their accuracy, reliability, or availability</strong>,
        and disclaim all warranties of merchantability, fitness for a particular purpose, and non-infringement.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">8. Limitation of Liability</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        In no event shall JustZappIt, its contributors, volunteers, or maintainers be liable for any damages
        (including, without limitation, direct, indirect, incidental, consequential, or punitive damages, loss of
        profits, loss of funds, or loss of data) arising out of your use of, or inability to use, the Site or the App.
        Your use is at your sole risk.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">9. Revisions</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        We may revise these Terms at any time without notice. By continuing to use the Site or the App, you agree to be
        bound by the then-current version of these Terms.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">10. Governing Law</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        JustZappIt is an open, community-driven project with no registered corporate entity. These Terms are not
        governed by the laws of any specific jurisdiction. Any claim or dispute arising from your use is subject to the
        laws of your local jurisdiction.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">11. Contact</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Questions about these Terms? Contact us at <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>
    </>
  );
}
