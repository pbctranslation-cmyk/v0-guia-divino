"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function FacebookPixelEvents() {
    const pathname = usePathname()

    useEffect(() => {
        if (typeof window !== "undefined" && (window as any).fbq) {
            (window as any).fbq("track", "PageView")
        }
    }, [pathname])

    return null
}
