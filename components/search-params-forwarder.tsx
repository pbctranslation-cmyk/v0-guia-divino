"use client"

import { useEffect } from "react"
import { appendSearchParams } from "@/lib/utm-utils"

/**
 * Global component that intercepts all internal link clicks and
 * automatically appends the current page's URL search parameters
 * to the destination URL.
 * 
 * This ensures that UTM parameters, fbclid, gclid, and any other
 * tracking params added by ad platforms persist through all internal
 * page navigations (quiz → oferta-especial → upsell1, etc.).
 * 
 * Also patches window.location.href setter and window.open to ensure
 * programmatic navigations also forward the params.
 */
export function SearchParamsForwarder() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const currentSearch = window.location.search
    if (!currentSearch || currentSearch === "?") return

    const currentParams = new URLSearchParams(currentSearch)
    if ([...currentParams].length === 0) return

    // ─── 1. Intercept <a> tag clicks ───
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href || href.startsWith("#") || href.startsWith("javascript:")) return

      // Only intercept internal links or absolute links that we want to forward to
      // appendSearchParams handles both.
      const newHref = appendSearchParams(href)
      if (newHref !== href) {
        anchor.setAttribute("href", newHref)
      }
    }

    // ─── 2. Patch window.open ───
    const originalWindowOpen = window.open
    window.open = function(url?: string | URL, target?: string, features?: string) {
      if (typeof url === "string") {
        url = appendSearchParams(url)
      } else if (url instanceof URL) {
        url = new URL(appendSearchParams(url.toString()))
      }
      return originalWindowOpen.call(window, url, target, features)
    }

    // ─── 3. Patch history methods (for SPAs/Next.js router) ───
    const originalPushState = window.history.pushState
    window.history.pushState = function(state: any, title: string, url?: string | URL | null) {
      if (typeof url === "string") {
        url = appendSearchParams(url)
      } else if (url instanceof URL) {
        url = new URL(appendSearchParams(url.toString()))
      }
      return originalPushState.call(history, state, title, url)
    }

    const originalReplaceState = window.history.replaceState
    window.history.replaceState = function(state: any, title: string, url?: string | URL | null) {
      if (typeof url === "string") {
        url = appendSearchParams(url)
      } else if (url instanceof URL) {
        url = new URL(appendSearchParams(url.toString()))
      }
      return originalReplaceState.call(history, state, title, url)
    }

    document.addEventListener("click", handleClick, true)

    return () => {
      document.removeEventListener("click", handleClick, true)
      window.open = originalWindowOpen
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [])

  return null
}
