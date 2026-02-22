"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"

export default function Upsell1Page() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [showWidget, setShowWidget] = useState(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleTimeUpdate = () => {
            if (!showWidget && video.duration > 0) {
                const progress = video.currentTime / video.duration
                if (progress >= 0.8) {
                    setShowWidget(true)
                }
            }
        }

        video.addEventListener("timeupdate", handleTimeUpdate)
        return () => video.removeEventListener("timeupdate", handleTimeUpdate)
    }, [showWidget])

    return (
        <>
            {/* --- Hotmart Checkout Elements Script --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
            />
            {showWidget && (
                <Script id="hotmart-sales-funnel-init-upsell1" strategy="afterInteractive">
                    {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell1')`}
                </Script>
            )}

            {/* --- Page Layout --- */}
            <div className="flex flex-col items-center min-h-screen bg-white text-black animate-in fade-in duration-700">

                {/* Header Banner */}
                <div className="w-full bg-[#ff3b3b] py-4 px-4 text-center">
                    <h1 className="text-white font-bold text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-tight uppercase tracking-tight">
                        ¡ESPERA, TU COMPRA AÚN NO HA SIDO<br />FINALIZADA! TODAVÍA FALTA 1 PASO...
                    </h1>
                </div>

                {/* Subheader */}
                <div className="py-4 px-4 text-center">
                    <p className="text-sm md:text-base font-bold text-black uppercase">
                        ¡DESCUBRE CÓMO PUEDES POTENCIAR TUS RESULTADOS HASTA 10 VECES! ☀️
                    </p>
                </div>

                <div className="w-full max-w-[400px] flex flex-col items-center gap-6 px-4 pb-20">

                    {/* Video Container (Vertical aspect ratio based on image) */}
                    <div className="w-full rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 bg-black">
                        <video
                            ref={videoRef}
                            className="w-full aspect-[9/16] object-cover"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src="/images/step-upsell1-video.mp4" type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>

                    {/* Hotmart Upsell Widget */}
                    {showWidget && (
                        <div
                            id="hotmart-sales-funnel-upsell1"
                            className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                        />
                    )}
                </div>
            </div>
        </>
    )
}
