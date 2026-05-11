// components/admin/StatsCards.tsx
interface Stats {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  unreadMessages: number
}

export function StatsCards({ stats }: { stats: Stats }) {
  const cards = [
    { label: 'Total Revenue',   value: `$${stats.totalRevenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}`, color: 'text-emerald-600' },
    { label: 'Total Orders',    value: stats.totalOrders.toLocaleString(),    color: 'text-blue-600' },
    { label: 'Products Live',   value: stats.totalProducts.toLocaleString(),  color: 'text-violet-600' },
    { label: 'Customers',       value: stats.totalCustomers.toLocaleString(), color: 'text-stone-900' },
    { label: 'Unread Messages', value: stats.unreadMessages.toLocaleString(), color: 'text-amber-600' },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-5">
      {cards.map(({ label, value, color }) => (
        <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
          <p className="text-sm text-stone-500">{label}</p>
          <p className={`mt-1 text-2xl font-semibold ${color}`}>{value}</p>
        </div>
      ))}
    </div>
  )
}
