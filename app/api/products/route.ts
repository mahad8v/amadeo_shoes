// app/api/products/route.ts
import { NextRequest, NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma'
import { z } from 'zod';

const productSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string(),
  price: z.number().positive(),
  comparePrice: z.number().positive().optional(),
  sku: z.string(),
  stock: z.number().int().min(0),
  categoryId: z.string(),
  tags: z.array(z.string()).default([]),
  amazonAsin: z.string().optional(),
  amazonUrl: z.string().url().optional(),
  isPublished: z.boolean().default(false),
  isFeatured: z.boolean().default(false),
  images: z.array(z.string()).default([]),
});

// GET /api/products — list all published products (with optional category filter)
// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const category = searchParams.get('category');
//   const featured = searchParams.get('featured') === 'true';
//   const admin = searchParams.get('admin') === 'true';

//   const products = await prisma.product.findMany({
//     where: {
//       ...(admin ? {} : { isPublished: true }),
//       ...(category ? { category: { slug: category } } : {}),
//       ...(featured ? { isFeatured: true } : {}),
//     },
//     include: { category: true },
//     orderBy: { createdAt: 'desc' },
//   });

//   return NextResponse.json(products);
// }

// POST /api/products — create a product (admin only)
export async function POST(req: NextRequest) {
  // TODO: verify admin session via Supabase
  const body = await req.json();
  const parsed = productSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 });

  // const product = await prisma.product.create({ data: parsed.data });
  // return NextResponse.json(product, { status: 201 });
}
