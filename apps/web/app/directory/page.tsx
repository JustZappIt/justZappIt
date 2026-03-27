// SPDX-License-Identifier: AGPL-3.0-only
import dynamicImport from "next/dynamic";
import Link from "next/link";
import type { Metadata } from "next";
import type { Store } from "@/lib/database.types";
import JustAddedFeed from "@/components/JustAddedFeed";
import MilestoneToast from "@/components/MilestoneToast";

export const metadata: Metadata = {
  title: "Facilitator Network Directory",
  description:
    "Find physical cryptocurrency exchange shops and OTC desks worldwide. Community-verified. The ground layer of the JustZappIt payment network. Browse stores by city and country.",
  alternates: { canonical: "/directory" },
  openGraph: {
    title: "Facilitator Network Directory — JustZappIt",
    description:
      "Find physical cryptocurrency exchange shops and OTC desks worldwide. Community-verified. The ground layer of the JustZappIt payment network.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
};

export const dynamic = "force-dynamic";

const MapPage = dynamicImport(() => import("@/components/MapPage"), { ssr: false });

async function getStores(): Promise<Store[]> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !supabaseUrl ||
    supabaseUrl.includes("YOUR_PROJECT_REF") ||
    !supabaseKey ||
    supabaseKey.includes("YOUR_ANON_KEY")
  ) {
    return [];
  }

  try {
    const { createClient } = await import("@supabase/supabase-js");
    const client = createClient(supabaseUrl, supabaseKey);
    const { data, error } = await client
      .from("stores")
      .select("*")
      .order("operator_name");

    if (error) {
      console.error("Failed to fetch stores:", error);
      return [];
    }
    return (data ?? []) as Store[];
  } catch (err) {
    console.error("Supabase error:", err);
    return [];
  }
}

export default async function DirectoryPage() {
  const stores = await getStores();

  return (
    <>
      {/* Facilitator network banner */}
      <div className="bg-primary/10 border-b border-primary/20 px-4 py-3 text-center text-sm">
        <p className="text-[var(--color-text-primary)]">
          <strong>This directory is the JustZappIt facilitator network.</strong>{" "}
          Listed shops and OTC desks are the early facilitators in the ZEC payment ecosystem.{" "}
          <Link href="/add" className="text-primary hover:underline font-medium">
            Add your store →
          </Link>
        </p>
      </div>

      {/* Realtime sidebar widgets (client components) */}
      <div className="hidden xl:block fixed right-6 top-24 w-56 z-30 space-y-3">
        <JustAddedFeed />
      </div>

      <MilestoneToast />

      <MapPage initialStores={stores} />

      {/* Server-rendered SEO content — visible to crawlers / screen readers only */}
      <section className="sr-only" aria-hidden="false">
        <h1>Physical Crypto Exchange Directory — The Facilitator Network</h1>
        <p>
          The JustZappIt facilitator network directory lists community-verified physical
          cryptocurrency exchange shops and OTC desks worldwide. Find locations to buy or sell
          BTC, ETH, USDT, ZEC and other cryptocurrencies for cash. All listings are submitted and
          verified by the community.
        </p>
      </section>
    </>
  );
}
