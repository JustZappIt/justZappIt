// SPDX-License-Identifier: AGPL-3.0-only

/**
 * Invite links shared by the Zapp app: `https://justzappit.xyz/i?d=<base64url JSON>`.
 * Wire format is owned by the Android app (InvitePayload.kt) — decode defensively and additively,
 * never reject a link for a field this page does not understand.
 */
export type InvitePayload = {
  senderName: string | null;
  zatoshi: number | null;
  note: string | null;
  expiresAt: number | null;
};

const ZATOSHI_PER_ZEC = 100_000_000;

/** Google Play truncates the referrer beyond ~1 KB, which would silently drop the claim. */
export const MAX_REFERRER_LENGTH = 1000;

export function decodeInvitePayload(encoded: string | null): InvitePayload | null {
  if (!encoded) return null;
  let json: unknown;
  try {
    const base64 = encoded.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
    json = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
  if (typeof json !== "object" || json === null) return null;
  const raw = json as Record<string, unknown>;
  return {
    senderName: typeof raw.name === "string" && raw.name.trim() !== "" ? raw.name.trim() : null,
    zatoshi:
      typeof raw.zat === "number" && Number.isFinite(raw.zat) && raw.zat > 0 ? raw.zat : null,
    note: typeof raw.note === "string" && raw.note.trim() !== "" ? raw.note.trim() : null,
    expiresAt: typeof raw.exp === "number" && Number.isFinite(raw.exp) ? raw.exp : null,
  };
}

/** Trims trailing zeros so 0.05000000 reads as 0.05, keeping sub-cent amounts visible. */
export function formatZec(zatoshi: number): string {
  const zec = zatoshi / ZATOSHI_PER_ZEC;
  const decimals = zec < 0.001 ? 8 : 4;
  return `${zec.toFixed(decimals).replace(/0+$/, "").replace(/\.$/, "")} ZEC`;
}

/**
 * Play hands this string back to the app after install, which is the only way a claim survives
 * "tap link → install → open app". Returns null when it would exceed what Play preserves.
 */
export function playStoreUrlWithInvite(playStoreUrl: string, encoded: string): string | null {
  const referrer = `d=${encoded}`;
  if (encodeURIComponent(referrer).length > MAX_REFERRER_LENGTH) return null;
  const separator = playStoreUrl.includes("?") ? "&" : "?";
  return `${playStoreUrl}${separator}referrer=${encodeURIComponent(referrer)}`;
}
