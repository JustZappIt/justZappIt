// SPDX-License-Identifier: AGPL-3.0-only
import { Resend } from "resend";

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
    const optInUrl = process.env.PLAY_INTERNAL_OPTIN_URL;
    const inviteLines = optInUrl
      ? [
          "Here is how to get in:",
          "",
          `1. Open the opt-in link while signed in with that same Google account: ${optInUrl}`,
          '2. Tap "Become a tester".',
          "3. Install Zapp from Google Play.",
        ]
      : [
          "Your Google Play opt-in link will follow in a separate email once your invite is processed.",
        ];

    await getResend().emails.send({
      from: FROM,
      to,
      subject: "Your Zapp Android beta invite - JustZappIt",
      text: [
        "Thanks for joining the Zapp Android beta.",
        "",
        "The beta runs as invite-only internal testing on Google Play. Invites are tied to the email address you signed up with, so it must match the Google account you use on your Android phone.",
        "",
        ...inviteLines,
        "",
        "Zapp is a non-custodial Zcash wallet with end-to-end encrypted messaging built in. In-chat ZEC payments are coming soon.",
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
        "Until then: the Android beta is already live as invite-only internal testing on Google Play.",
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
