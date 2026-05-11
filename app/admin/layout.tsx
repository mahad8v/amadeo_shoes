// app/admin/layout.tsx
import { redirect } from 'next/navigation'
import { AdminSidebar } from '@/components/admin/AdminSidebar'
// import { createServerSupabaseClient } from '@/lib/supabase/server'
// import { prisma } from '@/lib/prisma'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // ── Auth guard ────────────────────────────────────────────────────────────
  // const supabase = await createServerSupabaseClient()
  // const { data: { user } } = await supabase.auth.getUser()
  // if (!user) redirect('/login')
  //
  // const dbUser = await prisma.user.findUnique({ where: { supabaseId: user.id } })
  // if (!dbUser || dbUser.role !== 'ADMIN') redirect('/')

  return (
    <div className="flex min-h-screen bg-stone-50">
      <AdminSidebar />
      <main className="flex-1 overflow-auto p-8">{children}</main>
    </div>
  )
}
