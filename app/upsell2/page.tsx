"use client"

import { HotmartUpsell } from "@/components/hotmart-upsell"

export default function Upsell2Page() {
    const handleProceed = () => {
        // Após recusar/comprar o último upsell, vai para a página inicial (ou página final de TUDO PRONTO)
        window.location.href = "/"
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 py-10 bg-background text-foreground animate-in fade-in duration-700">
            <div className="w-full max-w-3xl">
                <HotmartUpsell
                    title="Temos mais uma oferta especial liberada para você."
                    description="Única chance de levar nossa ferramenta premium com desconto."
                    onComplete={handleProceed}
                />
            </div>
        </div>
    )
}
