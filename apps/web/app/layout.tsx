// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AdSenseScript from "@/components/AdSenseScript";
import CookieConsent from "@/components/CookieConsent";
import EnhancedHeader from "@/components/navigation/EnhancedHeader";
import EnhancedFooter from "@/components/navigation/EnhancedFooter";
import WaitlistBar from "@/components/WaitlistBar";
import "@/styles/index.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
    template: "%s | JustZappIt",
  },
  description:
    "Zapp is a shielded Zcash wallet with decentralized, end-to-end encrypted messaging and no-KYC cash-out to local currency in select countries. Android beta live.",
  applicationName: "JustZappIt",
  category: "finance",
  keywords: [
    "zcash wallet",
    "shielded zec wallet",
    "private messaging app",
    "encrypted messenger",
    "peer-to-peer messaging",
    "zcash payments",
    "crypto messaging app",
    "no kyc crypto cash out",
    "sell zec for upi",
    "crypto to upi india",
    "non-custodial wallet",
    "holepunch messenger",
  ],
  authors: [{ name: "JustZappIt" }],
  creator: "JustZappIt",
  publisher: "JustZappIt",
  formatDetection: { telephone: false },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
    description:
      "A decentralized messenger with a shielded Zcash wallet and no-KYC cash-out built in. Send ZEC to any contact inside the conversation. Android beta live; iOS coming soon.",
    url: "https://justzappit.xyz",
    siteName: "JustZappIt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?type=app",
        width: 1200,
        height: 630,
        alt: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustZappIt | Private Messaging, Zcash Payments, No-KYC Cash-Out",
    description:
      "A decentralized messenger with a shielded Zcash wallet and no-KYC cash-out built in. Android beta live; iOS coming soon.",
    images: ["/api/og?type=app"],
    creator: "@JustZappIt",
    site: "@JustZappIt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0c" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* Smart app banner — uncomment on launch day when App Store ID is known:
        <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />
        */}
      </head>
      <body className="font-sans antialiased flex flex-col min-h-screen" suppressHydrationWarning>
        <WaitlistBar />
        <EnhancedHeader />
        <main className="flex-1">{children}</main>
        <EnhancedFooter />
        <AdSenseScript />
        {process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID && <CookieConsent />}
        <Analytics />
      </body>
    </html>
  );
}
