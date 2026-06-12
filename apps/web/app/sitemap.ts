// SPDX-License-Identifier: AGPL-3.0-only
import type { MetadataRoute } from "next";

// App-positioning sitemap: only the pages we want ranking. The legacy
// directory remnants (/add, /store, /city, /verification) are noindexed
// and intentionally absent.
export default function sitemap(): MetadataRoute.Sitemap {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";
  const now = new Date();

  return [
    { url: appUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${appUrl}/app`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${appUrl}/faq`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${appUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${appUrl}/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${appUrl}/legal/privacy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${appUrl}/legal/terms`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${appUrl}/legal/disclaimer`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${appUrl}/legal/content-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
