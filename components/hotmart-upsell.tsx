"use client"

import { useState, useRef } from "react"

interface HotmartUpsellProps {
    title: string
    description: string
    onComplete: () => void
    customButton?: React.ReactNode
}

export function HotmartUpsell({ title, description, onComplete, customButton }: HotmartUpsellProps) {
    const [showOffer, setShowOffer] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    // Essa função escuta o tempo do vídeo para tags <video> do HTML5 e exibe o botão em 35%
    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current
            if (duration && (currentTime / duration) >= 0.35) {
                if (!showOffer) {
                    setShowOffer(true)
                }
            }
        }
    }

    // Atalho oculto: caso o vídeo oficial não esteja aí ou seja um iframe sem API,
    // dê um clique duplo na área do player para forçar a aparição do botão.
    const forceShowOffer = () => setShowOffer(true)

    return (
        <div className="flex flex-col items-center justify-center gap-6 text-center animate-in fade-in duration-500 w-full max-w-2xl mx-auto">
            <div className="flex flex-col gap-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {title}
                </h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto">
                    {description}
                </p>
            </div>

            <div
                className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-border relative group cursor-pointer"
                onDoubleClick={forceShowOffer}
            >
                <p className="absolute top-2 left-2 text-xs text-white/50 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                    (Duplo clique aqui para forçar a aparição do Botão)
                </p>

                {/* Adicione o seu vídeo aqui (tag <video> ou <iframe>). 
            Se usar iframe do Youtube ou Vimeo, o "onTimeUpdate" não funciona de forma direta.
            Tente buscar uma forma de calcular o %, ou use uma barra de atraso comum. */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover relative z-0"
                    controls
                    onTimeUpdate={handleTimeUpdate}
                    // Substitua este src de teste pelo src do seu vídeo!
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                />
            </div>

            <div className={showOffer ? "flex flex-col items-center gap-4 animate-in slide-in-from-bottom-8 duration-700 fade-in w-full mt-4" : "opacity-0 h-0 overflow-hidden pointer-events-none m-0"}>
                <p className="text-xl font-bold text-foreground">
                    Aproveite a Oferta Especial!
                </p>

                <div className="flex flex-col gap-3 w-full max-w-sm">
                    {customButton ? (
                        customButton
                    ) : (
                        <button
                            onClick={() => alert("Substitua este botão pelo código One Click Buy da Hotmart!")}
                            className="w-full py-4 text-white font-bold rounded-lg text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20 hover:scale-105 transition-all border-none cursor-pointer"
                        >
                            Comprar Agora (One Click Upsell)
                        </button>
                    )}

                    <button
                        onClick={onComplete}
                        className="text-muted-foreground underline text-sm border-none bg-transparent cursor-pointer hover:text-foreground hover:scale-105 transition-all mt-2"
                    >
                        Não, obrigado. Quero avançar na minha jornada.
                    </button>
                </div>
            </div>

            {!showOffer && (
                <div className="h-[150px] flex items-center justify-center bg-transparent mt-4">
                    <p className="text-sm font-medium text-muted-foreground animate-pulse">
                        O botão será liberado aqui durante a explicação...
                    </p>
                </div>
            )}
        </div>
    )
}
