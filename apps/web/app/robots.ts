// SPDX-License-Identifier: AGPL-3.0-only
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";
  return {
    // /i carries personal, single-use invite payloads — keep it out of every index.
    rules: { userAgent: "*", allow: ["/", "/api/og"], disallow: ["/api/", "/i"] },
    sitemap: `${appUrl}/sitemap.xml`,
  };
}
