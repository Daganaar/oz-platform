import 'server-only';
import { createClient } from '@supabase/supabase-js';

/**
 * Service-role server client (bypasses RLS). Server-only — used
 * exclusively inside app/api/leads route handlers.
 */
export function createServiceClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}
