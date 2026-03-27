// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
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
    default: "JustZappIt — Private Messaging with Zcash Payments",
    template: "%s — JustZappIt",
  },
  description:
    "A private messaging app for iOS and Android with native Zcash payments. Send ZEC to any contact inside your conversation — no separate wallet, no KYC, no middlemen.",
  keywords: [
    "zcash payments",
    "private messaging app",
    "zec wallet",
    "crypto messaging",
    "p2p zcash",
    "crypto exchange near me",
    "buy bitcoin with cash",
    "physical crypto store",
  ],
  authors: [{ name: "JustZappIt" }],
  creator: "JustZappIt",
  publisher: "JustZappIt",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "JustZappIt — Private Messaging with Zcash Payments",
    description:
      "Send ZEC to any contact inside your conversation. Private, encrypted messaging with native Zcash payments. iOS and Android.",
    url: "https://justzappit.xyz",
    siteName: "JustZappIt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/api/og?type=app",
        width: 1200,
        height: 630,
        alt: "JustZappIt — Private Messaging with Zcash Payments",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustZappIt — Private Messaging with Zcash Payments",
    description:
      "Send ZEC to any contact inside your conversation. Private, encrypted messaging with native Zcash payments.",
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
