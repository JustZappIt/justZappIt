// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Decorative privacy-barcode graphic that "scans in" left-to-right the first
 * time it scrolls into view — a nod to the barcode being read. Honors
 * prefers-reduced-motion by showing fully with no wipe. Purely decorative.
 */
export default function BarcodeReveal({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
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
        style={{ clipPath: shown ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}
      />
    </div>
  );
}
