"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"

export default function Upsell2Page() {
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
                if (progress >= 0.35) {
                    setShowWidget(true)
                    // Trigger mount after state update
                    setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('mount-hotmart-upsell2'))
                    }, 100)
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

            <Script id="hotmart-mount-logic-upsell2" strategy="afterInteractive">
                {`
                    window.addEventListener('mount-hotmart-upsell2', function() {
                        if (typeof checkoutElements !== 'undefined') {
                            checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell2');
                        }
                    });
                `}
            </Script>

            {/* --- Page Layout --- */}
            <div className="flex flex-col items-center min-h-screen bg-white text-black animate-in fade-in duration-700">

                {/* Header Text */}
                <div className="pt-10 pb-4 px-4 text-center flex flex-col gap-1">
                    <p className="text-lg md:text-2xl font-bold text-black tracking-tight leading-tight max-w-2xl mx-auto">
                        Espera... necesito decirte esto antes de que sea demasiado tarde.
                    </p>
                    <p className="text-xl md:text-3xl font-extrabold text-[#ff3a3a] tracking-tight">
                        ¡Mira este video con atención!
                    </p>
                </div>

                <div className="w-full max-w-[400px] flex flex-col items-center gap-6 px-4 mb-20">

                    {/* Video Container (Vertical aspect) */}
                    <div className="w-full rounded-lg overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] border border-gray-100 bg-black">
                        <video
                            ref={videoRef}
                            className="w-full aspect-[9/16] vsl-video cursor-pointer bg-black"
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
            </div>
        </>
    )
}
