import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "¡Gracias por tu compra! | Guía Divino",
    description: "Tu pedido fue procesado con éxito. Revisa tu correo electrónico para acceder a tu material.",
}

export default function ThanksPage() {
    return (
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-4">
            <div className="max-w-lg w-full text-center flex flex-col items-center gap-8">

                {/* Ícone de check */}
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10 text-emerald-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </div>

                {/* Título */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-3xl font-bold text-white tracking-tight">
                        ¡Gracias por tu compra!
                    </h1>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Tu pedido fue procesado con éxito. En unos minutos recibirás un correo electrónico con todos los detalles de tu acceso.
                    </p>
                </div>

                {/* Card de instrução */}
                <div className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 text-left">

                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-8 h-8 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                            <span className="text-violet-400 text-sm font-bold">1</span>
                        </div>
                        <div>
                            <p className="text-white font-medium text-sm">Abre tu correo electrónico</p>
                            <p className="text-gray-500 text-sm mt-0.5">Busca un mensaje de nuestro equipo en tu bandeja de entrada.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-8 h-8 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                            <span className="text-violet-400 text-sm font-bold">2</span>
                        </div>
                        <div>
                            <p className="text-white font-medium text-sm">Revisa la carpeta de spam</p>
                            <p className="text-gray-500 text-sm mt-0.5">Si no lo encuentras en tu bandeja principal, revisa la carpeta de correo no deseado.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="mt-1 w-8 h-8 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center shrink-0">
                            <span className="text-violet-400 text-sm font-bold">3</span>
                        </div>
                        <div>
                            <p className="text-white font-medium text-sm">Accede a tu material</p>
                            <p className="text-gray-500 text-sm mt-0.5">Haz clic en el enlace del correo para acceder a tu <span className="text-violet-400 font-medium">Guía Divino</span> de inmediato.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
