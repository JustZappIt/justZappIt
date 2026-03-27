// SPDX-License-Identifier: AGPL-3.0-only
import { NextResponse } from "next/server";
import { getServiceClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

interface LeaderboardRow {
  submitter_hash: string;
  stores_week: number;
  stores_all_time: number;
  rank_weekly: number;
  rank_all_time: number;
}

export async function GET() {
  const supabaseAdmin = getServiceClient();

  const { data, error } = await supabaseAdmin
    .from("leaderboard_weekly")
    .select("submitter_hash, stores_week, stores_all_time, rank_weekly, rank_all_time")
    .order("rank_weekly", { ascending: true })
    .limit(20);

  if (error) {
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 });
  }

  // Truncate hash to first 6 chars for display — never expose full IP hash
  const entries = (data as LeaderboardRow[]).map((row) => ({
    display: row.submitter_hash?.slice(0, 6) ?? "??????",
    stores_week: row.stores_week,
    stores_all_time: row.stores_all_time,
    rank_weekly: row.rank_weekly,
    rank_all_time: row.rank_all_time,
  }));

  return NextResponse.json({ entries });
}
