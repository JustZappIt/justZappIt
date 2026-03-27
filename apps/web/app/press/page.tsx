// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Press & Media Kit",
  description:
    "JustZappIt media resources — approved boilerplate, brand assets, app screenshots, and key facts for journalists and crypto media.",
  alternates: { canonical: "/press" },
};

async function getStats() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";
  try {
    const res = await fetch(`${baseUrl}/api/stats`, { next: { revalidate: 300 } });
    if (!res.ok) return null;
    return res.json() as Promise<{ stores: number; countries: number; cities: number }>;
  } catch {
    return null;
  }
}

export default async function PressPage() {
  const stats = await getStats();
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-2">
          Press & Media Kit
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Everything you need to cover JustZappIt. Use these assets freely with attribution.
        </p>
      </div>

      {/* Live stats */}
      {stats && (
        <section>
          <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">Live statistics</h2>
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: stats.stores, label: "Facilitators listed" },
              { value: stats.countries, label: "Countries" },
              { value: stats.cities, label: "Cities" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-4 text-center"
              >
                <p className="text-3xl font-extrabold text-primary">{value}</p>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-medium">{label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Approved boilerplate */}
      <section>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">
          Approved boilerplate
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-3">
          Use this text verbatim in articles, listings, and directories.
        </p>
        <blockquote className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-sm text-[var(--color-text-secondary)] leading-relaxed italic">
          JustZappIt (justzappit.xyz) is a private messaging application for iOS and Android
          with in-chat Zcash (ZEC) payments coming soon. Users will send ZEC to contacts using
          an external wallet like Zodl, directly within conversation threads, without KYC or middlemen.
          The platform is also building a new open-source facilitator network — not the existing shop
          directory, but an entirely new community of facilitators ready to accept fiat for ZEC via
          QR-code payment rails. JustZappIt is licensed under the GNU Affero General Public License v3.0
          and does not collect or sell user data.
        </blockquote>
      </section>

      {/* Brand assets */}
      <section>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Brand assets</h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/og-image.jpg"
              alt="JustZappIt OG image"
              className="rounded-lg border border-[var(--color-border)] w-full sm:w-72 object-cover"
            />
            <div className="space-y-3">
              <a
                href="/og-image.jpg"
                download
                className="flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                ↓ Download OG image (1200×630 JPG)
              </a>
              <p className="text-xs text-[var(--color-text-secondary)]">
                Additional logo files (SVG, PNG variants) — contact us at{" "}
                <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
                  {contactEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Key facts</h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Founded", "2024"],
                ["Licence", "AGPL-3.0"],
                ["Platforms", "iOS, Android, Web"],
                ["Tech stack", "Next.js 14 · Supabase · Leaflet"],
                ["Open source", "Yes — github.com/0xVampirot/justZappIt"],
                ["Privacy policy", "No user data collected or sold"],
                ["Currency", "Zcash (ZEC) — shielded transactions by default"],
              ].map(([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-[var(--color-border)] last:border-0"
                >
                  <td className="px-5 py-3 font-semibold text-[var(--color-text-primary)] w-1/3">
                    {key}
                  </td>
                  <td className="px-5 py-3 text-[var(--color-text-secondary)]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Media contact */}
      <section>
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">Media contact</h2>
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 space-y-2 text-sm">
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">
              {contactEmail}
            </a>
          </p>
          <p>
            <strong>X (Twitter):</strong>{" "}
            <a
              href="https://x.com/JustZappIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @JustZappIt
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/0xVampirot/justZappIt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              github.com/0xVampirot/justZappIt
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
