// SPDX-License-Identifier: AGPL-3.0-only

export const STORE_MILESTONES = [50, 100, 150, 200, 250, 500, 1000];
export const COUNTRY_MILESTONES = [5, 10, 15, 20, 25, 50];

/**
 * Returns the milestone that was just crossed when the count moved from
 * prev to next, or null if no milestone was crossed.
 */
export function detectMilestone(
  prev: number,
  next: number,
  list: number[]
): number | null {
  return list.find((m) => prev < m && next >= m) ?? null;
}
