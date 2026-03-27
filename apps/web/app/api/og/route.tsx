// SPDX-License-Identifier: AGPL-3.0-only
import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") ?? "app";
  const name = searchParams.get("name") ?? "";
  const city = searchParams.get("city") ?? "";
  const country = searchParams.get("country") ?? "";
  const cryptos = searchParams.get("cryptos")?.split(",").filter(Boolean) ?? [];
  const verified = searchParams.get("verified") === "true";

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

        {/* Store type */}
        {type === "store" && (
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {verified && (
              <div
                style={{
                  background: "#235E28",
                  color: "#EEFAEE",
                  borderRadius: 4,
                  padding: "3px 10px",
                  fontSize: 12,
                  fontWeight: 700,
                  width: "fit-content",
                  marginBottom: 16,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  display: "flex",
                }}
              >
                Community Verified
              </div>
            )}
            <div
              style={{
                fontSize: 52,
                fontWeight: 800,
                color: "#F5F4F0",
                lineHeight: 1.1,
                marginBottom: 12,
                display: "flex",
              }}
            >
              {name || "Crypto Exchange"}
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#6B6A64",
                marginBottom: 28,
                display: "flex",
              }}
            >
              {[city, country].filter(Boolean).join(", ")}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {cryptos.map((c) => (
                <div
                  key={c}
                  style={{
                    background: "#1F1E1C",
                    color: "#E8821A",
                    borderRadius: 4,
                    padding: "5px 14px",
                    fontSize: 16,
                    fontWeight: 700,
                    display: "flex",
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* City type */}
        {type === "city" && (
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                fontSize: 20,
                color: "#6B6A64",
                marginBottom: 8,
                fontWeight: 600,
                display: "flex",
              }}
            >
              Crypto exchanges in
            </div>
            <div
              style={{
                fontSize: 56,
                fontWeight: 800,
                color: "#F5F4F0",
                lineHeight: 1.1,
                display: "flex",
              }}
            >
              {city || "Your City"}
            </div>
            {country && (
              <div
                style={{
                  fontSize: 24,
                  color: "#6B6A64",
                  marginTop: 10,
                  display: "flex",
                }}
              >
                {country}
              </div>
            )}
          </div>
        )}

        {/* App / default type */}
        {type === "app" && (
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
              <span>Private messages.</span>
              <span style={{ color: "#E8821A" }}>Real money.</span>
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
        )}

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
