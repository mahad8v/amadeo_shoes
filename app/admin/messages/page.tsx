// // app/admin/messages/page.tsx
// import { prisma } from '@/lib/prisma';
// import { MessageThread } from '@/components/admin/MessageThread';

// export const dynamic = 'force-dynamic';

// export default async function MessagesPage({
//   searchParams,
// }: {
//   searchParams: { status?: string; id?: string };
// }) {
//   const status = (searchParams.status ?? 'UNREAD') as any;

//   const messages = await prisma.message.findMany({
//     where: status === 'ALL' ? {} : { status },
//     orderBy: { createdAt: 'desc' },
//     include: { user: { select: { name: true, avatar: true } } },
//   });

//   const active = searchParams.id
//     ? await prisma.message.findUnique({
//         where: { id: searchParams.id },
//         include: { user: true },
//       })
//     : (messages[0] ?? null);

//   return (
//     <div className="flex h-full gap-6">
//       {/* Sidebar list */}
//       <aside className="w-80 shrink-0 space-y-2 overflow-y-auto rounded-2xl bg-white p-4 shadow-sm">
//         <h2 className="mb-4 text-lg font-semibold">Messages</h2>

//         <div className="mb-4 flex gap-2 text-sm">
//           {['UNREAD', 'READ', 'REPLIED', 'ALL'].map((s) => (
//             <a
//               key={s}
//               href={`/admin/messages?status=${s}`}
//               className={`rounded-full px-3 py-1 ${
//                 status === s
//                   ? 'bg-stone-900 text-white'
//                   : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
//               }`}
//             >
//               {s.charAt(0) + s.slice(1).toLowerCase()}
//             </a>
//           ))}
//         </div>

//         {messages.map((m: any) => (
//           <a
//             key={m.id}
//             href={`/admin/messages?status=${status}&id=${m.id}`}
//             className={`block rounded-xl p-3 transition hover:bg-stone-50 ${
//               active?.id === m.id ? 'bg-amber-50 ring-1 ring-amber-200' : ''
//             }`}
//           >
//             <div className="flex items-center justify-between">
//               <span className="font-medium text-stone-900">{m.name}</span>
//               {m.status === 'UNREAD' && (
//                 <span className="h-2 w-2 rounded-full bg-amber-500" />
//               )}
//             </div>
//             <p className="mt-0.5 truncate text-sm text-stone-500">
//               {m.subject}
//             </p>
//             <p className="mt-0.5 text-xs text-stone-400">
//               {new Date(m.createdAt).toLocaleDateString()}
//             </p>
//           </a>
//         ))}

//         {messages.length === 0 && (
//           <p className="py-8 text-center text-sm text-stone-400">No messages</p>
//         )}
//       </aside>

//       {/* Thread / reply */}
//       <div className="flex-1">
//         {active ? (
//           <MessageThread message={active as any} />
//         ) : (
//           <div className="flex h-64 items-center justify-center rounded-2xl bg-white text-stone-400 shadow-sm">
//             Select a message to read
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}
