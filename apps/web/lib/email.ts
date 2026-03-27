// SPDX-License-Identifier: AGPL-3.0-only
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM = process.env.RESEND_FROM_EMAIL ?? "hello@justzappit.xyz";

export async function sendWelcomeEmail(to: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not configured — skipping welcome email");
    return;
  }

  await resend.emails.send({
    from: FROM,
    to,
    subject: "You are on the JustZappIt list",
    text: [
      "You are now on the JustZappIt notification list.",
      "",
      "We will contact you when new features go live — including QR-code shop payments via the facilitator network.",
      "",
      "In the meantime, the app is available on iOS and Android. Private messaging, in-chat ZEC payments, no KYC.",
      "",
      "Download: https://justzappit.xyz/app",
      "",
      "Follow for updates: https://x.com/JustZappIt",
      "",
      "— JustZappIt",
    ].join("\n"),
  });
}
