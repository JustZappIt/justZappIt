// SPDX-License-Identifier: AGPL-3.0-only
import { supabase } from "@/lib/supabase";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";

  const { data: stores } = await supabase
    .from("stores")
    .select("id, updated_at")
    .in("verification_status", ["unverified", "seed_confirmed", "seed_partial", "community_verified", "flagged"]);

  const storeUrls: MetadataRoute.Sitemap = (stores ?? []).map((s: { id: string; updated_at: string }) => ({
    url: `${appUrl}/store/${s.id}`,
    lastModified: new Date(s.updated_at),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // City pages — deduplicated by slug
  const { data: cities } = await supabase
    .from("stores")
    .select("city, country")
    .not("city", "is", null)
    .not("country", "is", null)
    .neq("verification_status", "closed");

  const seenSlugs = new Set<string>();
  const cityUrls: MetadataRoute.Sitemap = [];
  for (const row of cities ?? []) {
    const slug = `${row.city}-${row.country}`
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/[\s]+/g, "-");
    if (!seenSlugs.has(slug)) {
      seenSlugs.add(slug);
      cityUrls.push({
        url: `${appUrl}/city/${slug}`,
        changeFrequency: "daily",
        priority: 0.6,
      });
    }
  }

  return [
    {
      url: appUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1,
    },
    {
      url: `${appUrl}/app`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${appUrl}/directory`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: `${appUrl}/add`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${appUrl}/leaderboard`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.5,
    },
    {
      url: `${appUrl}/press`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    ...storeUrls,
    ...cityUrls,
    ...[
      { url: `${appUrl}/legal/privacy`, changeFrequency: "monthly" as const, priority: 0.3 },
      { url: `${appUrl}/legal/terms`, changeFrequency: "monthly" as const, priority: 0.3 },
      { url: `${appUrl}/legal/disclaimer`, changeFrequency: "monthly" as const, priority: 0.3 },
      { url: `${appUrl}/legal/content-policy`, changeFrequency: "monthly" as const, priority: 0.3 },
    ],
  ];
}
