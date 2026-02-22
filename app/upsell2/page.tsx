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
            {/* --- Script da Hotmart no head --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
            />
            {showWidget && (
                <Script id="hotmart-sales-funnel-init-upsell2" strategy="afterInteractive">
                    {`checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell2')`}
                </Script>
            )}

            {/* --- Body --- */}
            <div className="flex flex-col items-center min-h-screen p-4 py-10 bg-background text-foreground animate-in fade-in duration-700">
                <div className="w-full max-w-3xl flex flex-col items-center gap-8">

                    {/* Vídeo — substitua o src pelo link do seu vídeo */}
                    <div className="w-full rounded-xl overflow-hidden shadow-lg">
                        <video
                            ref={videoRef}
                            className="w-full"
                            controls
                            playsInline
                        // src="/videos/upsell2.mp4"  ← descomente e troque pelo caminho do seu vídeo
                        >
                            Seu navegador não suporta vídeo HTML5.
                        </video>
                    </div>

                    {/* HOTMART - Sales Funnel Widget — aparece após 80% do vídeo */}
                    {showWidget && (
                        <div
                            id="hotmart-sales-funnel-upsell2"
                            className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                        />
                    )}

                </div>
            </div>
        </>
    )
}
