"use client"

import Script from "next/script"

export default function Downsell1Page() {
    return (
        <>
            {/* --- Hotmart Checkout Elements Script --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
            />
            <Script id="hotmart-sales-funnel-init-ds1" strategy="afterInteractive">
                {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-ds1')`}
            </Script>

            {/* --- Page Layout --- */}
            <div className="min-h-screen bg-[#f9fafb] text-gray-900 flex flex-col items-center py-12 px-4 animate-in fade-in duration-700">
                <div className="w-full max-w-2xl flex flex-col items-center gap-8 text-center">

                    {/* Message Section */}
                    <div className="flex flex-col gap-4">
                        <p className="text-lg md:text-xl font-medium leading-relaxed">
                            Si llegaste hasta aquí, es porque algo dentro de ti ya reconoció que este paso es importante.
                        </p>
                        <div className="h-px w-20 bg-primary/30 mx-auto" />
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light">
                            Considerando la situación, he preparado una <span className="font-bold text-black italic">oferta que te resultará muy interesante</span>. Así, no obstaculizará tu progreso ni tu aprendizaje, y podrás alcanzar la prosperidad que necesitas por completo.
                        </p>
                    </div>

                    {/* Hotmart Sales Funnel Widget */}
                    <div id="hotmart-sales-funnel-ds1" className="w-full min-h-[400px]" />

                </div>
            </div>
        </>
    )
}
