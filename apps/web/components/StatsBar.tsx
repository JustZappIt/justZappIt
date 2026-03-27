// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useInView } from "@/lib/useInView";
import { useCountUp } from "@/lib/useCountUp";

interface Stats {
  stores: number;
  countries: number;
  cities: number;
}

function StatItem({
  value,
  label,
  delay = 0,
  started,
}: {
  value: number | null;
  label: string;
  delay?: number;
  started: boolean;
}) {
  const animated = useCountUp(value ?? 0, 1200, started && value !== null);

  return (
    <div
      className="text-center px-6 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className="text-4xl font-extrabold text-primary tracking-tight tabular-nums">
        {value === null ? "—" : animated}
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mt-1 font-medium">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const [stats, setStats] = useState<Stats | null>(null);
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data: Stats) => setStats(data))
      .catch(() => {/* silently ignore — stats are non-critical */});
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-14"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-xl font-bold text-[var(--color-text-primary)] mb-2 animate-reveal-text"
          style={{ animationDelay: "0ms" }}
        >
          The facilitator network — growing worldwide
        </h2>
        <p
          className="text-[var(--color-text-secondary)] text-sm mb-10 max-w-md mx-auto animate-fade-up"
          style={{ animationDelay: "120ms" }}
        >
          Physical crypto exchange shops and OTC desks verified by the community. The ground
          layer of the JustZappIt payment network.
        </p>

        <div className="flex flex-wrap justify-center divide-x divide-[var(--color-border)] mb-10">
          <StatItem value={stats?.stores ?? null} label="Facilitators listed" delay={0} started={inView} />
          <StatItem value={stats?.countries ?? null} label="Countries" delay={100} started={inView} />
          <StatItem value={stats?.cities ?? null} label="Cities" delay={200} started={inView} />
        </div>

        <Link
          href="/directory"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm transition-colors"
        >
          Browse the directory and join the network →
        </Link>
      </div>
    </section>
  );
}
