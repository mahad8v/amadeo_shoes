// // prisma/seed.ts
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   // ── Categories ────────────────────────────────────────────────────────────
//   const oxford = await prisma.category.upsert({
//     where: { slug: 'oxford' },
//     update: {},
//     create: { name: 'Oxford', slug: 'oxford' },
//   });
//   const loafer = await prisma.category.upsert({
//     where: { slug: 'loafer' },
//     update: {},
//     create: { name: 'Loafer', slug: 'loafer' },
//   });
//   const boot = await prisma.category.upsert({
//     where: { slug: 'boot' },
//     update: {},
//     create: { name: 'Boot', slug: 'boot' },
//   });

//   // ── Demo Products ─────────────────────────────────────────────────────────
//   await prisma.product.upsert({
//     where: { slug: 'classic-oxford-brown' },
//     update: {},
//     create: {
//       name: 'Classic Oxford — Brown',
//       slug: 'classic-oxford-brown',
//       description:
//         'Full-grain vegetable-tanned leather Oxford with double-leather sole.',
//       price: 189,
//       comparePrice: 230,
//       sku: 'OX-BR-001',
//       stock: 24,
//       categoryId: oxford.id,
//       isPublished: true,
//       isFeatured: true,
//       tags: ['formal', 'brown', 'classic'],
//       amazonAsin: 'B09EXAMPLE1', // replace with real ASIN once listed on Amazon
//       images: [],
//     },
//   });

//   await prisma.product.upsert({
//     where: { slug: 'penny-loafer-black' },
//     update: {},
//     create: {
//       name: 'Penny Loafer — Black',
//       slug: 'penny-loafer-black',
//       description: 'Hand-stitched calf leather loafer. Rubber-commuter sole.',
//       price: 165,
//       sku: 'LF-BK-001',
//       stock: 18,
//       categoryId: loafer.id,
//       isPublished: true,
//       isFeatured: true,
//       tags: ['casual', 'black', 'loafer'],
//       amazonAsin: 'B09EXAMPLE2',
//       images: [],
//     },
//   });

//   console.log('✅ Seed complete');
// }

// main()
//   .catch(console.error)
//   .finally(() => prisma.$disconnect());
