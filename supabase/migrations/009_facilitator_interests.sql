-- SPDX-License-Identifier: AGPL-3.0-only
-- Migration 009: Facilitator interest capture
--
-- Stores opt-in interest from people who want to become a facilitator
-- (shop owners / OTC desks) in the JustZappIt payment network.
-- Mirrors the "I Want to Become a Facilitator" flow from the Android app.

CREATE TABLE facilitator_interests (
  id                   UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  email                TEXT        NOT NULL,
  payment_systems      TEXT[]      NOT NULL DEFAULT '{}',
  other_payment_system TEXT,
  source               TEXT        NOT NULL DEFAULT 'homepage',
  created_at           TIMESTAMPTZ DEFAULT NOW(),
  notified             BOOLEAN     DEFAULT FALSE,
  notified_at          TIMESTAMPTZ
);

-- One interest record per email address
CREATE UNIQUE INDEX facilitator_interests_email_idx
  ON facilitator_interests (email);

CREATE INDEX facilitator_interests_created_idx
  ON facilitator_interests (created_at);

ALTER TABLE facilitator_interests ENABLE ROW LEVEL SECURITY;

-- Anyone can INSERT without authentication
CREATE POLICY "Open insert"
  ON facilitator_interests
  FOR INSERT
  WITH CHECK (TRUE);

-- SELECT is blocked for the anon role; service role bypasses RLS
