-- SPDX-License-Identifier: AGPL-3.0-only
-- Migration 010: Drop the legacy store-directory schema.
--
-- JustZappIt pivoted from a crypto store directory to the Zapp app. The
-- store / vote / submission / facilitator / leaderboard objects are no longer
-- used by the website — only `waitlist` (006) and `rate_limits` + the
-- `check_rate_limit` RPC (003/004) remain live. This migration removes the
-- dead objects. It is additive: earlier migrations are left intact as history,
-- so a fresh `db reset` replays them and this migration lands the final state.

-- Views first (they read stores / votes / submissions).
DROP VIEW IF EXISTS confirmations_leaderboard;
DROP VIEW IF EXISTS leaderboard_weekly;

-- Tables. votes & submissions FK stores; CASCADE also clears their triggers
-- and the store-directory indexes (idx_stores_*, idx_votes_*, idx_submissions_*).
DROP TABLE IF EXISTS votes CASCADE;
DROP TABLE IF EXISTS submissions CASCADE;
DROP TABLE IF EXISTS stores CASCADE;
DROP TABLE IF EXISTS facilitator_interests CASCADE;

-- Trigger functions that only ever served the store tables.
DROP FUNCTION IF EXISTS recalculate_store_status() CASCADE;
DROP FUNCTION IF EXISTS maybe_apply_edit_submission() CASCADE;
DROP FUNCTION IF EXISTS update_updated_at() CASCADE;

-- Enum used only by stores.verification_status.
DROP TYPE IF EXISTS verification_status;
