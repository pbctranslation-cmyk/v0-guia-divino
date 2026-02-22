"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"

export default function Upsell1Page() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [showWidget, setShowWidget] = useState(false)

    const lastTimeRef = useRef(0)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleTimeUpdate = () => {
            // Prevent seeking forward
            if (video.currentTime > lastTimeRef.current + 1.5) {
                video.currentTime = lastTimeRef.current
            } else {
                lastTimeRef.current = video.currentTime
            }

            if (!showWidget && video.duration > 0) {
                const progress = video.currentTime / video.duration
                if (progress >= 0.8) {
                    setShowWidget(true)
                }
            }
        }

        const handleSeeking = () => {
            if (video.currentTime > lastTimeRef.current) {
                video.currentTime = lastTimeRef.current
            }
        }

        video.addEventListener("timeupdate", handleTimeUpdate)
        video.addEventListener("seeking", handleSeeking)
        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate)
            video.removeEventListener("seeking", handleSeeking)
        }
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
                    <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-tight uppercase tracking-tight">
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
                            className="w-full aspect-[9/16] object-cover vsl-video cursor-pointer"
                            controls
                            controlsList="nodownload noplaybackrate"
                            autoPlay
                            muted
                            playsInline
                            onContextMenu={(e) => e.preventDefault()}
                            onClick={(e) => {
                                const v = e.currentTarget
                                if (v.paused) v.play().catch(console.error)
                                else v.pause()
                            }}
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
