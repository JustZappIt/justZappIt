// SPDX-License-Identifier: AGPL-3.0-only
import Link from "next/link";
import { supabase } from "@/lib/supabase";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Store Verification | JustZappIt",
  description: "Learn how JustZappIt's community verification system works, how to verify stores, and our anti-spam measures.",
};

export default async function VerificationPage() {
  // Fetch real stats from Supabase with error handling
  let totalStores = 0;
  let verifiedStores = 0;
  let pendingStores = 0;
  let flaggedStores = 0;

  try {
    const { count: totalCount } = await supabase
      .from('stores')
      .select('*', { count: 'exact', head: true });
    totalStores = totalCount ?? 0;

    const { count: verifiedCount } = await supabase
      .from('stores')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'community_verified');
    verifiedStores = verifiedCount ?? 0;

    const { count: pendingCount } = await supabase
      .from('stores')
      .select('*', { count: 'exact', head: true })
      .in('verification_status', ['unverified', 'seed_partial']);
    pendingStores = pendingCount ?? 0;

    const { count: flaggedCount } = await supabase
      .from('stores')
      .select('*', { count: 'exact', head: true })
      .eq('verification_status', 'flagged');
    flaggedStores = flaggedCount ?? 0;
  } catch {
    // Silently fail and use default values of 0
  }

  return (
    <>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[var(--color-text-primary)] mb-3">Store Verification Process</h1>
      <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-6">Last updated: February 28, 2026</p>
      {/* Thick rule — orange as sharp graphic element */}
      <div className="h-[3px] w-24 bg-[var(--color-text-primary)] mb-10" aria-hidden="true">
        <div className="h-full w-1/3 bg-primary" />
      </div>

      <p className="text-[var(--color-text-secondary)] leading-relaxed">
        JustZappIt uses a community-driven verification system to ensure the accuracy and reliability of store listings. Learn how our verification process works and how you can contribute to maintaining a trustworthy directory.
      </p>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">How Verification Works</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">Community-Based Verification</h3>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Our verification system relies on community members like you to confirm the existence and legitimacy of physical cryptocurrency exchanges. Here&apos;s how it works:
          </p>

          <ol className="list-decimal pl-5 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li><strong>Store Submission:</strong> Anyone can submit a new store listing with basic information</li>
            <li><strong>Community Confirmation:</strong> Users who have personally visited the store can confirm its existence</li>
            <li><strong>Verification Threshold:</strong> Stores need 3 confirmations to reach &quot;Community Verified&quot; status</li>
            <li><strong>Flagging System:</strong> Users can flag stores that are closed, incorrect, or don&apos;t accept crypto</li>
            <li><strong>Automatic Status Updates:</strong> Store status changes based on community feedback</li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Verification Badges</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
            <div className="w-12 h-12 bg-[var(--color-border-strong)] rounded-full mb-4 flex items-center justify-center text-[var(--color-text-primary)] font-bold">?</div>
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">Unverified</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              New store submissions with no community confirmations. Exercise caution when visiting unverified stores.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
            <div className="w-12 h-12 bg-[var(--color-accent-soft)] rounded-full mb-4 flex items-center justify-center text-[var(--color-accent-text)] font-bold">~</div>
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">Pending</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Stores with 1-2 community confirmations. Partially verified but not yet fully confirmed.
            </p>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
            <div className="w-12 h-12 bg-[var(--color-success-soft)] rounded-full mb-4 flex items-center justify-center text-[var(--color-success)] font-bold">✓</div>
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">Community Verified</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Stores with 3+ confirmations from community members. Highest level of trust in our system.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">How to Verify a Store</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">Step-by-Step Verification</h3>

          <ol className="list-decimal pl-5 space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
            <li>
              <strong>Visit the Store:</strong> Physically go to the listed location during business hours
            </li>
            <li>
              <strong>Confirm Services:</strong> Verify that the store actually accepts cryptocurrency for goods or services
            </li>
            <li>
              <strong>Check Details:</strong> Confirm that the address, phone number, and operating hours are accurate
            </li>
            <li>
              <strong>Use the Confirm Button:</strong> On the store&apos;s page, click the &quot;Confirm&quot; button to submit your verification
            </li>
            <li>
              <strong>Be Honest:</strong> Only confirm stores you&apos;ve personally verified. False confirmations harm the community.
            </li>
          </ol>
        </div>

        <div className="mt-6 p-4 bg-[var(--color-accent-soft)] border-l-4 border-[var(--color-accent)]">
          <p className="text-[var(--color-accent-text)] text-sm leading-relaxed">
            <strong>Important:</strong> Only confirm stores you have personally visited and verified. Multiple false confirmations from the same IP address will be automatically flagged and may result in temporary restrictions.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Flagging System</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">When to Flag a Store</h3>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Help maintain accuracy by flagging stores that have issues:
          </p>

          <ul className="space-y-2 text-[var(--color-text-secondary)] leading-relaxed">
            <li>• Store is permanently closed</li>
            <li>• Store no longer accepts cryptocurrency</li>
            <li>• Listed address or contact information is incorrect</li>
            <li>• Store is engaged in fraudulent or suspicious activities</li>
            <li>• Store listing is fake or malicious</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">Flag Thresholds</h3>
            <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm leading-relaxed">
              <li><strong>3 Flags:</strong> Store marked as &quot;Flagged&quot; - warning to users</li>
              <li><strong>5 Flags:</strong> Store marked as &quot;Closed&quot; - hidden from main listings</li>
              <li><strong>7+ Flags:</strong> Store removed from directory entirely</li>
            </ul>
          </div>

          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6">
            <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-2">Appeal Process</h3>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
              Store operators can appeal flagging decisions by providing evidence of their continued operation and crypto acceptance. Contact us for more information about the appeal process.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Anti-Spam Measures</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">Protecting Data Quality</h3>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            We implement several measures to prevent spam and maintain data quality:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">Technical Measures</h4>
              <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <li>• IP-based rate limiting</li>
                <li>• Cryptographic IP hashing (no raw IPs stored)</li>
                <li>• hCaptcha integration for bot prevention</li>
                <li>• Pattern detection for suspicious submissions</li>
                <li>• Automatic duplicate detection</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[var(--color-text-subtle)] mb-3">Community Measures</h4>
              <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                <li>• Community voting and flagging</li>
                <li>• User reputation system</li>
                <li>• Manual review of suspicious activity</li>
                <li>• Transparency reports</li>
                <li>• Community guidelines enforcement</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Store Operator Verification</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">For Store Owners</h3>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            If you operate a physical cryptocurrency exchange, you can claim your listing and provide verified information:
          </p>

          <ol className="list-decimal pl-5 space-y-3 text-[var(--color-text-secondary)] leading-relaxed">
            <li><strong>Claim Your Listing:</strong> Contact us to claim ownership of your store listing</li>
            <li><strong>Provide Documentation:</strong> Submit business registration and proof of crypto acceptance</li>
            <li><strong>Verified Badge:</strong> Receive a &quot;Operator Verified&quot; badge on your listing</li>
            <li><strong>Update Information:</strong> Keep your hours, contact info, and accepted cryptocurrencies current</li>
            <li><strong>Respond to Feedback:</strong> Address community concerns and flagging issues</li>
          </ol>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Transparency Report</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] p-6 mt-6">
          <h3 className="text-lg font-extrabold tracking-tight text-[var(--color-text-primary)] mb-4">Community Statistics</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-black tracking-tight tabular-nums text-primary">{totalStores}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mt-2">Total Stores</div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight tabular-nums text-[var(--color-text-primary)]">{verifiedStores}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mt-2">Verified</div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight tabular-nums text-[var(--color-text-primary)]">{pendingStores}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mt-2">Pending</div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight tabular-nums text-[var(--color-text-primary)]">{flaggedStores}</div>
              <div className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[var(--color-text-subtle)] mt-2">Flagged</div>
            </div>
          </div>

          <p className="text-[var(--color-text-secondary)] text-sm mt-6">
            Statistics updated monthly. Last update: February 28, 2026
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-black tracking-tight text-[var(--color-text-primary)]">Get Involved</h2>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] border-t-2 border-t-[var(--color-text-primary)] p-6 mt-6">
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Help us build the most trusted directory of physical cryptocurrency exchanges:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/add"
              className="block text-center p-4 bg-[var(--color-bg)] border border-[var(--color-border-strong)] hover:border-primary transition-colors"
            >
              <div className="text-[var(--color-text-primary)] font-extrabold tracking-tight">Add Store</div>
              <div className="text-[var(--color-text-secondary)] text-sm mt-1">Submit new locations</div>
            </Link>

            <Link
              href="/faq"
              className="block text-center p-4 bg-[var(--color-bg)] border border-[var(--color-border-strong)] hover:border-primary transition-colors"
            >
              <div className="text-[var(--color-text-primary)] font-extrabold tracking-tight">Learn More</div>
              <div className="text-[var(--color-text-secondary)] text-sm mt-1">Read our FAQ</div>
            </Link>

            <a
              href="mailto:hello@justzappit.xyz"
              className="block text-center p-4 bg-[var(--color-bg)] border border-[var(--color-border-strong)] hover:border-primary transition-colors"
            >
              <div className="text-[var(--color-text-primary)] font-extrabold tracking-tight">Contact Us</div>
              <div className="text-[var(--color-text-secondary)] text-sm mt-1">Report issues</div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
