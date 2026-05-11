// lib/amazon.ts
// Builds the Amazon product URL. If an affiliate tag is set, it is appended.

const AFFILIATE_TAG = process.env.AMAZON_AFFILIATE_TAG

/**
 * Given an ASIN (Amazon Standard Identification Number) stored in Product.amazonAsin,
 * returns the full URL to open on Amazon. When the user clicks "Buy on Amazon"
 * they are taken directly to the product page on amazon.com.
 *
 * If a custom amazonUrl is stored, that takes precedence.
 */
export function buildAmazonUrl(asin: string, customUrl?: string | null): string {
  if (customUrl) {
    // Append affiliate tag to existing URL if not already present
    if (AFFILIATE_TAG && !customUrl.includes('tag=')) {
      const url = new URL(customUrl)
      url.searchParams.set('tag', AFFILIATE_TAG)
      return url.toString()
    }
    return customUrl
  }

  const base = `https://www.amazon.com/dp/${asin}`
  if (!AFFILIATE_TAG) return base
  return `${base}?tag=${AFFILIATE_TAG}`
}

/**
 * Extracts an ASIN from a full Amazon URL.
 * Useful when admins paste a product URL into the dashboard.
 */
export function extractAsinFromUrl(url: string): string | null {
  const match = url.match(/\/dp\/([A-Z0-9]{10})/)
  return match ? match[1] : null
}
