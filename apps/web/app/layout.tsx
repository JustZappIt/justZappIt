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
    default: "JustZappIt | Encrypted Messenger with a Shielded Zcash Wallet",
    template: "%s | JustZappIt",
  },
  description:
    "Zapp is a peer-to-peer encrypted messenger with a shielded Zcash wallet built in. No servers, no phone number, no sign-up. Pay friends in chat, swap ZEC, and offramp to local currency when you need it. Android beta live.",
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
    "no kyc crypto offramp",
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
    title: "JustZappIt | Encrypt the Messages and the Money",
    description:
      "Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in. No servers, no phone number, no sign-up. Send ZEC to any contact inside the conversation. Android beta live; iOS coming soon.",
    url: "https://justzappit.xyz",
    siteName: "JustZappIt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JustZappIt | Encrypt the Messages and the Money",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JustZappIt | Encrypt the Messages and the Money",
    description:
      "Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in. No servers, no phone number, no sign-up. Android beta live; iOS coming soon.",
    images: ["/og-image.jpg"],
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
