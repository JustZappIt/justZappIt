// SPDX-License-Identifier: AGPL-3.0-only
import { getServiceClient } from "./supabase";

const MAX_ACTIONS = 10;
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Atomic rate limit check via Postgres RPC.
 * Uses INSERT ... ON CONFLICT ... DO UPDATE ... RETURNING in a single statement
 * to eliminate the race condition where concurrent requests could read the same
 * stale action_count and bypass the limit.
 */
export async function checkRateLimit(ipHash: string): Promise<{ allowed: boolean; remaining: number }> {
  const supabase = getServiceClient();

  const { data, error } = await supabase.rpc("check_rate_limit", {
    p_ip_hash: ipHash,
    p_max_actions: MAX_ACTIONS,
    p_window_ms: WINDOW_MS,
  });

  if (error) {
    console.error("Rate limit RPC error:", error);
    return { allowed: false, remaining: 0 }; // fail closed — deny on DB error
  }

  // RPC returns a single-row result set
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) {
    console.error("Rate limit RPC returned no data");
    return { allowed: false, remaining: 0 }; // fail closed
  }

  return { allowed: row.allowed, remaining: row.remaining };
}
