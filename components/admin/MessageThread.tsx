// // components/admin/MessageThread.tsx
// 'use client'

// import { useState, useTransition } from 'react'
// import { toast } from 'sonner'
// import type { MessageWithUser } from '@/types'

// export function MessageThread({ message }: { message: MessageWithUser }) {
//   const [reply, setReply]     = useState(message.reply ?? '')
//   const [pending, startT]     = useTransition()

//   async function send() {
//     startT(async () => {
//       const res = await fetch(`/api/messages/${message.id}/reply`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ reply }),
//       })
//       if (res.ok) toast.success('Reply sent!')
//       else        toast.error('Failed to send reply')
//     })
//   }

//   async function archive() {
//     startT(async () => {
//       await fetch(`/api/messages/${message.id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: 'ARCHIVED' }),
//       })
//       toast.success('Archived')
//     })
//   }

//   return (
//     <div className="flex h-full flex-col rounded-2xl bg-white shadow-sm overflow-hidden">
//       {/* Header */}
//       <div className="flex items-start justify-between border-b border-stone-100 p-6">
//         <div>
//           <h2 className="text-lg font-semibold text-stone-900">{message.subject}</h2>
//           <p className="mt-0.5 text-sm text-stone-500">
//             From <span className="font-medium text-stone-700">{message.name}</span>
//             {' '}·{' '}
//             <a href={`mailto:${message.email}`} className="text-amber-600 hover:underline">
//               {message.email}
//             </a>
//             {' '}·{' '}
//             {new Date(message.createdAt).toLocaleDateString('en-GB', { dateStyle: 'long' })}
//           </p>
//         </div>

//         <div className="flex gap-2">
//           <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${
//             message.status === 'UNREAD'  ? 'bg-amber-100 text-amber-700' :
//             message.status === 'REPLIED' ? 'bg-green-100 text-green-700' :
//             'bg-stone-100 text-stone-600'
//           }`}>
//             {message.status}
//           </span>
//           <button
//             onClick={archive}
//             className="rounded-lg px-3 py-1 text-xs text-stone-500 hover:bg-stone-100"
//           >
//             Archive
//           </button>
//         </div>
//       </div>

//       {/* Message body */}
//       <div className="flex-1 overflow-y-auto p-6">
//         <p className="whitespace-pre-wrap leading-relaxed text-stone-700">{message.body}</p>

//         {message.reply && (
//           <div className="mt-8 rounded-xl bg-stone-50 p-4">
//             <p className="mb-2 text-xs font-medium text-stone-500">Your reply</p>
//             <p className="whitespace-pre-wrap text-sm text-stone-700">{message.reply}</p>
//           </div>
//         )}
//       </div>

//       {/* Reply box */}
//       <div className="border-t border-stone-100 p-4">
//         <textarea
//           value={reply}
//           onChange={(e) => setReply(e.target.value)}
//           rows={4}
//           placeholder="Type your reply…"
//           className="w-full rounded-xl border border-stone-200 bg-stone-50 p-3 text-sm focus:border-stone-400 focus:outline-none resize-none"
//         />
//         <div className="mt-2 flex justify-end">
//           <button
//             onClick={send}
//             disabled={pending || !reply.trim()}
//             className="rounded-xl bg-stone-900 px-5 py-2 text-sm font-medium text-white hover:bg-stone-700 disabled:opacity-40"
//           >
//             {pending ? 'Sending…' : 'Send reply'}
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }
