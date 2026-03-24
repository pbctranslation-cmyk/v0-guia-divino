"use client"

import { buildCheckoutUrl, appendSearchParams } from "@/lib/utm-utils"

export function HotmartCheckout() {
  const handleGoToCheckout = () => {
    window.location.href = appendSearchParams(buildCheckoutUrl(
      "https://pay.hotmart.com/I104537340A?off=5v6zt5x8&checkoutMode=10"
    ))
  }

  return (
    <div className="flex flex-col items-center gap-6 text-center animate-in fade-in duration-500 py-10">
      <div className="flex flex-col gap-3">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight text-balance">
          Pronto! Você desbloqueou o seu resultado.
        </h2>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Clique no botão abaixo para prosseguir de forma segura para a página de pagamento e ter acesso imediato ao seu material.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 w-full max-w-sm mt-4">
        <button
          onClick={handleGoToCheckout}
          className="w-full py-4 text-white font-bold rounded-lg text-lg bg-green-600 hover:bg-green-700 shadow-lg shadow-green-600/20 hover:scale-105 transition-all border-none cursor-pointer"
        >
          Ir para o Pagamento Seguro
        </button>

        <p className="text-xs text-muted-foreground mt-4">
          Você será redirecionado para a plataforma oficial da Hotmart.
        </p>
      </div>
    </div>
  )
}
