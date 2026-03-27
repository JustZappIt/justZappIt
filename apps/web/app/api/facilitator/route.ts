// SPDX-License-Identifier: AGPL-3.0-only
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServiceClient } from "@/lib/supabase";
import { hashIp, getClientIp } from "@/lib/ipHash";
import { checkRateLimit } from "@/lib/rateLimit";
import { verifyHcaptcha } from "@/lib/hcaptcha";
import { sendFacilitatorEmail } from "@/lib/email";
import { PAYMENT_SYSTEMS } from "@/lib/facilitator.constants";

const facilitatorSchema = z
  .object({
    email: z.string().email("Invalid email address").max(254),
    captchaToken: z.string().min(1, "Captcha token required"),
    paymentSystems: z
      .array(z.enum(PAYMENT_SYSTEMS))
      .min(1, "Select at least one payment system"),
    otherPaymentSystem: z.string().max(100).nullable().optional(),
    source: z.enum(["homepage", "directory-page"]).default("homepage"),
  })
  .refine(
    (d) =>
      !d.paymentSystems.includes("Other") ||
      (d.otherPaymentSystem != null && d.otherPaymentSystem.trim().length > 0),
    {
      message: "Please describe the other payment system",
      path: ["otherPaymentSystem"],
    }
  );

export async function POST(request: NextRequest) {
  try {
    // Validate environment variables early
    if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error("[Facilitator API] Missing SUPABASE_SERVICE_ROLE_KEY");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    if (!process.env.IP_HASH_SALT || process.env.IP_HASH_SALT === "default-salt-replace-me") {
      console.error("[Facilitator API] Missing or default IP_HASH_SALT");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const body = await request.json();
    const result = facilitatorSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid request", details: result.error.format() },
        { status: 400 }
      );
    }

    const { email, captchaToken, paymentSystems, otherPaymentSystem, source } =
      result.data;

    const valid = await verifyHcaptcha(captchaToken);
    if (!valid) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    const ip = getClientIp(request);
    let ipHash: string;
    try {
      ipHash = hashIp(ip);
    } catch (err) {
      console.error("[Facilitator API] IP hashing failed:", err);
      return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
    const { allowed } = await checkRateLimit(ipHash);
    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const supabaseAdmin = getServiceClient();
    const { error } = await supabaseAdmin.from("facilitator_interests").insert({
      email: email.toLowerCase().trim(),
      payment_systems: paymentSystems,
      other_payment_system: paymentSystems.includes("Other")
        ? (otherPaymentSystem?.trim() ?? null)
        : null,
      source,
    });

    if (error?.code === "23505") {
      return NextResponse.json({ status: "already_registered" });
    }

    if (error) {
      console.error("[Facilitator API] Insert error:", error);
      return NextResponse.json(
        { error: "Could not save your details. Please try again." },
        { status: 500 }
      );
    }

    sendFacilitatorEmail(email.toLowerCase().trim(), paymentSystems).catch(
      (err) => console.error("[Facilitator API] Email send failed:", err)
    );

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("[Facilitator API] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
