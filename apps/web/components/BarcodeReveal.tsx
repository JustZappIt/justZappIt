// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Decorative privacy-barcode graphic. It is fully visible by default (so it
 * still shows with JS disabled). When JS is available and motion is allowed it
 * starts hidden and "scans in" left-to-right the first time it scrolls into
 * view — a nod to the barcode being read. Purely decorative, aria-hidden.
 */
export default function BarcodeReveal({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  // Visible by default; JS arms the hidden state only if it can animate.
  const [revealed, setRevealed] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    setRevealed(false); // arm: hide, ready to scan in
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className={`pointer-events-none absolute ${className}`}>
      <Image
        src="/privacy-barcode.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover transition-[clip-path] duration-[1200ms] ease-out"
        style={{ clipPath: revealed ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
      />
    </div>
  );
}
