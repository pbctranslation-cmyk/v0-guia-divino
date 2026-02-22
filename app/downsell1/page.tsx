"use client"

import Script from "next/script"

export default function Downsell1Page() {
    return (
        <>
            {/* --- sales funnel container (head) --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
            />
            <Script id="hotmart-sales-funnel-init-ds1" strategy="afterInteractive">
                {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel')`}
            </Script>

            {/* --- body --- */}
            {/* HOTMART - Sales Funnel Widget */}
            <div id="hotmart-sales-funnel"></div>
        </>
    )
}
