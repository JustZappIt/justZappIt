// SPDX-License-Identifier: AGPL-3.0-only
import { Suspense } from "react";
import type { Metadata } from "next";
import InviteClaim from "@/components/InviteClaim";

/**
 * Landing page for a shared Zapp invite link. A device with Zapp installed never gets here —
 * Android App Links (see /.well-known/assetlinks.json) hand the link straight to the app. This is
 * the path for everyone else: it carries the invite payload to Play as an install referrer so the
 * claim survives the install.
 */
export const metadata: Metadata = {
  title: "Claim your payment",
  description: "Someone sent you Zcash on Zapp. Install Zapp to claim it.",
  // Invite links are personal and single-use; they must never be indexed or previewed publicly.
  robots: { index: false, follow: false },
};

export default function InvitePage() {
  return (
    <Suspense>
      <InviteClaim />
    </Suspense>
  );
}
