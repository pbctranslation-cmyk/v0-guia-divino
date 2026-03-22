"use client"

import { useEffect } from "react"
import { captureUtmParams } from "@/lib/utm-utils"

/**
 * Client component that captures UTM parameters from the URL
 * when the user first lands on any page. This ensures UTMs from ads
 * are persisted in localStorage for later use in checkout URLs.
 */
export function UtmCapture() {
  useEffect(() => {
    captureUtmParams()
  }, [])

  return null
}
