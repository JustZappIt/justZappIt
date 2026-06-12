// SPDX-License-Identifier: AGPL-3.0-only
import type { VerificationStatus } from "@/lib/statusColors";

export type MarkerStyle = VerificationStatus | "approximate";

const PIN_SIZE: [number, number] = [28, 36];
const PIN_ANCHOR: [number, number] = [14, 36];
const POPUP_ANCHOR: [number, number] = [0, -36];

/** Zapp ink — one sharp graphic outline for every pin. */
const PIN_STROKE = "#15120d";

/**
 * Pin fills use the Zapp token hues where they map cleanly:
 * success #2f9d6a for the verified tiers, accent #ff9417 for the pending
 * tiers, danger #d94545 for flagged. Closed/approximate keep a neutral gray.
 */
const MARKER_COLORS: Record<MarkerStyle, { fill: string; opacity: number }> = {
  seed_confirmed: { fill: "#2f9d6a", opacity: 1 },
  community_verified: { fill: "#2f9d6a", opacity: 1 },
  seed_partial: { fill: "#ff9417", opacity: 0.85 },
  unverified: { fill: "#ff9417", opacity: 0.7 },
  flagged: { fill: "#d94545", opacity: 1 },
  closed: { fill: "#9ca3af", opacity: 1 },
  approximate: { fill: "#9ca3af", opacity: 1 },
};

function makeSvgPin(fill: string, stroke: string, opacity = 1): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="36" viewBox="0 0 28 36">
    <path d="M14 0C6.268 0 0 6.268 0 14c0 9.333 14 22 14 22S28 23.333 28 14C28 6.268 21.732 0 14 0z"
      fill="${fill}" fill-opacity="${opacity}" stroke="${stroke}" stroke-width="2"/>
    <circle cx="14" cy="14" r="5" fill="white" fill-opacity="0.9"/>
  </svg>`;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICONS: Record<string, any> = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createIcon(L: any, style: MarkerStyle): unknown {
  const { fill, opacity } = MARKER_COLORS[style];

  return L.divIcon({
    html: makeSvgPin(fill, PIN_STROKE, opacity),
    className: "",
    iconSize: PIN_SIZE,
    iconAnchor: PIN_ANCHOR,
    popupAnchor: POPUP_ANCHOR,
  });
}

export function getMarkerIcon(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  L: any,
  status: string,
  isApproximate: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any {
  if (isApproximate) {
    if (!ICONS["approximate"]) ICONS["approximate"] = createIcon(L, "approximate");
    return ICONS["approximate"];
  }

  const style = status as MarkerStyle;
  if (!ICONS[style]) ICONS[style] = createIcon(L, style);
  return ICONS[style];
}
