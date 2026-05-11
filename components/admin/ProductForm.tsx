// components/admin/ProductForm.tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { extractAsinFromUrl } from '@/lib/amazon'

const schema = z.object({
  name:         z.string().min(2),
  slug:         z.string().min(2),
  description:  z.string().min(10),
  price:        z.coerce.number().positive(),
  comparePrice: z.coerce.number().positive().optional().or(z.literal('')),
  sku:          z.string().min(1),
  stock:        z.coerce.number().int().min(0),
  categoryId:   z.string().min(1),
  tags:         z.string().optional(),          // comma-separated
  amazonAsin:   z.string().optional(),          // e.g. B09XXXXXXXX
  amazonUrl:    z.string().url().optional().or(z.literal('')),
  isPublished:  z.boolean().default(false),
  isFeatured:   z.boolean().default(false),
})

type FormValues = z.infer<typeof schema>

interface Props {
  categories: { id: string; name: string }[]
  product?: Partial<FormValues> & { id?: string }
}

export function ProductForm({ categories, product }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: product ?? { isPublished: false, isFeatured: false },
  })

  // Auto-extract ASIN when admin pastes a full Amazon URL
  const amazonUrl = watch('amazonUrl')
  function handleAmazonUrlBlur() {
    if (!amazonUrl) return
    const asin = extractAsinFromUrl(amazonUrl)
    if (asin) setValue('amazonAsin', asin)
  }

  async function onSubmit(values: FormValues) {
    setLoading(true)
    try {
      const method = product?.id ? 'PUT' : 'POST'
      const url    = product?.id ? `/api/products/${product.id}` : '/api/products'
      const res    = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          tags: values.tags?.split(',').map((t) => t.trim()).filter(Boolean) ?? [],
        }),
      })
      if (!res.ok) throw new Error(await res.text())
      toast.success(product?.id ? 'Product updated!' : 'Product created!')
      router.push('/admin/products')
      router.refresh()
    } catch (e: any) {
      toast.error(e.message)
    } finally {
      setLoading(false)
    }
  }

  const field = 'block w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm focus:border-stone-400 focus:outline-none focus:ring-0'
  const label = 'mb-1.5 block text-sm font-medium text-stone-700'
  const err   = 'mt-1 text-xs text-red-500'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={label}>Name *</label>
          <input {...register('name')} className={field} />
          {errors.name && <p className={err}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label}>Slug *</label>
          <input {...register('slug')} className={field} />
        </div>
      </div>

      <div>
        <label className={label}>Description *</label>
        <textarea {...register('description')} rows={4} className={field} />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className={label}>Price ($) *</label>
          <input {...register('price')} type="number" step="0.01" className={field} />
        </div>
        <div>
          <label className={label}>Compare price ($)</label>
          <input {...register('comparePrice')} type="number" step="0.01" className={field} />
        </div>
        <div>
          <label className={label}>Stock *</label>
          <input {...register('stock')} type="number" className={field} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={label}>SKU *</label>
          <input {...register('sku')} className={field} />
        </div>
        <div>
          <label className={label}>Category *</label>
          <select {...register('categoryId')} className={field}>
            <option value="">Select…</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Amazon integration */}
      <div className="rounded-xl border border-[#FF9900]/30 bg-[#FFF8EC] p-4 space-y-4">
        <p className="text-sm font-semibold text-stone-700">
          Amazon Listing
          <span className="ml-2 text-xs font-normal text-stone-500">
            Products listed on Amazon Seller Central. Customers clicking "Buy on Amazon" are sent here.
          </span>
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={label}>Amazon URL</label>
            <input
              {...register('amazonUrl')}
              onBlur={handleAmazonUrlBlur}
              placeholder="https://www.amazon.com/dp/B09XXXXXXXX"
              className={field}
            />
            <p className="mt-1 text-xs text-stone-400">Paste full URL — ASIN extracted automatically</p>
          </div>
          <div>
            <label className={label}>Amazon ASIN</label>
            <input {...register('amazonAsin')} placeholder="B09XXXXXXXX" className={field} />
          </div>
        </div>
      </div>

      <div>
        <label className={label}>Tags (comma-separated)</label>
        <input {...register('tags')} placeholder="oxford, brogue, formal" className={field} />
      </div>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 text-sm">
          <input {...register('isPublished')} type="checkbox" className="h-4 w-4 rounded" />
          Published
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input {...register('isFeatured')} type="checkbox" className="h-4 w-4 rounded" />
          Featured on homepage
        </label>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => router.back()}
          className="rounded-xl px-5 py-2.5 text-sm text-stone-600 hover:bg-stone-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-stone-900 px-6 py-2.5 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50"
        >
          {loading ? 'Saving…' : product?.id ? 'Save changes' : 'Create product'}
        </button>
      </div>
    </form>
  )
}
