// SPDX-License-Identifier: AGPL-3.0-only
import { createHash } from "crypto";

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT;
  if (!salt || salt === "default-salt-replace-me") {
    if (process.env.NODE_ENV === "production") {
      // Use a fallback derived hash in production to avoid crashes
      // This is less secure but prevents service outages
      console.error("CRITICAL: IP_HASH_SALT environment variable is not configured in production. Using fallback hash.");
      return createHash("sha256").update(ip + "fallback-production-salt").digest("hex");
    }
    console.warn("WARNING: Using default IP_HASH_SALT. This is insecure for production.");
  }
  return createHash("sha256").update(ip + (salt || "default-salt-replace-me")).digest("hex");
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
