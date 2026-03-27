// SPDX-License-Identifier: AGPL-3.0-only
import { NextRequest, NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";
import { hashIp, getClientIp } from "@/lib/ipHash";
import { checkRateLimit, checkFlagCooldown } from "@/lib/rateLimit";
import { verifyHcaptcha } from "@/lib/hcaptcha";
import { z } from "zod";

export type VoteType = "confirm" | "flag_closed" | "flag_wrong" | "flag_no_crypto";

const voteSchema = z.object({
  store_id: z.string().uuid(),
  type: z.enum(["confirm", "flag_closed", "flag_wrong", "flag_no_crypto"]),
  note: z.string().max(500).nullable().optional(),
  hcaptchaToken: z.string().min(1, "hCaptcha required"),
});

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables early
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[Votes API] Missing SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    if (!process.env.IP_HASH_SALT || process.env.IP_HASH_SALT === "default-salt-replace-me") {
      console.error("[Votes API] Missing or default IP_HASH_SALT");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const body = await request.json();
    const result = voteSchema.safeParse(body);

    if (!result.success) {
      console.error("[Votes API] Zod validation failed:", result.error.format());
      return NextResponse.json({ error: "Invalid payload data", details: result.error.format() }, { status: 400 });
    }

    const { store_id, type, note, hcaptchaToken } = result.data;

    const valid = await verifyHcaptcha(hcaptchaToken);
    if (!valid) {
      return NextResponse.json({ error: "hCaptcha verification failed" }, { status: 400 });
    }

    const ip = getClientIp(request);
    let ipHash: string;
    try {
      ipHash = hashIp(ip);
    } catch (err) {
      console.error("[Votes API] IP hashing failed:", err);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    const { allowed } = await checkRateLimit(ipHash);
    if (!allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again tomorrow." },
        { status: 429 }
      );
    }

    // Mass-flag cooldown: >3 flags from same IP in 1 hour → soft-ignore
    if (type.startsWith("flag_")) {
      const flagAllowed = await checkFlagCooldown(ipHash);
      if (!flagAllowed) {
        // Silently accept to avoid revealing the cooldown to bad actors
        return NextResponse.json({ success: true });
      }
    }

    const supabase = getServiceClient();

    const { error } = await supabase.from("votes").insert({
      store_id,
      type,
      ip_hash: ipHash,
      note: note ?? null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "You have already voted this way for this store." },
          { status: 409 }
        );
      }
      console.error("[Votes API] DB error:", error);
      return NextResponse.json({ error: "An internal error occurred. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Votes API] Unexpected error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
