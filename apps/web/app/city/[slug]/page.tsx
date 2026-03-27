// SPDX-License-Identifier: AGPL-3.0-only
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import { citySlug, slugify } from "@/lib/slugify";
import type { Store } from "@/lib/database.types";
import { STATUS_CONFIG, DEFAULT_STATUS } from "@/lib/statusColors";

export const dynamicParams = true; // ISR: new cities added after deploy are SSR'd on first request
export const revalidate = 3600; // Rebuild every hour

// --- Static param generation (build-time) ---

export async function generateStaticParams() {
  const { data } = await supabase.from("stores").select("city, country");
  if (!data) return [];

  const seen = new Set<string>();
  return data
    .map((s) => {
      const slug = citySlug(s.city, s.country);
      if (seen.has(slug)) return null;
      seen.add(slug);
      return { slug };
    })
    .filter(Boolean) as { slug: string }[];
}

// --- Metadata ---

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const stores = await getStoresBySlug(params.slug);
  if (stores.length === 0) return { title: "Not Found" };

  const { city, country } = stores[0];
  return {
    title: `Crypto Exchange Shops in ${city}, ${country}`,
    description:
      `Find physical cryptocurrency exchange shops in ${city}, ${country}. ` +
      `Buy and sell BTC, ETH, USDT, ZEC for cash. Community-verified listings. Free, no account required.`,
    alternates: { canonical: `/city/${params.slug}` },
    openGraph: {
      images: [
        {
          url: `/api/og?type=city&city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

// --- Data fetching ---

async function getStoresBySlug(slug: string): Promise<Store[]> {
  const { data: all } = await supabase
    .from("stores")
    .select("*")
    .neq("verification_status", "closed")
    .order("operator_name");

  if (!all) return [];

  return (all as Store[]).filter((s) => citySlug(s.city, s.country) === slug);
}

// --- Page ---

export default async function CityPage({ params }: { params: { slug: string } }) {
  const stores = await getStoresBySlug(params.slug);
  if (stores.length === 0) notFound();

  const { city, country } = stores[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Crypto Exchange Shops in ${city}, ${country}`,
    description: `Community-verified physical cryptocurrency exchange shops in ${city}, ${country}.`,
    numberOfItems: stores.length,
    itemListElement: stores.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "FinancialService",
        name: s.operator_name,
        address: {
          "@type": "PostalAddress",
          addressLocality: s.city,
          addressCountry: s.country,
          ...(s.street_address ? { streetAddress: s.street_address } : {}),
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--color-text-secondary)] mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          {" / "}
          <Link href="/directory" className="hover:text-primary transition-colors">Directory</Link>
          {" / "}
          <span className="text-[var(--color-text-primary)]">{city}, {country}</span>
        </nav>

        <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] mb-2 tracking-tight">
          Crypto exchange shops in {city}
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          {stores.length} community-verified {stores.length === 1 ? "location" : "locations"} in {country}.
        </p>

        <div className="space-y-4">
          {stores.map((s) => {
            const statusCfg = STATUS_CONFIG[s.verification_status as keyof typeof STATUS_CONFIG] ?? DEFAULT_STATUS;
            return (
              <Link
                key={s.id}
                href={`/store/${s.id}`}
                className="block bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-5 hover:border-primary transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-[var(--color-text-primary)] truncate">{s.operator_name}</h2>
                    {s.street_address && (
                      <p className="text-sm text-[var(--color-text-secondary)] mt-0.5 truncate">{s.street_address}</p>
                    )}
                    {s.accepts_crypto && s.accepts_crypto.length > 0 && (
                      <p className="text-primary text-sm mt-1.5 font-medium">
                        {s.accepts_crypto.join(" · ")}
                      </p>
                    )}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${statusCfg.textColor} bg-[var(--color-bg)]`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusCfg.dotColor}`} />
                    {statusCfg.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <p className="text-sm text-[var(--color-text-secondary)]">
            Know a store in {city} that&apos;s not listed?
          </p>
          <div className="flex gap-3">
            <Link
              href="/add"
              className="text-sm bg-primary hover:bg-[#d97411] text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Add a store
            </Link>
            <Link
              href="/directory"
              className="text-sm border border-[var(--color-border)] text-[var(--color-text-primary)] font-semibold px-4 py-2 rounded-lg hover:bg-[var(--color-border)] transition-colors"
            >
              Full map
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
