"use client"

import { HotmartUpsell } from "@/components/hotmart-upsell"
import Script from "next/script"

export default function Upsell1Page() {
    const handleProceed = () => {
        // Para simplificar a demonstração, avança pro Upsell 2
        window.location.href = "/upsell2"
    }

    return (
        <>
            <Script src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js" strategy="afterInteractive" />
            <Script id="hotmart-sales-funnel-script" strategy="afterInteractive">
                {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')`}
            </Script>

            <div className="flex flex-col items-center justify-center min-h-screen p-4 py-10 bg-background text-foreground animate-in fade-in duration-700">
                <div className="w-full max-w-3xl flex flex-col items-center gap-8">
                    <HotmartUpsell
                        title="Obrigado pela sua compra base!"
                        description="Mas não feche esta página ainda. Seu pedido está incompleto sem este material complementar."
                        onComplete={handleProceed}
                    />

                    {/* Sales Funnel da Hotmart - elemento independente na página */}
                    <div id="hotmart-sales-funnel" className="w-full"></div>
                </div>
            </div>
        </>
    )
}
