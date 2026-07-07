// SPDX-License-Identifier: AGPL-3.0-only
import { Resend } from "resend";
import { PLAY_STORE_URL } from "@/lib/links";

const FROM = process.env.RESEND_FROM_EMAIL ?? "hello@justzappit.xyz";

function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export type WelcomePlatform = "android" | "ios";

export async function sendWelcomeEmail(
  to: string,
  platform?: WelcomePlatform
): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not configured — skipping welcome email");
    return;
  }

  if (platform === "android") {
    await getResend().emails.send({
      from: FROM,
      to,
      subject: "Get Zapp on Android - JustZappIt",
      text: [
        "Thanks for your interest in Zapp for Android.",
        "",
        "The Android beta is now open on Google Play, so there is no invite or waitlist. You can install it directly:",
        "",
        PLAY_STORE_URL,
        "",
        "Zapp is a mobile Zcash wallet with end-to-end encrypted messaging built in, plus in-chat ZEC payments and a no-KYC offramp to local cash.",
        "",
        "Follow for updates: https://x.com/JustZappIt",
        "",
        "- JustZappIt",
      ].join("\n"),
    });
    return;
  }

  if (platform === "ios") {
    await getResend().emails.send({
      from: FROM,
      to,
      subject: "You are on the Zapp iOS list - JustZappIt",
      text: [
        "You are now on the notification list for Zapp on iOS.",
        "",
        "The iOS app is in development. We will email you the moment it is ready to install.",
        "",
        `Until then, the Android beta is already open on Google Play: ${PLAY_STORE_URL}`,
        "",
        "Follow for updates: https://x.com/JustZappIt",
        "",
        "- JustZappIt",
      ].join("\n"),
    });
    return;
  }

  await getResend().emails.send({
    from: FROM,
    to,
    subject: "You are on the JustZappIt list",
    text: [
      "You are now on the JustZappIt notification list.",
      "",
      "We will contact you when the app is ready for download.",
      "",
      "In the meantime, hold on tight! Private messaging, in-chat ZEC payments, no KYC coming very soon.",
      "",
      "Follow for updates: https://x.com/JustZappIt",
      "",
      "- JustZappIt",
    ].join("\n"),
  });
}
