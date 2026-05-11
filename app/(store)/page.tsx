// // app/(store)/page.tsx
// import { prisma } from '@/lib/prisma'
// import { ProductCard } from '@/components/store/ProductCard'
// import { HeroBanner } from '@/components/store/HeroBanner'

// export default async function HomePage() {
//   const featured = await prisma.product.findMany({
//     where: { isPublished: true, isFeatured: true },
//     include: { category: true },
//     take: 8,
//     orderBy: { createdAt: 'desc' },
//   })

//   return (
//     <>
//       <HeroBanner />

//       <section className="mx-auto max-w-7xl px-4 py-16">
//         <h2 className="mb-8 text-3xl font-semibold tracking-tight">Featured Shoes</h2>
//         <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
//           {featured.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </section>
//     </>
//   )
// }

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}
