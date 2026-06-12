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
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@justzappit.xyz";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${appUrl}/#organization`,
        name: "JustZappIt",
        url: appUrl,
        logo: { "@type": "ImageObject", url: `${appUrl}/icon.png` },
        email: contactEmail,
        sameAs: ["https://x.com/JustZappIt"],
        description:
          "JustZappIt builds Zapp, a decentralized end-to-end encrypted messenger with a shielded Zcash wallet and no-KYC cash-out built in.",
      },
      {
        "@type": "WebSite",
        "@id": `${appUrl}/#website`,
        url: appUrl,
        name: "JustZappIt",
        publisher: { "@id": `${appUrl}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": ["SoftwareApplication", "MobileApplication"],
        "@id": `${appUrl}/#app`,
        name: "Zapp",
        url: `${appUrl}/app`,
        image: `${appUrl}/api/og?type=app`,
        screenshot: [
          `${appUrl}/screens/zapp-wallet.png`,
          `${appUrl}/screens/zapp-onboarding.png`,
        ],
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android",
        description:
          "A shielded Zcash wallet with decentralized end-to-end encrypted messaging and no-KYC cash-out to local currency in select countries.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "End-to-end encrypted peer-to-peer messaging over Holepunch, no servers",
          "Shielded Zcash (ZEC) wallet with in-chat payments",
          "ZEC to USDC swaps via NEAR Intents",
          "No-KYC cash-out to Indian Rupees over UPI via P2P.me",
          "No phone number, email, or sign-up required",
        ],
        author: { "@id": `${appUrl}/#organization` },
        publisher: { "@id": `${appUrl}/#organization` },
      },
    ],
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
