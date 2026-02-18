"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    checkoutElements?: {
      init: (
        type: string,
        options: Record<string, unknown>
      ) => {
        mount: (selector: string) => void
        attach: (selector: string) => void
        on: (event: string, callback: () => void) => void
      }
    }
  }
}

interface HotmartCheckoutProps {
  onPurchaseComplete: () => void
}

export function HotmartCheckout({ onPurchaseComplete }: HotmartCheckoutProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mountedRef = useRef(false)

  useEffect(() => {
    if (mountedRef.current) return
    mountedRef.current = true

    const script = document.createElement("script")
    script.src = "https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
    script.async = true

    script.onload = () => {
      if (window.checkoutElements && containerRef.current) {
        const elements = window.checkoutElements.init("inlineCheckout", {
          offer: "I104520249O",
        })
        elements.mount("#hotmart-checkout-container")

        // Listen for purchase_complete event
        elements.on("purchase_complete", () => {
          onPurchaseComplete()
        })
      }
    }

    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(
        'script[src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"]'
      )
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [onPurchaseComplete])

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-serif text-lg md:text-xl font-bold text-foreground leading-relaxed text-balance">
          Complete sua compra para continuar
        </h2>
        <p className="text-sm text-muted-foreground">
          Finalize o pagamento abaixo para desbloquear o resultado do seu teste.
        </p>
      </div>

      <div
        id="hotmart-checkout-container"
        ref={containerRef}
        className="mx-auto w-full max-w-lg min-h-[500px] rounded-lg overflow-hidden"
      />
    </div>
  )
}
