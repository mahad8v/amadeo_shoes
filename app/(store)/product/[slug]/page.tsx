// // app/(store)/product/[slug]/page.tsx
// import { notFound } from 'next/navigation'
// import Image from 'next/image'
// import { prisma } from '@/lib/prisma'
// import { buildAmazonUrl } from '@/lib/amazon'
// import { AmazonBuyButton } from '@/components/store/AmazonBuyButton'
// import { AddToCartButton } from '@/components/store/AddToCartButton'
// import { ReviewList } from '@/components/store/ReviewList'

// interface Props { params: { slug: string } }

// export async function generateStaticParams() {
//   const products = await prisma.product.findMany({ select: { slug: true } })
//   return products.map((p) => ({ slug: p.slug }))
// }

// export default async function ProductPage({ params }: Props) {
//   const product = await prisma.product.findUnique({
//     where: { slug: params.slug, isPublished: true },
//     include: { category: true, reviews: { include: { user: true } } },
//   })

//   if (!product) notFound()

//   const amazonUrl = product.amazonAsin
//     ? buildAmazonUrl(product.amazonAsin, product.amazonUrl)
//     : null

//   return (
//     <div className="mx-auto max-w-7xl px-4 py-12">
//       <div className="grid gap-12 lg:grid-cols-2">

//         {/* Images */}
//         <div className="space-y-4">
//           <div className="relative aspect-square overflow-hidden rounded-2xl bg-stone-100">
//             <Image
//               src={product.images[0] ?? '/images/placeholder.jpg'}
//               alt={product.name}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>
//           <div className="grid grid-cols-4 gap-2">
//             {product.images.slice(1).map((src, i) => (
//               <div key={i} className="relative aspect-square overflow-hidden rounded-lg bg-stone-100">
//                 <Image src={src} alt="" fill className="object-cover" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Details */}
//         <div className="space-y-6">
//           <p className="text-sm text-stone-500">{product.category.name}</p>
//           <h1 className="text-4xl font-semibold tracking-tight">{product.name}</h1>

//           <div className="flex items-baseline gap-3">
//             <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
//             {product.comparePrice && (
//               <span className="text-xl text-stone-400 line-through">
//                 ${product.comparePrice.toFixed(2)}
//               </span>
//             )}
//           </div>

//           <p className="leading-relaxed text-stone-600">{product.description}</p>

//           <div className="flex flex-col gap-3 pt-4">
//             {/* Add to cart (stored locally + checkout via Stripe) */}
//             <AddToCartButton product={product} />

//             {/* Amazon: clicking this opens the product on Amazon */}
//             {amazonUrl && (
//               <AmazonBuyButton href={amazonUrl} />
//             )}
//           </div>

//           <div className="text-sm text-stone-500">
//             SKU: {product.sku} · Stock: {product.stock > 0 ? product.stock : 'Out of stock'}
//           </div>
//         </div>
//       </div>

//       <ReviewList reviews={product.reviews} />
//     </div>
//   )
// }

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}
