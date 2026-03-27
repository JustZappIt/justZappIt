-- SPDX-License-Identifier: AGPL-3.0-only
-- Migration 007: Add submitter_hash to stores table for leaderboard tracking

ALTER TABLE stores ADD COLUMN IF NOT EXISTS submitter_hash TEXT;

-- Backfill from submissions table where a matching new_store submission exists.
-- Uses the ip_hash from the submission that created the store.
UPDATE stores s
SET submitter_hash = sub.ip_hash
FROM submissions sub
WHERE sub.store_id = s.id
  AND sub.type = 'new_store'
  AND sub.status = 'live'
  AND s.submitter_hash IS NULL;

-- Index for leaderboard queries
CREATE INDEX IF NOT EXISTS stores_submitter_hash_idx ON stores(submitter_hash);
