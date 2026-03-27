// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useRef, useState } from "react";
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
  // Track IDs that arrived via realtime (not the initial fetch) so we can animate only them
  const newIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    // Initial fetch — no entrance animation on these
    supabase
      .from("stores")
      .select("id, operator_name, city, country, accepts_crypto, created_at")
      .order("created_at", { ascending: false })
      .limit(5)
      .then(({ data, error }) => {
        if (error) {
          console.error("[JustAddedFeed] Failed to fetch recent stores:", error);
          return;
        }
        if (data) setStores(data as RecentStore[]);
      });

    // Realtime subscription — mark new arrivals for animation
    const channel = supabase
      .channel("just-added-stores")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "stores" },
        (payload) => {
          const incoming = payload.new as RecentStore;
          newIdsRef.current.add(incoming.id);
          setStores((prev) => [incoming, ...prev].slice(0, 5));
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
        {stores.map((s) => {
          const isNew = newIdsRef.current.has(s.id);
          return (
            <div
              key={s.id}
              className={`text-sm ${isNew ? "animate-drop-in" : ""}`}
            >
              <p className="font-semibold text-[var(--color-text-primary)] truncate">{s.operator_name}</p>
              <p className="text-[var(--color-text-secondary)] text-xs">
                {s.city}, {s.country}
              </p>
              {s.accepts_crypto && s.accepts_crypto.length > 0 && (
                <p className="text-primary text-xs mt-0.5">{s.accepts_crypto.join(" · ")}</p>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
