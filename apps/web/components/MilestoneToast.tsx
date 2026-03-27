// SPDX-License-Identifier: AGPL-3.0-only
"use client";

import { useEffect, useRef, useState } from "react";
import { supabase } from "@/lib/supabase";
import { STORE_MILESTONES, detectMilestone } from "@/lib/milestones";
import { generateMilestoneTweet } from "@/lib/x-copy";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function MilestoneToast() {
  const [milestone, setMilestone] = useState<number | null>(null);
  const countRef = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Fetch initial count
    supabase
      .from("stores")
      .select("id", { count: "exact", head: true })
      .then(({ count }) => {
        if (count !== null) countRef.current = count;
      });

    const channel = supabase
      .channel("milestone-watcher")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "stores" },
        () => {
          if (countRef.current === null) return;
          const prev = countRef.current;
          const next = prev + 1;
          countRef.current = next;

          const hit = detectMilestone(prev, next, STORE_MILESTONES);
          if (hit !== null) {
            setMilestone(hit);
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setMilestone(null), 8000);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (milestone === null) return null;

  const tweetText = generateMilestoneTweet(milestone);
  const xHref = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-primary text-white rounded-xl shadow-lg px-6 py-4 flex items-center gap-4 max-w-sm text-sm animate-toast-in"
    >
      <div>
        <p className="font-bold">🎉 {milestone} facilitators listed!</p>
        <p className="opacity-90 text-xs mt-0.5">The network keeps growing.</p>
      </div>
      <a
        href={xHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-3 py-1.5 text-xs font-semibold whitespace-nowrap"
      >
        <XIcon className="h-3 w-3" />
        Share
      </a>
    </div>
  );
}
