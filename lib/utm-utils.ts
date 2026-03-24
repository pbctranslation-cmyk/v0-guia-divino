/**
 * Utility module for capturing, storing, and appending UTM parameters
 * to Hotmart checkout URLs so that UTMify can attribute sales to specific ads.
 */

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

const UTM_STORAGE_KEY = "guia_divino_utms"

export interface UtmData {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  [key: string]: string | undefined
}

/**
 * Captures UTM parameters from the current page URL and saves them
 * to localStorage. Only overwrites if there are UTM params present
 * (preserves original UTMs from the landing).
 */
export function captureUtmParams(): UtmData {
  if (typeof window === "undefined") return {}

  const searchParams = new URLSearchParams(window.location.search)
  const utms: UtmData = {}
  let hasAny = false

  for (const param of UTM_PARAMS) {
    const value = searchParams.get(param)
    if (value) {
      utms[param] = value
      hasAny = true
    }
  }

  // Also capture fbclid and gclid for cross-platform attribution
  const fbclid = searchParams.get("fbclid")
  if (fbclid) {
    utms["fbclid"] = fbclid
    hasAny = true
  }
  const gclid = searchParams.get("gclid")
  if (gclid) {
    utms["gclid"] = gclid
    hasAny = true
  }

  // Only save if we have new UTMs (don't erase existing ones on subsequent pages)
  if (hasAny) {
    try {
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms))
    } catch {}
  }

  return utms
}

/**
 * Retrieves stored UTM parameters from localStorage.
 */
export function getStoredUtms(): UtmData {
  if (typeof window === "undefined") return {}

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored) as UtmData
    }
  } catch {}

  return {}
}

/**
 * Takes a Hotmart checkout base URL and appends stored UTM parameters + SCK.
 * The SCK parameter is what Hotmart uses in its "Vendas por Origem de Checkout" report.
 * 
 * Example output:
 *   https://pay.hotmart.com/...?off=...&checkoutMode=10&utm_source=facebook&utm_campaign=campanha1&sck=facebook|campanha1|ad123
 */
export function buildCheckoutUrl(baseUrl: string): string {
  if (typeof window === "undefined") return baseUrl

  const utms = getStoredUtms()

  // If no UTMs stored, also try to capture from current URL as a fallback
  const hasStoredUtms = Object.keys(utms).length > 0
  if (!hasStoredUtms) {
    const freshUtms = captureUtmParams()
    Object.assign(utms, freshUtms)
  }

  if (Object.keys(utms).length === 0) {
    return baseUrl
  }

  const url = new URL(baseUrl)

  // Append each UTM param to the checkout URL
  for (const param of UTM_PARAMS) {
    if (utms[param]) {
      url.searchParams.set(param, utms[param]!)
    }
  }

  // Append fbclid/gclid if present
  if (utms["fbclid"]) {
    url.searchParams.set("fbclid", utms["fbclid"]!)
  }
  if (utms["gclid"]) {
    url.searchParams.set("gclid", utms["gclid"]!)
  }

  // Build SCK (Hotmart's own source tracking) from UTM params
  // Format: source|campaign|content — this shows up in Hotmart's dashboard
  const sckParts = [
    utms.utm_source,
    utms.utm_campaign,
    utms.utm_content,
  ].filter(Boolean)

  if (sckParts.length > 0) {
    url.searchParams.set("sck", sckParts.join("|"))
  }

  return url.toString()
}

/**
 * Appends ALL current page URL search parameters (window.location.search)
 * to a given URL string. This ensures UTMs, fbclid, gclid, and any other
 * tracking parameters are forwarded through internal redirections.
 *
 * Parameters already present on the target URL are NOT overwritten.
 *
 * Works for both absolute URLs (https://...) and relative paths (/upsell1).
 */
export function appendSearchParams(targetUrl: string): string {
  if (typeof window === "undefined") return targetUrl

  const currentSearch = window.location.search
  if (!currentSearch || currentSearch === "?") return targetUrl

  const currentParams = new URLSearchParams(currentSearch)
  if ([...currentParams].length === 0) return targetUrl

  // Handle absolute URLs
  if (targetUrl.startsWith("http://") || targetUrl.startsWith("https://")) {
    const url = new URL(targetUrl)
    currentParams.forEach((value, key) => {
      // Don't overwrite params already in the target URL
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, value)
      }
    })
    return url.toString()
  }

  // Handle relative URLs (e.g. /upsell1, /oferta-especial)
  const [basePath, existingQuery] = targetUrl.split("?")
  const targetParams = new URLSearchParams(existingQuery || "")

  currentParams.forEach((value, key) => {
    if (!targetParams.has(key)) {
      targetParams.set(key, value)
    }
  })

  const queryString = targetParams.toString()
  return queryString ? `${basePath}?${queryString}` : basePath
}
