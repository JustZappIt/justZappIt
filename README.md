# JustZappIt

The marketing site for **Zapp** — a peer-to-peer encrypted messenger with a shielded Zcash wallet built in. No servers, no phone number, no sign-up. Pay friends in chat, swap ZEC, and offramp to local currency when you need it.

Live at: **[justzappit.xyz](https://justzappit.xyz)**

> **Android beta is live** (invite-only internal testing on Google Play) · **iOS coming soon** (email waitlist).

**Part of the [Zapp](https://github.com/JustZappIt) ecosystem.**

---

## What is Zapp?

Zapp is a peer-to-peer messenger with a shielded Zcash wallet built in. Conversations travel device to device over [Holepunch](https://holepunch.to/) (the P2P stack behind Keet), never through a server. Payments settle in shielded ZEC, never on a public ledger. One seed phrase holds your money and your chat identity, and it never leaves your device.

This repository contains the **web app** (`apps/web`) — the landing site, the Android beta waitlist, and supporting API routes. The native apps and the messaging SDK live in separate repositories (`zapp-android`, `zapp-ios`, `zappMessaging`).

## Features (the app)

- **Messaging without middlemen:** Every message is end-to-end encrypted and travels directly between devices over Holepunch. No messaging server to breach, subpoena, or shut down. No phone number, email, or sign-up.
- **Money that moves like a message:** A shielded Zcash wallet lives inside every conversation. Tap the payment icon, enter an amount, send — paying a friend feels like sending a text. Shielded by default.
- **Built-in swaps & offramp:** Swap ZEC ↔ USDC in-app via [NEAR Intents](https://near.org/intents), or turn ZEC into local currency with no exchange account and no identity checks, settled peer-to-peer through the [P2P.me](https://p2p.me/) protocol with on-chain escrow. Live today in India (UPI), Brazil (PIX), and Indonesia (QRIS), with more corridors on the way.
- **Self-custody, always:** Keys are generated on-device and never leave it. The wallet is built on Zodl, the flagship open-source Zcash wallet from the team that created the protocol.

## Roadmap

- [x] **Android beta** — Invite-only internal testing on Google Play.
- [x] **In-chat shielded ZEC payments** — Pay inside any conversation.
- [x] **No-KYC offramp** — Live in India (UPI), Brazil (PIX), and Indonesia (QRIS).
- [ ] **iOS beta** — Collecting interest via the email waitlist now.
- [ ] **More offramp corridors** — 🇦🇷 Argentina, 🇳🇬 Nigeria, 🇻🇪 Venezuela, 🇨🇴 Colombia, and 🇲🇽 Mexico next.
- [ ] **Public release** — Open beta beyond invite-only testing.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [Supabase](https://supabase.com/) (PostgreSQL + Row Level Security)
- **Transactional email:** [Resend](https://resend.com/) (beta/waitlist invites)
- **Anti-abuse:** [hCaptcha](https://hcaptcha.com/) + SHA-256 IP hashing (raw IPs are never stored)
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Icons:** [Lucide React](https://lucide.dev/)

> **Note:** This repo also contains an earlier crowdsourced crypto-shop directory (interactive Leaflet map, store submissions, community voting). That code still lives under `apps/web` and `packages/db` but is no longer the focus of the live site.

---

## Local Development

```bash
# From the repo root
npm install --workspace=apps/web

# Configure environment variables
cp .env.example apps/web/.env.local
# Fill in your Supabase, Resend, and hCaptcha credentials

# Run the dev server
cd apps/web
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Scripts (`apps/web`)

```bash
npm run dev      # Start the dev server
npm run build    # Production build (run before opening a PR)
npm run start    # Serve the production build
npm run lint     # Lint
npm test         # Run the Vitest suite
```

### Environment Variables

Copy [`.env.example`](.env.example) and fill in your credentials. Key variables:

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase client |
| `SUPABASE_SERVICE_ROLE_KEY` | ✅ | Server-side Supabase access |
| `RESEND_API_KEY` / `RESEND_FROM_EMAIL` | ✅ | Sending waitlist/beta invite emails |
| `NEXT_PUBLIC_HCAPTCHA_SITE_KEY` / `HCAPTCHA_SECRET_KEY` | ✅ | Anti-spam on forms |
| `IP_HASH_SALT` | ✅ | Salt for privacy-preserving IP hashing |
| `NEXT_PUBLIC_APP_URL` | ✅ | Canonical site URL |
| `NEXT_PUBLIC_CONTACT_EMAIL` | ✅ | Public contact address |
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `NEXT_PUBLIC_GSC_VERIFICATION` | optional | Ads / analytics / Search Console |

> For UI-only work you can run the app against mock data without database access. If you're building features that need Supabase, reach out to the core team via issues/discussions to coordinate.

---

## How to Contribute

We welcome contributions of all sizes — features, bug fixes, and documentation improvements are all appreciated.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

Please ensure your code follows the existing style and that the Next.js build succeeds (`npm run build`) before opening a PR.

---

## Disclaimer

**Zapp is non-custodial, self-custody software.** You alone control your keys and your funds.

- **Use at your own risk:** Cryptocurrency transactions are irreversible. Always conduct your own research and exercise caution, especially with peer-to-peer/over-the-counter (OTC) trades and offramp orders.
- **No Liability:** The creators, contributors, and maintainers of JustZappIt are not responsible or liable for any lost funds, scams, or inaccuracies related to the use of this software.
- **Not Financial Advice:** Nothing in this project constitutes financial, legal, or investment advice.

---

## License

This project is open-source and available under the [GNU Affero General Public License v3.0 (AGPL-3.0)](LICENSE).

This means you are free to use, modify, and distribute the code. However, if you modify it and deploy it as a network service, you must make your modified source code available to users of that service under the same license.
