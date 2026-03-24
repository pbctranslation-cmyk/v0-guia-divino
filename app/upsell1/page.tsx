"use client"

import Script from "next/script"
import { useRef, useState, useEffect } from "react"

// --- DELAY CONFIGURATION ---
const DEBUG_ALWAYS_SHOW = false // Set to false to restore original delay
const UPSELL_1_DELAY_SECONDS = 595 // 9 minutes and 55 seconds


export default function Upsell1Page() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [showWidget, setShowWidget] = useState(false)

    const lastTimeRef = useRef(0)
    const widgetShownRef = useRef(false)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handleTimeUpdate = () => {
            // Prevent seeking forward
            if (video.currentTime > lastTimeRef.current + 1.5 && !DEBUG_ALWAYS_SHOW) {
                video.currentTime = lastTimeRef.current
            } else {
                lastTimeRef.current = video.currentTime
            }

            const effectiveDelay = DEBUG_ALWAYS_SHOW ? 0 : UPSELL_1_DELAY_SECONDS
            if (video.currentTime >= effectiveDelay && !widgetShownRef.current) {
                widgetShownRef.current = true
                setShowWidget(true)
                setTimeout(() => {
                    window.dispatchEvent(new CustomEvent('mount-hotmart-upsell1'))
                }, 100)
            }
        }

        const handleSeeking = () => {
            if (video.currentTime > lastTimeRef.current && !DEBUG_ALWAYS_SHOW) {
                video.currentTime = lastTimeRef.current
            }
        }

        video.addEventListener("timeupdate", handleTimeUpdate)
        video.addEventListener("seeking", handleSeeking)
        return () => {
            video.removeEventListener("timeupdate", handleTimeUpdate)
            video.removeEventListener("seeking", handleSeeking)
        }
    }, [])



    return (
        <>
            {/* --- Hotmart Checkout Elements Script --- */}
            <Script
                src="https://checkout.hotmart.com/lib/hotmart-checkout-elements.js"
                strategy="afterInteractive"
            />

            <Script id="hotmart-mount-logic-upsell1" strategy="afterInteractive">
                {`
                    window.addEventListener('mount-hotmart-upsell1', function() {
                        if (typeof checkoutElements !== 'undefined') {
                            checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel-upsell1');
                        }
                    });
                `}
            </Script>

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
                            <source src="/images/step-upsell1-video.mp4" type="video/mp4" />
                            Tu navegador no soporta el video.
                        </video>
                    </div>

                    {/* Motivational Text + Hotmart Upsell Widget */}
                    {showWidget && (
                        <>
                            {/* Motivational Banner */}
                            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <div className="w-full rounded-xl px-5 py-4 text-center shadow-[0_10px_25px_rgba(0,0,0,0.1)]" style={{ backgroundColor: "#91712a" }}>
                                    <p className="text-white font-bold text-sm md:text-base uppercase leading-snug tracking-tight">
                                        No todos están preparados para dar el siguiente paso.<br />
                                        La pregunta es… ¿tú lo estás?
                                    </p>
                                </div>
                            </div>

                            {/* Hotmart Widget */}
                            <div
                                id="hotmart-sales-funnel-upsell1"
                                className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700"
                            />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
