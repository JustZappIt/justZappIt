// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useState } from "react";

const markets = [
  { currency: "rupees", status: "Live in India today", live: true },
  { currency: "reais", status: "Live in Brazil today", live: true },
  { currency: "rupiah", status: "Live in Indonesia today", live: true },
  { currency: "pesos", status: "Argentina · coming soon", live: false },
  { currency: "pesos", status: "Mexico · coming soon", live: false },
  { currency: "bolívares", status: "Venezuela · coming soon", live: false },
];

/**
 * Rotating offramp headline. Renders India (the live market) on the server
 * so no-JS visitors and crawlers see the true current state; the rotation
 * through coming-soon markets only starts client-side.
 */
export default function CashOutHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % markets.length), 2600);
    return () => clearInterval(id);
  }, []);

  const market = markets[index];

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-black text-[var(--color-text-primary)] tracking-tight">
        <span className="sr-only">Turn ZEC into local currency.</span>
        <span aria-hidden="true">
          Turn ZEC into{" "}
          <span key={market.currency} className="inline-block text-primary animate-fade-in">
            {market.currency}.
          </span>
        </span>
      </h2>

      <p className="mt-4 flex justify-center">
        <span className="sr-only">
          Live in India, Brazil, and Indonesia today. Argentina, Mexico, and Venezuela are
          coming soon.
        </span>
        <span
          key={market.status}
          aria-hidden="true"
          className={`animate-fade-in inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.15em] px-3 py-1.5 ${
            market.live
              ? "bg-[var(--color-success-soft)] text-[var(--color-success)]"
              : "bg-[var(--color-chip)] text-[var(--color-text-secondary)]"
          }`}
        >
          {market.live && (
            <span
              className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse"
              aria-hidden="true"
            />
          )}
          {market.status}
        </span>
      </p>
    </>
  );
}
