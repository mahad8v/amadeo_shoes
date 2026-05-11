// lib/supabase/client.ts  — browser client
// import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // return createBrowserClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  // );
}

// ─────────────────────────────────────────────────────────────────────────────
// lib/supabase/server.ts  — server-side client (RSC / Server Actions)
// ─────────────────────────────────────────────────────────────────────────────
// import { createServerClient } from '@supabase/ssr'
// import { cookies } from 'next/headers'
//
// export async function createServerSupabaseClient() {
//   const cookieStore = cookies()
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     { cookies: { getAll: () => cookieStore.getAll(),
//                  setAll: (cs) => cs.forEach(({ name, value, options }) =>
//                    cookieStore.set(name, value, options)) } }
//   )
// }
//
// export async function createAdminSupabaseClient() {
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.SUPABASE_SERVICE_ROLE_KEY!,   // bypasses RLS
//     { cookies: { getAll: () => [], setAll: () => {} } }
//   )
// }
