// SPDX-License-Identifier: AGPL-3.0-only
import type { Metadata } from "next";
import Link from "next/link";
import { generateLeaderboardTweet } from "@/lib/x-copy";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Contributor Leaderboard",
  description:
    "Top community contributors who have added and verified crypto exchange shops on JustZappIt. Weekly and all-time rankings.",
  alternates: { canonical: "/leaderboard" },
};

interface LeaderboardEntry {
  display: string;
  stores_week: number;
  stores_all_time: number;
  rank_weekly: number;
  rank_all_time: number;
}

async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://justzappit.xyz";
  try {
    const res = await fetch(`${baseUrl}/api/leaderboard`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.entries ?? [];
  } catch {
    return [];
  }
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default async function LeaderboardPage() {
  const entries = await getLeaderboard();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)] tracking-tight mb-2">
          Contributor Leaderboard
        </h1>
        <p className="text-[var(--color-text-secondary)]">
          Top community contributors who have added physical crypto exchange shops to the
          JustZappIt facilitator network. Resets weekly. Identifiers are privacy-preserving
          hashes — only the first 6 characters are shown.
        </p>
      </div>

      {entries.length === 0 ? (
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-8 text-center">
          <p className="text-[var(--color-text-secondary)] mb-4">
            No entries yet this week. Be the first to add a store!
          </p>
          <Link
            href="/add"
            className="inline-flex items-center bg-primary hover:bg-[#d97411] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Add a store
          </Link>
        </div>
      ) : (
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
                <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                  Rank
                </th>
                <th className="text-left px-5 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                  Contributor
                </th>
                <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)]">
                  This week
                </th>
                <th className="text-right px-5 py-3 text-xs font-bold uppercase tracking-widest text-[var(--color-text-secondary)] hidden sm:table-cell">
                  All time
                </th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => {
                const tweetText = generateLeaderboardTweet(
                  entry.rank_weekly,
                  entry.stores_week
                );
                const xHref = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
                return (
                  <tr
                    key={entry.display}
                    className="border-b border-[var(--color-border)] last:border-0 hover:bg-[var(--color-bg)] transition-colors"
                  >
                    <td className="px-5 py-4 font-bold text-[var(--color-text-primary)]">
                      #{entry.rank_weekly}
                    </td>
                    <td className="px-5 py-4 font-mono text-[var(--color-text-primary)]">
                      {entry.display}
                    </td>
                    <td className="px-5 py-4 text-right font-semibold text-primary">
                      {entry.stores_week}
                    </td>
                    <td className="px-5 py-4 text-right text-[var(--color-text-secondary)] hidden sm:table-cell">
                      {entry.stores_all_time}
                    </td>
                    <td className="px-5 py-4 text-right">
                      <a
                        href={xHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                        aria-label={`Share rank ${entry.rank_weekly} on X`}
                      >
                        <XIcon className="h-3 w-3" />
                        Share
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          Want to climb the leaderboard? Add stores to the facilitator network.
        </p>
        <Link
          href="/add"
          className="inline-flex items-center bg-primary hover:bg-[#d97411] text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          Add a store →
        </Link>
      </div>
    </div>
  );
}
