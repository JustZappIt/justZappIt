// SPDX-License-Identifier: AGPL-3.0-only
import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export const revalidate = 30;

export async function GET() {
  const { data, error } = await supabase
    .from("stores")
    .select("country, city")
    .neq("verification_status", "closed");

  if (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }

  const rows = data ?? [];
  const countries = new Set(rows.map((r) => r.country)).size;
  const cities = new Set(rows.map((r) => r.city)).size;

  return NextResponse.json({ stores: rows.length, countries, cities });
}
