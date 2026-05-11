// // app/admin/dashboard/page.tsx
// import { prisma } from '@/lib/prisma'
// import { StatsCards } from '@/components/admin/StatsCards'
// import { RevenueChart } from '@/components/admin/RevenueChart'
// import { RecentOrders } from '@/components/admin/RecentOrders'
// import { MessageInbox } from '@/components/admin/MessageInbox'
// import { TopProducts } from '@/components/admin/TopProducts'
// import { startOfMonth, subDays, format } from 'date-fns'

// export default async function DashboardPage() {
//   const [
//     totalRevenue,
//     totalOrders,
//     totalProducts,
//     totalCustomers,
//     unreadMessages,
//     recentOrders,
//     recentMessages,
//     ordersByStatus,
//   ] = await Promise.all([
//     // Revenue — sum of all delivered/shipped order totals
//     prisma.order.aggregate({
//       _sum: { total: true },
//       where: { status: { in: ['DELIVERED', 'SHIPPED'] } },
//     }),
//     prisma.order.count(),
//     prisma.product.count({ where: { isPublished: true } }),
//     prisma.user.count({ where: { role: 'CUSTOMER' } }),
//     prisma.message.count({ where: { status: 'UNREAD' } }),

//     // Recent orders for the table
//     prisma.order.findMany({
//       take: 10,
//       orderBy: { createdAt: 'desc' },
//       include: { user: { select: { name: true, email: true } }, items: true },
//     }),

//     // Unread messages for inbox preview
//     prisma.message.findMany({
//       where: { status: 'UNREAD' },
//       take: 5,
//       orderBy: { createdAt: 'desc' },
//     }),

//     // Orders grouped by status
//     prisma.order.groupBy({ by: ['status'], _count: true }),
//   ])

//   // Revenue last 30 days — one entry per day
//   const last30 = Array.from({ length: 30 }, (_, i) => subDays(new Date(), 29 - i))
//   const revenueChart = await Promise.all(
//     last30.map(async (day) => {
//       const start = new Date(day.setHours(0, 0, 0, 0))
//       const end   = new Date(day.setHours(23, 59, 59, 999))
//       const agg = await prisma.order.aggregate({
//         _sum: { total: true },
//         where: { createdAt: { gte: start, lte: end }, status: { in: ['DELIVERED', 'SHIPPED'] } },
//       })
//       return { date: format(start, 'MMM d'), revenue: agg._sum.total ?? 0 }
//     })
//   )

//   const stats = {
//     totalRevenue:  totalRevenue._sum.total ?? 0,
//     totalOrders,
//     totalProducts,
//     totalCustomers,
//     unreadMessages,
//   }

//   return (
//     <div className="space-y-8">
//       <h1 className="text-2xl font-semibold text-stone-900">Dashboard</h1>

//       <StatsCards stats={stats} />

//       <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
//         <div className="xl:col-span-2">
//           <RevenueChart data={revenueChart} />
//         </div>
//         <TopProducts />
//       </div>

//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//         <RecentOrders orders={recentOrders as any} />
//         <MessageInbox messages={recentMessages as any} unreadCount={unreadMessages} />
//       </div>
//     </div>
//   )
// }
