// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface RecentStore {
  id: string;
  operator_name: string;
  city: string;
  country: string;
  accepts_crypto: string[] | null;
  created_at: string;
}

export default function JustAddedFeed() {
  const [stores, setStores] = useState<RecentStore[]>([]);

  useEffect(() => {
    // Initial fetch
    supabase
      .from("stores")
      .select("id, operator_name, city, country, accepts_crypto, created_at")
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data }) => {
        if (data) setStores(data as RecentStore[]);
      });

    // Realtime subscription
    const channel = supabase
      .channel("just-added-stores")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "stores" },
        (payload) => {
          setStores((prev) => [payload.new as RecentStore, ...prev].slice(0, 5));
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (stores.length === 0) return null;

  return (
    <aside className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4">
      <div className="flex items-center gap-2 mb-3">
        <span
          className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"
          aria-hidden="true"
        />
        <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
          Recently added
        </span>
      </div>
      <div className="space-y-3">
        {stores.map((s) => (
          <div key={s.id} className="text-sm">
            <p className="font-semibold text-[var(--color-text-primary)] truncate">{s.operator_name}</p>
            <p className="text-[var(--color-text-secondary)] text-xs">
              {s.city}, {s.country}
            </p>
            {s.accepts_crypto && s.accepts_crypto.length > 0 && (
              <p className="text-primary text-xs mt-0.5">{s.accepts_crypto.join(" · ")}</p>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
