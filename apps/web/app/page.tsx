// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import AppHero from "@/components/AppHero";
import FeatureBlock from "@/components/FeatureBlock";
import FoundationSection from "@/components/FoundationSection";
import CashOutSection from "@/components/CashOutSection";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
  description:
    "Zapp is a shielded Zcash wallet with decentralized, end-to-end encrypted messaging and no-KYC cash-out to local currency in select countries. Android beta live.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
    description:
      "A shielded Zcash wallet, a serverless peer-to-peer messenger, and no-KYC cash-out, all in one app. Android beta live; iOS coming soon.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
    description:
      "A shielded Zcash wallet, a serverless peer-to-peer messenger, and no-KYC cash-out, all in one app. Android beta live.",
    images: ["/api/og?type=app"],
  },
};

export default function HomePage() {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "JustZappIt",
    url: appUrl,
    applicationCategory: "CommunicationApplication",
    operatingSystem: "iOS, Android",
    description:
      "A shielded Zcash wallet with decentralized end-to-end encrypted messaging and no-KYC cash-out to local currency in select countries.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AppHero />
      <FeatureBlock />
      <FoundationSection />
      <CashOutSection />
      <ClosingCta />
    </>
  );
}
