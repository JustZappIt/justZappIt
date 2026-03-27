// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import AppHero from "@/components/AppHero";
import FeatureBlock from "@/components/FeatureBlock";
import StatsBar from "@/components/StatsBar";
import RoadmapSection from "@/components/RoadmapSection";
import CommunityBlock from "@/components/CommunityBlock";

export const metadata: Metadata = {
  title: "JustZappIt — Private Messaging with Zcash Payments",
  description:
    "A private messaging app for iOS and Android with native Zcash payments. Send ZEC to any contact inside your conversation — no separate wallet, no KYC, no middlemen.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JustZappIt — Private Messaging with Zcash Payments",
    description:
      "Send ZEC to any contact inside your conversation. Private, encrypted messaging with native Zcash payments. iOS and Android.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt — Private Messaging with Zcash Payments",
    description:
      "Send ZEC to any contact inside your conversation. Private, encrypted messaging with native Zcash payments.",
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
      "A private messaging app with native Zcash payments. Send ZEC to any contact inside a conversation — no separate wallet, no KYC.",
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
      <StatsBar />
      <RoadmapSection />
      <CommunityBlock />
    </>
  );
}
