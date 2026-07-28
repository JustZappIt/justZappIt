import { describe, it, expect } from "vitest";
import {
  decodeInvitePayload,
  formatZec,
  playStoreUrlWithInvite,
  MAX_REFERRER_LENGTH,
} from "../lib/invite";

const PLAY_URL = "https://play.google.com/store/apps/details?id=xyz.justzappit.zapp";

/** Mirrors the app's encoder: compact JSON, base64url, no padding. */
function encode(payload: Record<string, unknown>): string {
  return Buffer.from(JSON.stringify(payload))
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

const sample = {
  v: 1,
  id: "invite-123",
  pk: "ab".repeat(32),
  name: "Alice",
  zat: 5_000_000,
  note: "coffee money",
  exp: 2_000_000_000_000,
};

describe("decodeInvitePayload", () => {
  it("decodes a link produced by the app", () => {
    expect(decodeInvitePayload(encode(sample))).toEqual({
      senderName: "Alice",
      zatoshi: 5_000_000,
      note: "coffee money",
      expiresAt: 2_000_000_000_000,
    });
  });

  it("keeps unknown future fields from breaking the decode", () => {
    const decoded = decodeInvitePayload(encode({ ...sample, somethingNew: { a: 1 } }));

    expect(decoded?.senderName).toBe("Alice");
  });

  it("nulls out fields of the wrong type rather than rejecting the link", () => {
    const decoded = decodeInvitePayload(encode({ ...sample, zat: "5000000", note: 42 }));

    expect(decoded).toEqual({
      senderName: "Alice",
      zatoshi: null,
      note: null,
      expiresAt: 2_000_000_000_000,
    });
  });

  it("returns null for a truncated or garbage payload", () => {
    expect(decodeInvitePayload("!!!not base64!!!")).toBeNull();
    expect(decodeInvitePayload(encode(sample).slice(0, 12))).toBeNull();
  });

  it("returns null when there is no payload", () => {
    expect(decodeInvitePayload(null)).toBeNull();
    expect(decodeInvitePayload("")).toBeNull();
  });

  it("decodes multi-byte sender names", () => {
    expect(decodeInvitePayload(encode({ ...sample, name: "Zoë 🐝" }))?.senderName).toBe("Zoë 🐝");
  });
});

describe("formatZec", () => {
  it("trims trailing zeros", () => {
    expect(formatZec(5_000_000)).toBe("0.05 ZEC");
  });

  it("keeps sub-cent amounts visible", () => {
    expect(formatZec(1_000)).toBe("0.00001 ZEC");
  });
});

describe("playStoreUrlWithInvite", () => {
  it("appends the payload as a Play install referrer", () => {
    const url = playStoreUrlWithInvite(PLAY_URL, "PAYLOAD");

    expect(url).toBe(`${PLAY_URL}&referrer=${encodeURIComponent("d=PAYLOAD")}`);
  });

  it("refuses a referrer Play would truncate", () => {
    expect(playStoreUrlWithInvite(PLAY_URL, "a".repeat(MAX_REFERRER_LENGTH))).toBeNull();
  });
});
