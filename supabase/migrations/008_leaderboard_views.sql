-- SPDX-License-Identifier: AGPL-3.0-only
-- Migration 008: Leaderboard views — queries submissions table (ip_hash)
-- joined to stores for accurate submitter tracking.

CREATE OR REPLACE VIEW leaderboard_weekly AS
SELECT
  sub.ip_hash                                                                     AS submitter_hash,
  COUNT(*) FILTER (WHERE s.created_at >= NOW() - INTERVAL '7 days')              AS stores_week,
  COUNT(*)                                                                         AS stores_all_time,
  ROW_NUMBER() OVER (
    ORDER BY COUNT(*) FILTER (WHERE s.created_at >= NOW() - INTERVAL '7 days') DESC
  )                                                                                AS rank_weekly,
  ROW_NUMBER() OVER (ORDER BY COUNT(*) DESC)                                      AS rank_all_time
FROM submissions sub
JOIN stores s ON s.id = sub.store_id
WHERE sub.type = 'new_store'
  AND sub.status = 'live'
GROUP BY sub.ip_hash;

-- Separate view for confirmation leaderboard (bonus: rewards verifiers, not just adders)
CREATE OR REPLACE VIEW confirmations_leaderboard AS
SELECT
  v.ip_hash                                                                       AS confirmer_hash,
  COUNT(*) FILTER (WHERE v.created_at >= NOW() - INTERVAL '7 days')              AS confirms_week,
  COUNT(*)                                                                         AS confirms_all_time,
  ROW_NUMBER() OVER (
    ORDER BY COUNT(*) FILTER (WHERE v.created_at >= NOW() - INTERVAL '7 days') DESC
  )                                                                                AS rank_weekly
FROM votes v
WHERE v.type = 'confirm'
GROUP BY v.ip_hash;
