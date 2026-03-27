-- SPDX-License-Identifier: AGPL-3.0-only
-- Migration 006: Waitlist table for app launch notifications

CREATE TABLE waitlist (
  id          UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email       TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW(),
  source      TEXT DEFAULT 'app-page',
  -- source enum: 'app-page' | 'sticky-bar' | 'x-link' | 'directory-page' | 'footer'
  notified    BOOLEAN DEFAULT FALSE,
  notified_at TIMESTAMPTZ
);

CREATE UNIQUE INDEX waitlist_email_idx ON waitlist(email);
CREATE INDEX waitlist_created_idx ON waitlist(created_at);

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (no login required to join waitlist)
CREATE POLICY "Open insert" ON waitlist
  FOR INSERT WITH CHECK (TRUE);

-- SELECT is blocked for anon role by default RLS — service role bypasses RLS
-- No additional SELECT policy needed; reads happen server-side via service client
