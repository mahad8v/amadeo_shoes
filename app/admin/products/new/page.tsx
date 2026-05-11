// // app/admin/products/new/page.tsx
// import { prisma } from '@/lib/prisma'
// import { ProductForm } from '@/components/admin/ProductForm'

// export default async function NewProductPage() {
//   const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } })
//   return (
//     <div className="max-w-3xl">
//       <h1 className="mb-8 text-2xl font-semibold text-stone-900">Add New Shoe</h1>
//       <ProductForm categories={categories} />
//     </div>
//   )
// }
