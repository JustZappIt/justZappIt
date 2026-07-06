import { config } from "dotenv";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: resolve(__dirname, "../../.env.local") });

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // va.vercel-scripts.com serves the Vercel Analytics debug script in dev; prod loads it same-origin
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://hcaptcha.com https://*.hcaptcha.com https://va.vercel-scripts.com`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://*.hcaptcha.com",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://*.supabase.co wss://*.supabase.co https://hcaptcha.com https://*.hcaptcha.com",
      "frame-src https://hcaptcha.com https://*.hcaptcha.com",
      "object-src 'none'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
    ].join("; "),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
];

const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { ...config.resolve.fallback, fs: false };
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Retired store-directory routes → home (preserve any inbound link equity)
      { source: "/directory", destination: "/", permanent: true },
      { source: "/leaderboard", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/sitemap", destination: "/", permanent: true },
      { source: "/add", destination: "/", permanent: true },
      { source: "/verification", destination: "/", permanent: true },
      { source: "/store/:id", destination: "/", permanent: true },
      { source: "/city/:slug", destination: "/", permanent: true },
      // Renamed legal page
      { source: "/legal/content-policy", destination: "/legal/acceptable-use", permanent: true },
    ];
  },
};

export default nextConfig;
