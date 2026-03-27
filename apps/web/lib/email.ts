// SPDX-License-Identifier: AGPL-3.0-only
import { Resend } from "resend";

const FROM = process.env.RESEND_FROM_EMAIL ?? "hello@justzappit.xyz";

function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendFacilitatorEmail(
  to: string,
  paymentSystems: string[]
): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not configured — skipping facilitator email");
    return;
  }

  const systemsList =
    paymentSystems.length > 0 ? paymentSystems.join(", ") : "None specified";

  await getResend().emails.send({
    from: FROM,
    to,
    subject: "Thanks for your facilitator interest — JustZappIt",
    text: [
      "Thanks for your interest in becoming a JustZappIt facilitator.",
      "",
      "We have recorded your interest and will be in touch when the facilitator programme opens.",
      "",
      `Payment systems you selected: ${systemsList}`,
      "",
      "Facilitators help users pay at shops by converting ZEC to fiat using their existing payment apps. When the network launches, facilitators earn fees for each transaction they process.",
      "",
      "In the meantime, explore the facilitator network directory: https://justzappit.xyz/directory",
      "",
      "Follow for updates: https://x.com/JustZappIt",
      "",
      "— JustZappIt",
    ].join("\n"),
  });
}

export async function sendWelcomeEmail(to: string): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[email] RESEND_API_KEY not configured — skipping welcome email");
    return;
  }

  await getResend().emails.send({
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
