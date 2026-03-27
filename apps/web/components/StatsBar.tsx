// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Stats {
  stores: number;
  countries: number;
  cities: number;
}

function StatItem({ value, label }: { value: number | null; label: string }) {
  return (
    <div className="text-center px-6">
      <p className="text-4xl font-extrabold text-primary tracking-tight">
        {value === null ? "—" : value}
      </p>
      <p className="text-sm text-[var(--color-text-secondary)] mt-1 font-medium">{label}</p>
    </div>
  );
}

export default function StatsBar() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("/api/stats")
      .then((r) => r.json())
      .then((data: Stats) => setStats(data))
      .catch(() => {/* silently ignore — stats are non-critical */});
  }, []);

  return (
    <section className="bg-[var(--color-surface)] border-y border-[var(--color-border)] py-14">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
          The facilitator network — growing worldwide
        </h2>
        <p className="text-[var(--color-text-secondary)] text-sm mb-10 max-w-md mx-auto">
          Physical crypto exchange shops and OTC desks verified by the community. The ground
          layer of the JustZappIt payment network.
        </p>

        <div className="flex flex-wrap justify-center divide-x divide-[var(--color-border)] mb-10">
          <StatItem value={stats?.stores ?? null} label="Facilitators listed" />
          <StatItem value={stats?.countries ?? null} label="Countries" />
          <StatItem value={stats?.cities ?? null} label="Cities" />
        </div>

        <Link
          href="/directory"
          className="inline-flex items-center gap-2 text-primary hover:underline font-semibold text-sm"
        >
          Browse the directory and join the network →
        </Link>
      </div>
    </section>
  );
}
