// SPDX-License-Identifier: AGPL-3.0-only
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getServiceClient } from "@/lib/supabase";
import { hashIp, getClientIp } from "@/lib/ipHash";
import { checkRateLimit } from "@/lib/rateLimit";
import { sendWelcomeEmail } from "@/lib/email";
import { verifyHcaptcha } from "@/lib/hcaptcha";

const waitlistSchema = z.object({
  email: z.string().email("Invalid email address").max(254),
  captchaToken: z.string().min(1, "Captcha token required"),
  source: z
    .enum(["app-page", "sticky-bar", "x-link", "directory-page", "footer", "facilitator-block"])
    .default("app-page"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = waitlistSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid request", details: result.error.format() },
        { status: 400 }
      );
    }

    const { email, captchaToken, source } = result.data;

    const valid = await verifyHcaptcha(captchaToken);
    if (!valid) {
      return NextResponse.json({ error: "Captcha verification failed" }, { status: 400 });
    }

    // Rate limiting — reuse existing checkRateLimit (10 actions / 24h per IP)
    const ip = getClientIp(request);
    const ipHash = hashIp(ip);
    const { allowed } = await checkRateLimit(ipHash);
    if (!allowed) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const supabaseAdmin = getServiceClient();
    const { error } = await supabaseAdmin
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim(), source });

    if (error?.code === "23505") {
      // Unique constraint — already subscribed
      return NextResponse.json({ status: "already_subscribed" });
    }

    if (error) {
      console.error("[Waitlist API] Insert error:", error);
      return NextResponse.json({ error: "Could not save your email. Please try again." }, { status: 500 });
    }

    // Fire-and-forget welcome email — don't block the response
    sendWelcomeEmail(email.toLowerCase().trim()).catch((err) =>
      console.error("[Waitlist API] Email send failed:", err)
    );

    return NextResponse.json({ status: "success" });
  } catch (err) {
    console.error("[Waitlist API] Unexpected error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
