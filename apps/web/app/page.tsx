// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import AppHero from "@/components/AppHero";
import StatementBand from "@/components/StatementBand";
import FeatureBlock from "@/components/FeatureBlock";
import FoundationSection from "@/components/FoundationSection";
import BarcodeBand from "@/components/BarcodeBand";
import CashOutSection from "@/components/CashOutSection";
import LandingFaq from "@/components/LandingFaq";
import ClosingCta from "@/components/ClosingCta";

export const metadata: Metadata = {
  title: "JustZappIt | Encrypted Messenger with a Shielded Zcash Wallet",
  description:
    "A peer-to-peer encrypted messenger with a shielded Zcash wallet built in. Pay friends in chat, swap ZEC, and cash out with no KYC. Android beta live.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "JustZappIt | Encrypt Your Messages and Your Money",
    description:
      "Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in: in-chat ZEC payments, swaps, and a no-KYC offramp. Android beta live; iOS coming soon.",
    images: [{ url: "/api/og?type=app", width: 1200, height: 630 }],
  },
  twitter: {
    title: "JustZappIt | Encrypt Your Messages and Your Money",
    description:
      "Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in: in-chat ZEC payments, swaps, and a no-KYC offramp. Android beta live.",
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
          "JustZappIt builds Zapp, a peer-to-peer end-to-end encrypted messenger with a shielded Zcash wallet built in, plus private swaps and an offramp to local currency.",
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
          `${appUrl}/screens/zapp-hero-framed.png`,
          `${appUrl}/screens/zapp-wallet-framed.png`,
        ],
        applicationCategory: "FinanceApplication",
        operatingSystem: "Android",
        description:
          "A peer-to-peer encrypted messenger with a shielded Zcash (ZEC) wallet built in: in-chat payments, ZEC/USDC swaps, and a no-KYC offramp to local currency in select countries.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        featureList: [
          "End-to-end encrypted peer-to-peer messaging over Holepunch, no servers",
          "Shielded Zcash (ZEC) wallet with in-chat payments",
          "ZEC to USDC swaps via NEAR Intents",
          "No-KYC offramp to Indian Rupees over UPI via P2P.me",
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
      <StatementBand />
      <FeatureBlock />
      <FoundationSection />
      <BarcodeBand />
      <CashOutSection />
      <LandingFaq />
      <ClosingCta />
    </>
  );
}
