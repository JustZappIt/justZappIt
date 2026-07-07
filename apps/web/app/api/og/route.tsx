// SPDX-License-Identifier: AGPL-3.0-only
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#111110",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Wordmark */}
        <div
          style={{
            fontSize: 18,
            color: "#E8821A",
            fontWeight: 700,
            marginBottom: 40,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          JustZappIt
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              color: "#F5F4F0",
              lineHeight: 1.15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Encrypt your messages</span>
            <span style={{ color: "#E8821A" }}>and your money.</span>
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#6B6A64",
              marginTop: 20,
              display: "flex",
            }}
          >
            iOS and Android · JustZappIt
          </div>
        </div>

        {/* Domain footer */}
        <div
          style={{
            marginTop: "auto",
            fontSize: 14,
            color: "#3A3A38",
            display: "flex",
          }}
        >
          justzappit.xyz
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
