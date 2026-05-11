// app/api/messages/route.ts  — contact form submission (public)
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  subject: z.string().min(2),
  body:    z.string().min(10),
  userId:  z.string().optional(),
})

export async function POST(req: NextRequest) {
  const body   = await req.json()
  const parsed = schema.safeParse(body)
  if (!parsed.success) return NextResponse.json(parsed.error, { status: 400 })

  const message = await prisma.message.create({
    data: {
      ...parsed.data,
      status: 'UNREAD',
    },
  })
  return NextResponse.json(message, { status: 201 })
}

// ─────────────────────────────────────────────────────────────────────────────
// app/api/messages/[id]/reply/route.ts — admin sends a reply (sends email too)
// ─────────────────────────────────────────────────────────────────────────────
// import { Resend } from 'resend'   ← add 'resend' to deps to send real emails
// const resend = new Resend(process.env.RESEND_API_KEY)
//
// export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
//   const { reply } = await req.json()
//   const msg = await prisma.message.update({
//     where: { id: params.id },
//     data:  { reply, repliedAt: new Date(), status: 'REPLIED' },
//   })
//
//   // Send email to customer
//   await resend.emails.send({
//     from:    'LeatherCraft <hello@yourdomain.com>',
//     to:      msg.email,
//     subject: `Re: ${msg.subject}`,
//     text:    reply,
//   })
//
//   return NextResponse.json(msg)
// }
