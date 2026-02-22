"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"

export default function Upsell2Page() {
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
                <Script id="hotmart-sales-funnel-init-upsell2" strategy="afterInteractive">
                    {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell2')`}
                </Script>
            )}

            {/* --- Page Layout --- */}
            <div className="flex flex-col items-center min-h-screen bg-white text-black animate-in fade-in duration-700">

                {/* Header Text */}
                <div className="pt-10 pb-4 px-4 text-center flex flex-col gap-1">
                    <p className="text-xl md:text-2xl font-bold text-black tracking-tight leading-tight max-w-2xl mx-auto">
                        Espera... necesito decirte esto antes de que sea demasiado tarde.
                    </p>
                    <p className="text-2xl md:text-3xl font-extrabold text-[#ff3a3a] tracking-tight">
                        ¡Mira este video con atención!
                    </p>
                </div>

                <div className="w-full max-w-[400px] flex flex-col items-center gap-6 px-4 mb-20">

                    {/* Video Container (Vertical aspect) */}
                    <div className="w-full rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 bg-black">
                        <video
                            ref={videoRef}
                            className="w-full aspect-[9/16] object-cover"
                            controls
                            autoPlay
                            playsInline
                        >
                            <source src="/images/step-upsell2-video.mp4" type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>

                    {/* Hotmart Upsell Widget */}
                    {showWidget && (
                        <div
                            id="hotmart-sales-funnel-upsell2"
                            className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                        />
                    )}
                </div>

                {/* Footer */}
                <footer className="mt-auto py-10 w-full text-center flex flex-col items-center gap-1 text-xs text-gray-800 font-medium">
                    <p>Copyright 2026 - Guión Divino ®</p>
                    <p>All rights reserved</p>
                    <div className="flex gap-2">
                        <span className="cursor-pointer hover:underline">Terms of use</span>
                        <span>-</span>
                        <span className="cursor-pointer hover:underline">Privacy</span>
                    </div>
                    <p className="mt-2 text-gray-400 font-normal italic">Insira um disclaimer aqui...</p>
                </footer>
            </div>
        </>
    )
}
