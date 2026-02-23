"use client"

import Script from "next/script"

export default function Downsell2Page() {
    return (
        <>
            {/* --- Hotmart Checkout Elements Script --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
                onLoad={() => {
                    // @ts-ignore
                    if (window.checkoutElements) {
                        // @ts-ignore
                        window.checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-ds2')
                    }
                }}
            />
            {/* Fallback initialization in case script loads before component mounts or via navigation */}
            <Script id="hotmart-sales-funnel-init-ds2" strategy="lazyOnload">
                {`
                    function mountHotmart() {
                        if (typeof checkoutElements !== 'undefined') {
                            checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-ds2');
                        } else {
                            setTimeout(mountHotmart, 500);
                        }
                    }
                    mountHotmart();
                `}
            </Script>

            {/* --- Page Layout --- */}
            <div className="min-h-screen bg-[#f9fafb] text-gray-900 flex flex-col items-center py-12 px-4 animate-in fade-in duration-700">
                <div className="w-full max-w-2xl flex flex-col items-center gap-8 text-center">

                    {/* Message Section */}
                    <div className="flex flex-col gap-4">
                        <p className="text-lg md:text-xl font-medium leading-relaxed uppercase tracking-wide">
                            Última Oportunidad
                        </p>
                        <p className="text-sm md:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
                            Si llegaste hasta aquí, es porque algo dentro de ti ya reconoció que este paso es importante. Considerando la situación, he preparado una oferta que te resultará muy interesante.
                        </p>
                        <p className="text-sm md:text-lg font-semibold text-black leading-relaxed">
                            Así, no obstaculizará tu progreso ni tu aprendizaje, y podrás alcanzar la prosperidad que necesitas por completo.
                        </p>
                    </div>

                    {/* Hotmart Sales Funnel Widget */}
                    <div id="hotmart-sales-funnel-ds2" className="w-full min-h-[400px]" />

                </div>
            </div>
        </>
    )
}
