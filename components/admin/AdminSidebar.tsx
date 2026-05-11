// components/admin/AdminSidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/admin/dashboard',  label: 'Dashboard',  icon: '⬛' },
  { href: '/admin/products',   label: 'Products',    icon: '👟' },
  { href: '/admin/orders',     label: 'Orders',      icon: '📦' },
  { href: '/admin/messages',   label: 'Messages',    icon: '✉️'  },
  { href: '/admin/customers',  label: 'Customers',   icon: '👥' },
  { href: '/admin/settings',   label: 'Settings',    icon: '⚙️'  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-stone-200 bg-white px-4 py-6">
      <div className="mb-8 px-2">
        <span className="text-lg font-bold tracking-tight text-stone-900">LeatherCraft</span>
        <p className="text-xs text-stone-400">Admin</p>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map(({ href, label, icon }) => {
          const active = pathname.startsWith(href)
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition ${
                active
                  ? 'bg-stone-900 text-white'
                  : 'text-stone-600 hover:bg-stone-100'
              }`}
            >
              <span aria-hidden>{icon}</span>
              {label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-4 border-t border-stone-100 pt-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-stone-500 hover:bg-stone-100"
        >
          ← View Store
        </Link>
      </div>
    </aside>
  )
}
