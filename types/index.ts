// types/index.ts — shared TypeScript types

export type ProductWithCategory = {
  id: string
  name: string
  slug: string
  description: string
  price: number
  comparePrice: number | null
  images: string[]
  stock: number
  sku: string
  amazonAsin: string | null
  amazonUrl: string | null
  isPublished: boolean
  isFeatured: boolean
  tags: string[]
  category: { id: string; name: string; slug: string }
  createdAt: string
}

export type CartItem = {
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  amazonAsin: string | null
  amazonUrl: string | null
}

export type DashboardStats = {
  totalRevenue: number
  totalOrders: number
  totalProducts: number
  totalCustomers: number
  unreadMessages: number
  revenueChartData: { date: string; revenue: number }[]
  orderStatusBreakdown: { status: string; count: number }[]
  topProducts: { name: string; sales: number }[]
}

export type MessageWithUser = {
  id: string
  name: string
  email: string
  subject: string
  body: string
  status: 'UNREAD' | 'READ' | 'REPLIED' | 'ARCHIVED'
  reply: string | null
  repliedAt: string | null
  createdAt: string
  user: { id: string; name: string | null } | null
}
