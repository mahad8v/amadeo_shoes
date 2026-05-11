// app/(store)/contact/page.tsx
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'

const schema = z.object({
  name:    z.string().min(2, 'Name is required'),
  email:   z.string().email('Invalid email'),
  subject: z.string().min(2, 'Subject is required'),
  body:    z.string().min(10, 'Message must be at least 10 characters'),
})
type FormValues = z.infer<typeof schema>

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(values: FormValues) {
    const res = await fetch('/api/messages', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(values),
    })
    if (res.ok) {
      setSent(true)
      toast.success('Message sent! We\'ll get back to you soon.')
    } else {
      toast.error('Something went wrong, please try again.')
    }
  }

  const field = 'w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-stone-400 focus:outline-none'
  const label = 'mb-1.5 block text-sm font-medium text-stone-700'
  const err   = 'mt-1 text-xs text-red-500'

  if (sent) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center">
        <div className="text-5xl">✉️</div>
        <h1 className="mt-4 text-2xl font-semibold">Message received!</h1>
        <p className="mt-2 text-stone-500">We typically reply within 24 hours.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">Get in touch</h1>
      <p className="mb-8 text-stone-500">Questions about sizing, bespoke orders, or returns? We&apos;re here to help.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-2xl bg-white p-8 shadow-sm">
        <div>
          <label className={label}>Name</label>
          <input {...register('name')} className={field} />
          {errors.name && <p className={err}>{errors.name.message}</p>}
        </div>
        <div>
          <label className={label}>Email</label>
          <input {...register('email')} type="email" className={field} />
          {errors.email && <p className={err}>{errors.email.message}</p>}
        </div>
        <div>
          <label className={label}>Subject</label>
          <input {...register('subject')} className={field} />
        </div>
        <div>
          <label className={label}>Message</label>
          <textarea {...register('body')} rows={5} className={field} />
          {errors.body && <p className={err}>{errors.body.message}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-stone-900 py-3 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-50"
        >
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </form>
    </div>
  )
}
