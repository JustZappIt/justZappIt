// SPDX-License-Identifier: AGPL-3.0-only
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JustZappIt",
    short_name: "JustZappIt",
    description:
      "Zapp is a decentralized, end-to-end encrypted messenger with a shielded Zcash wallet and no-KYC cash-out built in.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ff9417",
    icons: [
      { src: "/icon.png", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
