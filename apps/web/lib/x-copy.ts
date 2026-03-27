// SPDX-License-Identifier: AGPL-3.0-only
import type { Store } from "@/lib/database.types";

export function generateStoreTweet(store: Store): string {
  const status =
    store.verification_status === "seed_confirmed" ||
    store.verification_status === "community_verified"
      ? "Community verified"
      : "Listed";
  const cryptos = (store.accepts_crypto ?? []).join(", ") || "crypto";

  return (
    `${status}: ${store.operator_name} in ${store.city}, ${store.country} — accepts ${cryptos} for cash.\n\n` +
    `Found via @JustZappIt — the free, open-source crypto exchange directory. No sign-up, no tracking.\n`
  );
}

export function generateConfirmTweet(store: Store): string {
  const cryptos = (store.accepts_crypto ?? []).join(", ") || "crypto";
  return (
    `Confirmed in person: ${store.operator_name} in ${store.city} is legitimate. ` +
    `Accepts ${cryptos} for cash.\n\n` +
    `Verified on @JustZappIt — community-driven, no accounts required.`
  );
}

export function generateMilestoneTweet(count: number): string {
  return (
    `${count} stores now listed on @JustZappIt — physical crypto exchange shops, ` +
    `community-verified, worldwide. The facilitator network is growing.\n\n` +
    `justzappit.xyz/directory`
  );
}

export function generateNewCountryTweet(country: string, storeCount: number): string {
  const tag = country.replace(/\s/g, "");
  return (
    `@JustZappIt now covers ${country}. ` +
    `${storeCount} ${storeCount === 1 ? "store" : "stores"} listed and verifiable by the community.\n\n` +
    `Find physical crypto exchange shops near you: justzappit.xyz/directory\n` +
    `#Crypto #Bitcoin #${tag}`
  );
}

export function generateLeaderboardTweet(rank: number, weekCount: number): string {
  return (
    `I am ranked #${rank} on this week's @JustZappIt leaderboard — ` +
    `${weekCount} crypto exchange ${weekCount === 1 ? "shop" : "shops"} added to the community directory.\n\n` +
    `Find physical crypto exchanges near you: justzappit.xyz/leaderboard`
  );
}
