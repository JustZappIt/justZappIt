// SPDX-License-Identifier: AGPL-3.0-only
export const metadata = {
  title: "Privacy Policy",
  description:
    "How the JustZappIt website handles data: the beta email you give us, why we hold it, and the privacy-friendly services we use. No ads, no tracking.",
  alternates: { canonical: "/legal/privacy" },
};

export default function PrivacyPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Website Privacy Policy</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: July 6, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        This Privacy Policy covers the JustZappIt <strong>website</strong> at justzappit.xyz (the &quot;Site&quot;),
        published by JustZappIt (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). It explains what the website collects,
        why, and who we share it with. The Zapp mobile app is covered by its own, separate{" "}
        <a href="/privacy" className="text-primary hover:underline">app privacy policy</a>.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        The short version: the Site has no accounts and no advertising. The only personal information we collect
        is the email address you choose to give us to join the iOS waitlist.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">1. Information We Collect</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        <strong>Your email address.</strong> If you submit your email to join the iOS waitlist, we store that email
        so we can notify you when the iOS app is ready and send occasional product updates. We also record which
        form you used so we send the right message. Providing your email is entirely optional; the rest of the Site
        works without it. The Android app is a public beta on Google Play and needs no email to install.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        <strong>A hashed IP address, briefly.</strong> When you submit the form, we process your IP address only to
        rate-limit submissions and block spam. The IP is immediately hashed with a secret salt; the raw IP address is
        never written to our database, and we cannot reverse the hash to identify you.
      </p>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        We do not require accounts, and we do not ask for your name, phone number, or any other personal details.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">2. How We Use Your Email</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        We use your email address solely to notify you when the iOS app is ready and to send occasional updates about Zapp. We do not use it
        for third-party advertising, and we never sell, rent, or trade it. You can ask us to delete your email at any
        time by emailing <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">3. Service Providers</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        We use a small set of third-party providers to run the Site. Each processes data under its own privacy policy:
      </p>
      <ul className="mt-4 list-disc pl-5 space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
        <li>
          <strong>Supabase:</strong> hosts the database where your waitlist email is stored.
        </li>
        <li>
          <strong>Resend:</strong> delivers the waitlist and update emails we send to you.
        </li>
        <li>
          <strong>hCaptcha:</strong> protects the signup form from bots and may collect device and browser
          information to tell humans from automated traffic, subject to the{" "}
          <a href="https://www.hcaptcha.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">hCaptcha Privacy Policy</a>.
        </li>
        <li>
          <strong>Vercel &amp; Cloudflare:</strong> host and serve the Site. We use Vercel Analytics, which is
          privacy-friendly and cookieless: it does not use tracking cookies, does not collect personally identifiable
          information, and does not follow you across other websites.
        </li>
        <li>
          <strong>Google Search Console:</strong> reports how the Site performs in Google Search using aggregated,
          non-identifying data.
        </li>
      </ul>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">4. Cookies &amp; Advertising</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        <strong>This Site shows no advertising and uses no advertising or tracking cookies.</strong> We do not use
        Google AdSense, Google Analytics, or any ad network. The Site may use minimal functional local storage to
        remember basic preferences, such as dismissing a banner. Third-party providers such as hCaptcha may set their
        own cookies as described in their policies.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">5. Data Sharing and Retention</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        We do not sell, rent, or trade your information. We share it only with the service providers listed above, and
        only to the extent needed to operate the Site. We keep your email for as long as the beta and waitlist are
        active, or until you ask us to delete it.
      </p>

      <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)] mt-12">6. Contact Us</h2>
      <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
        Questions about this Privacy Policy, or want your email removed? Contact us at{" "}
        <a href={`mailto:${email}`} className="text-primary hover:underline">{email}</a>.
      </p>
    </>
  );
}
