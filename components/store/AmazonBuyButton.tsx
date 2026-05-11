// components/store/AmazonBuyButton.tsx
'use client'

interface Props { href: string }

/**
 * When clicked, opens the product on Amazon in a new tab.
 * All products are also listed on Amazon Seller Central;
 * this button simply redirects the customer there.
 */
export function AmazonBuyButton({ href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#FF9900] bg-[#FF9900] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e68a00] active:scale-95"
    >
      {/* Amazon smile icon (SVG inline) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 15s5 4 9 4 9-4 9-4" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="9" r="5" stroke="#000" strokeWidth="2"/>
      </svg>
      Buy on Amazon
    </a>
  )
}
