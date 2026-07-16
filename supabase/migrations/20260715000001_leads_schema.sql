-- ─────────────────────────────────────────────────────────────────
-- Migration 20260715000001 — leads table (anonymous public lead capture)
-- No auth, no RLS policies: all access is via the service-role key from
-- app/api/leads/route.ts and app/api/leads/[id]/route.ts. RLS is enabled
-- with zero policies so that even the anon/authenticated Postgres roles
-- (which this project never issues keys for, but which exist by default
-- in every Supabase project) get nothing — a deny-by-default posture on
-- top of "no anon key is ever shipped to the browser" belt-and-suspenders.
-- ─────────────────────────────────────────────────────────────────

CREATE TABLE public.leads (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at  timestamptz NOT NULL DEFAULT now(),
  source      text NOT NULL CHECK (source IN (
                'coupon',
                'north_contact',
                'long_term'
              )),
  email       text,
  whatsapp    text,
  name        text,
  phone       text
);

CREATE INDEX leads_source_idx ON public.leads(source);
CREATE INDEX leads_created_at_idx ON public.leads(created_at);

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
-- Intentionally zero policies: only the service-role key (used exclusively
-- server-side) can read/write this table.
