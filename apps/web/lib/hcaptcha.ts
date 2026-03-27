// SPDX-License-Identifier: AGPL-3.0-only
const HCAPTCHA_SECRET = process.env.HCAPTCHA_SECRET_KEY;

/**
 * Verifies an hCaptcha token against the siteverify endpoint.
 *
 * In non-production environments, tokens prefixed with "10000000-" are
 * accepted without a network call (hCaptcha's official test token convention).
 *
 * If HCAPTCHA_SECRET_KEY is absent or is the placeholder string, verification
 * is skipped and treated as passing — safe for local development only.
 */
export async function verifyHcaptcha(token: string): Promise<boolean> {
  if (process.env.NODE_ENV !== "production" && token.startsWith("10000000-")) {
    return true;
  }
  if (!HCAPTCHA_SECRET || HCAPTCHA_SECRET === "REPLACE_WITH_HCAPTCHA_SECRET_KEY") {
    console.warn("[hCaptcha] Secret not configured — skipping verification in dev");
    return true;
  }
  try {
    const res = await fetch("https://hcaptcha.com/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${encodeURIComponent(HCAPTCHA_SECRET)}&response=${encodeURIComponent(token)}`,
    });
    if (!res.ok) {
      console.error("[hCaptcha] Verification request failed:", res.status, res.statusText);
      return false;
    }
    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] };
    if (!data.success && data["error-codes"]) {
      console.warn("[hCaptcha] Verification failed, error-codes:", data["error-codes"]);
    }
    return data.success === true;
  } catch (err) {
    console.error("[hCaptcha] Verification error:", err);
    return false; // fail closed
  }
}
