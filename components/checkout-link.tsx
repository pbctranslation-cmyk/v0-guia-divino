"use client"

import { useCallback } from "react"
import { buildCheckoutUrl, appendSearchParams } from "@/lib/utm-utils"

const BASE_CHECKOUT_URL =
  "https://pay.hotmart.com/I104537340A?off=5v6zt5x8&checkoutMode=10"

/**
 * Client component that wraps any checkout link
 * and automatically appends UTM parameters to the Hotmart URL.
 * 
 * Uses onClick to build the URL synchronously at click time,
 * avoiding race conditions where useEffect hasn't run yet.
 */
export function CheckoutLink({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.location.href = appendSearchParams(buildCheckoutUrl(BASE_CHECKOUT_URL))
  }, [])

  return (
    <a
      href={BASE_CHECKOUT_URL}
      onClick={handleClick}
      rel="noopener"
      className={className}
    >
      {children}
    </a>
  )
}

