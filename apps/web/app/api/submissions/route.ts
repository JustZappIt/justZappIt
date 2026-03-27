// SPDX-License-Identifier: AGPL-3.0-only
import { NextRequest, NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";
import { hashIp, getClientIp } from "@/lib/ipHash";
import { checkRateLimit } from "@/lib/rateLimit";
import { verifyHcaptcha } from "@/lib/hcaptcha";
import { z } from "zod";

const MIN_SUBMIT_MS = 3000;

const newStoreSchema = z.object({
  operator_name: z.string().trim().min(1).max(100),
  street_address: z.string().trim().max(200).nullable().optional(),
  city: z.string().trim().min(1).max(100),
  country: z.string().trim().min(1).max(100),
  lat: z.number().min(-90).max(90),
  lng: z.number().min(-180).max(180),
  is_approximate: z.boolean().default(false),
  website: z.string().trim().url().max(200).nullable().optional().or(z.literal("")),
  opening_hours: z.string().trim().max(100).nullable().optional(),
  phone: z.string().trim().max(50).nullable().optional(),
  email: z.string().trim().email().max(100).nullable().optional().or(z.literal("")),
  accepts_crypto: z.array(z.string().max(20)).max(20).default([]),
});

const editStoreSchema = z.object({
  website: z.string().trim().url().max(200).nullable().optional().or(z.literal("")),
  opening_hours: z.string().trim().max(100).nullable().optional(),
  phone: z.string().trim().max(50).nullable().optional(),
  email: z.string().trim().email().max(100).nullable().optional().or(z.literal("")),
});


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      type,
      store_id,
      payload,
      hcaptchaToken,
      honeypot,
      loadedAt,
    } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }); // silently accept bots
    }

    // Time trap
    if (loadedAt && Date.now() - loadedAt < MIN_SUBMIT_MS) {
      return NextResponse.json({ error: "Submission too fast." }, { status: 400 });
    }

    if (!type || !payload) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    let parsedPayload;
    if (type === "new_store") {
      const result = newStoreSchema.safeParse(payload);
      if (!result.success) {
        return NextResponse.json({ error: "Invalid payload data", details: result.error.format() }, { status: 400 });
      }
      parsedPayload = result.data;
    } else if (type === "edit") {
      const result = editStoreSchema.safeParse(payload);
      if (!result.success) {
        return NextResponse.json({ error: "Invalid payload data", details: result.error.format() }, { status: 400 });
      }
      parsedPayload = result.data;
    } else {
      return NextResponse.json({ error: "Invalid submission type" }, { status: 400 });
    }

    // hCaptcha for all submissions
    if (!hcaptchaToken) {
      return NextResponse.json({ error: "hCaptcha required" }, { status: 400 });
    }

    // Validate environment variables before processing
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[Submissions API] Missing SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    if (!process.env.IP_HASH_SALT || process.env.IP_HASH_SALT === "default-salt-replace-me") {
      console.error("[Submissions API] Missing or default IP_HASH_SALT");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const valid = await verifyHcaptcha(hcaptchaToken);
    if (!valid) {
      return NextResponse.json({ error: "hCaptcha verification failed" }, { status: 400 });
    }

    const ip = getClientIp(request);
    let ipHash: string;
    try {
      ipHash = hashIp(ip);
    } catch (err) {
      console.error("[Submissions API] IP hashing failed:", err);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }

    const { allowed } = await checkRateLimit(ipHash);
    if (!allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Try again tomorrow." },
        { status: 429 }
      );
    }

    const supabase = getServiceClient();

    const { data, error } = await supabase
      .from("submissions")
      .insert({
        type,
        store_id: store_id ?? null,
        payload: parsedPayload,
        ip_hash: ipHash,
        confirm_count: 0,
        status: "live",
      })
      .select()
      .single();

    if (error) {
      console.error("[Submissions API] Insert error:", error);
      return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
    }

    // For new_store submissions, also create the store record immediately as unverified
    if (type === "new_store" && parsedPayload) {
      const p = parsedPayload as z.infer<typeof newStoreSchema>;
      const { error: storeError } = await supabase.from("stores").insert({
        operator_name: p.operator_name,
        street_address: p.street_address,
        city: p.city,
        country: p.country,
        lat: p.lat,
        lng: p.lng,
        is_approximate: p.is_approximate,
        website: p.website,
        opening_hours: p.opening_hours,
        phone: p.phone,
        email: p.email,
        accepts_crypto: p.accepts_crypto,
        verification_status: "unverified",
        source: "community",
        confirm_count: 0,
        flag_count: 0,
        submitter_hash: ipHash,
      });

      if (storeError) {
        console.error("[Submissions API] Store insert error:", storeError);
        return NextResponse.json({ error: "Failed to create store. Please try again." }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    if (err instanceof SyntaxError) {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
    }
    console.error("[Submissions API] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
