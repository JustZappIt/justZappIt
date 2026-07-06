// SPDX-License-Identifier: AGPL-3.0-only
import type { MetadataRoute } from "next";

// App-positioning sitemap: every canonical, indexable page on the site.
// The legacy store-directory routes (/add, /store, /city, /verification) have
// been removed entirely.
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
    { url: `${appUrl}/legal/acceptable-use`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
  ];
}
