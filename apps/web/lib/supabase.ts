// SPDX-License-Identifier: AGPL-3.0-only
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing required Supabase environment variables: NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
}

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

let _serviceClient: SupabaseClient | null = null;

export function getServiceClient(): SupabaseClient {
  if (!_serviceClient) {
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!serviceKey) {
      throw new Error("Missing required environment variable: SUPABASE_SERVICE_ROLE_KEY");
    }
    _serviceClient = createClient(supabaseUrl, serviceKey);
  }
  return _serviceClient;
}
