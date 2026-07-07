// SPDX-License-Identifier: AGPL-3.0-only
import BarcodeReveal from "@/components/BarcodeReveal";

/**
 * Full-bleed privacy-barcode band used as a graphic divider between sections.
 * Orange on orange with the white bars showing; scans in left-to-right on
 * scroll. Purely decorative.
 */
export default function BarcodeBand() {
  return (
    <section aria-hidden className="relative overflow-hidden bg-primary h-20 sm:h-24">
      <BarcodeReveal className="inset-0" />
    </section>
  );
}
