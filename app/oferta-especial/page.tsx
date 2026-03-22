import { Lock, CheckCircle2, ShieldCheck, Zap, ChevronDown, MoveRight } from "lucide-react";
import Image from "next/image";
import { CheckoutLink } from "@/components/checkout-link";
export default function OfertaEspecial() {

    return (
        <main className="min-h-screen bg-[#0b0b0b] text-[#ffffff] font-sans selection:bg-[#c8a24a] selection:text-[#0b0b0b]">

            {/* SEÇÃO 1 - Hero */}
            <section className="relative w-full flex flex-col items-center justify-center px-6 py-16 md:py-24 max-w-4xl mx-auto text-center border-b border-[#1f1f1f]">

                {/* Imagem Mística Pequena */}
                <div className="w-[85%] md:w-[60%] sm:max-h-[35vh] md:max-h-[40vh] aspect-video bg-[#1f1f1f]/50 border border-[#1f1f1f]/50 rounded-[20px] mb-8 flex items-center justify-center overflow-hidden relative shadow-[0_0_60px_rgba(200,162,74,0.08)]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0b0b0b] z-10 bottom-0 top-1/2"></div>
                    <Image
                        src="/manuscrito-hero.png"
                        alt="Manuscrito Antiguo"
                        fill
                        className="object-cover object-bottom hover:scale-105 transition-transform duration-[20s] z-0"
                        priority
                    />
                </div>

                {/* Microfrase de Autoridade */}
                <div className="mb-6 flex items-center justify-center gap-2">
                    <span className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c8a24a]/50"></span>
                    <p className="text-[#c8a24a] text-sm md:text-base font-serif tracking-widest uppercase">
                        Un conocimiento preservado desde 1952
                    </p>
                    <span className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c8a24a]/50"></span>
                </div>

                <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight mb-8">
                    El dinero entra… <br className="hidden md:block" />
                    <span className="text-[#c8a24a]">pero nunca permanece.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto mb-10">
                    Durante décadas, estas 12 palabras permanecieron guardadas a siete llaves. <br className="hidden md:block" /><br className="block md:hidden" />
                </p>

                <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
                    {/* Microtexto de Redução de Fricção */}
                    <p className="text-center text-sm md:text-base text-gray-200 mb-2 font-medium">
                        Hoy puedes escucharlas por primera vez. <br className="md:hidden" />
                        <span className="text-white/80">Solo toma unos segundos comenzar.</span>
                    </p>

                    <CheckoutLink
                        className="group w-full bg-[#f8f8f8] hover:bg-white text-[#0b0b0b] font-bold text-lg md:text-xl py-5 px-8 rounded-lg shadow-[0_0_40px_rgba(200,162,74,0.4)] transition-all hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-3 ring-2 ring-[#c8a24a]/50"
                    >
                        Escuchar las 12 palabras ahora
                        <MoveRight className="w-5 h-5 text-[#c8a24a] group-hover:translate-x-1 transition-transform" />
                    </CheckoutLink>

                    <div className="flex flex-col items-center mt-3 text-sm text-gray-400">
                        <div className="flex items-center gap-2 font-medium">
                            <Lock className="w-4 h-4 text-[#c8a24a]" />
                            <span>Pago seguro vía Hotmart</span>
                        </div>
                        <span className="mt-1">Acceso inmediato tras el pago</span>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 2 - Identificação */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <div className="mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-4 text-center md:text-left">
                        No es falta de esfuerzo.
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-200 font-medium text-center md:text-left max-w-2xl">
                        No estás fallando. Estás repitiendo un patrón que nunca te enseñaron a romper.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <div className="w-full md:w-[60%] space-y-8">
                        <div className="text-lg text-gray-300 leading-relaxed bg-[#1f1f1f]/20 p-8 rounded-xl border border-[#1f1f1f] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
                            <p className="mb-2">Trabajas.</p>
                            <p className="mb-2">Te esfuerzas.</p>
                            <p className="mb-8">Intentas organizar tu vida financiera.</p>
                            <p className="font-bold text-white text-2xl pt-6 border-t border-[#1f1f1f]">
                                Pero algo siempre escapa.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0 mt-1" />
                                <p className="text-lg text-white font-medium">
                                    El dinero llega… <br className="md:hidden" />
                                    <span className="text-gray-400 font-normal">pero desaparece.</span>
                                </p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0 mt-1" />
                                <p className="text-lg text-white font-medium">
                                    Las oportunidades aparecen… <br className="md:hidden" />
                                    <span className="text-gray-400 font-normal">pero no duran.</span>
                                </p>
                            </li>
                            <li className="flex gap-4 items-start">
                                <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0 mt-1" />
                                <p className="text-lg text-white font-medium">
                                    Siempre estás cerca… <br className="md:hidden" />
                                    <span className="text-gray-400 font-normal">pero nunca estable.</span>
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Imagem de Preocupação Financeira */}
                    <div className="w-full md:w-[40%] aspect-[4/5] bg-[#1f1f1f]/50 border border-[#1f1f1f]/50 rounded-[20px] flex items-center justify-center relative overflow-hidden shadow-[0_0_40px_rgba(200,162,74,0.05)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] to-transparent z-10 top-1/2"></div>
                        <Image
                            src="/preocupacao-financeira.png"
                            alt="Preocupación financiera silenciosa"
                            fill
                            className="object-cover object-center grayscale-[15%] hover:scale-105 transition-transform duration-[20s] z-0"
                        />
                    </div>
                </div>
            </section>

            {/* SEÇÃO 3 — LA HISTORIA */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-12 text-center md:text-left">
                    Todo comenzó con un descubrimiento inesperado.
                </h2>

                <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <div className="w-full md:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            En 1952, Samuel Rosenberg <br />
                            <span className="text-white">dejó escritos guardados a siete llaves.</span>
                        </p>
                        <p>
                            Décadas después, <br />
                            un jardinero heredó esos documentos.
                        </p>
                        <p>
                            No sabía exactamente qué contenían.
                        </p>
                        <p className="font-medium text-[#c8a24a]">
                            Pero decidió poner las palabras en práctica.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 space-y-6 text-lg text-gray-300 leading-relaxed bg-[#1f1f1f]/20 p-8 rounded-lg border border-[#1f1f1f]">
                        <p>
                            Al aplicar las palabras <br />
                            exactamente como estaban escritas, <br />
                            <span className="text-white font-medium">algo comenzó a cambiar.</span>
                        </p>
                        <p>
                            Las oportunidades aparecieron.
                        </p>
                        <p>
                            El flujo financiero se reorganizó.
                        </p>
                        <p>
                            Con el tiempo, <br />
                            creó su propio negocio.
                        </p>
                        <p className="text-[#c8a24a] font-bold text-xl pt-4 border-t border-[#1f1f1f]">
                            Y nunca volvió al patrón anterior.
                        </p>
                    </div>
                </div>

                <div className="w-full mt-24 text-center">
                    <p className="font-serif text-2xl md:text-3xl text-[#c8a24a] italic max-w-2xl mx-auto leading-relaxed opacity-90">
                        "Algunos conocimientos no se crean. <br className="md:hidden" />
                        <span className="text-white not-italic font-bold">Se preservan.</span>"
                    </p>
                </div>
            </section>

            {/* SEÇÃO 4 — LA TRANSFORMACIÓN */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-6">
                        Las 12 Palabras
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 font-medium">
                        Palabras comunes para quien las oye. <br className="md:hidden" />
                        <span className="text-white">Código poderoso para quien las aplica.</span>
                    </p>
                </div>

                <div className="flex flex-col md:flex-row-reverse gap-12 items-center md:items-start">
                    <div className="w-full md:w-[60%] space-y-8">
                        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                            <p className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#c8a24a] shrink-0"></span>
                                No son frases motivacionales.
                            </p>
                            <p className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#c8a24a] shrink-0"></span>
                                No son afirmaciones comunes.
                            </p>
                            <p className="text-white font-medium text-xl mt-4">
                                Son un código de reorganización interna <br className="hidden md:block" />
                                transmitido durante generaciones.
                            </p>
                        </div>

                        <div className="bg-[#c8a24a]/10 border border-[#c8a24a]/20 p-6 rounded-lg">
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Escucharlas diariamente <br />
                                activa un proceso de <span className="text-[#c8a24a] font-bold">enfoque mental</span>, <br />
                                <span className="text-[#c8a24a] font-bold">disciplina interna</span> <br />
                                y <span className="text-[#c8a24a] font-bold">claridad financiera</span>.
                            </p>
                        </div>
                    </div>

                    {/* Imagem do Código Sagrado (Pergaminho Antigo) */}
                    <div className="w-full md:w-[40%] aspect-square md:aspect-[3/4] bg-[#1f1f1f]/50 border border-[#1f1f1f]/50 rounded-xl flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(200,162,74,0.08)]">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent z-10 bottom-0 top-1/2"></div>
                        <Image
                            src="/codigo-antigo.png"
                            alt="Código preservado"
                            fill
                            className="object-cover object-center grayscale-[10%] hover:scale-105 transition-transform duration-[20s] z-0"
                        />
                    </div>
                </div>

                {/* CTA Seção 4 */}
                <div className="w-full max-w-md mx-auto mt-20 flex flex-col items-center gap-4">
                    <CheckoutLink
                        className="w-full bg-[#c8a24a] hover:bg-[#b08d3e] text-[#0b0b0b] font-bold text-lg md:text-xl py-5 px-8 rounded-lg shadow-[0_0_50px_rgba(200,162,74,0.4)] transition-all hover:scale-[1.03] active:scale-95 text-center flex items-center justify-center font-sans tracking-wide"
                    >
                        Acceder a las 12 Palabras
                    </CheckoutLink>

                    <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                        <span>Acceso inmediato</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]"></div>
                        <span>Pago 100% seguro</span>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 5 — O QUE VOCÊ RECEBE */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-12 text-center">
                    Sistema Completo Guía Divino
                </h2>

                <div className="text-center mb-10">
                    <p className="text-xl md:text-2xl text-gray-200 font-medium">
                        No es solo un audio. <br className="md:hidden" />
                        Estás abriendo un <span className="text-[#c8a24a]">sistema completo</span> de reorganización interna.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                        { title: "Audio principal con las 12 palabras", desc: "La práctica central que inicia el proceso." },
                        { title: "El Código de la Mente Millonaria", desc: "Reorganiza la base mental de tu prosperidad." },
                        { title: "El Código de Abundancia", desc: "Activa una nueva relación con las oportunidades." },
                        { title: "Manifiesta Dinero Sin Esfuerzo", desc: "Reduce fricción interna y aumenta alineación." },
                        { title: "El Ritual de Apertura Interior", desc: "Abre el proceso con intención y claridad." },
                        { title: "El Camino de los 40 Días", desc: "La estructura diaria para consolidar el cambio." },
                        { title: "Protección Espiritual Ancestral", desc: "Fortalece tu campo frente al caos externo." },
                        { title: "Audios complementarios", desc: "Refuerzan y acompañan la práctica diaria." },
                    ].map((item, index) => (
                        <div key={index} className="bg-[#1f1f1f]/30 border border-[#1f1f1f] rounded-xl p-6 flex flex-col justify-center text-center hover:bg-[#1f1f1f]/80 transition-colors shadow-sm">
                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Bloco de Valor e Acesso */}
                <div className="mt-20 pt-16 border-t border-[#1f1f1f]/50 flex flex-col items-center">
                    {/* Ornamentos Superiores */}
                    <div className="flex items-center justify-center gap-4 mb-6 opacity-80">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                        <span className="text-[#c8a24a] text-sm">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
                    </div>

                    <h3 className="font-serif text-3xl md:text-5xl font-bold tracking-wide text-[#c8a24a] mb-6 text-center px-4">
                        Acceso al Guía Divino
                    </h3>

                    {/* Ornamentos Inferiores */}
                    <div className="flex items-center justify-center gap-4 mb-12 opacity-80">
                        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                        <span className="text-[#c8a24a] text-sm">✦</span>
                        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
                    </div>

                    <div className="max-w-md mx-auto text-center space-y-8 mb-16 px-6">
                        <p className="text-lg md:text-xl text-white">
                            Sistema completo de activación interior.
                        </p>
                        
                        <p className="text-xl md:text-3xl text-[#c8a24a] font-serif font-bold tracking-wide leading-snug">
                            CONOCIMIENTO PRESERVADO <br className="hidden md:block" /> DURANTE GENERACIONES
                        </p>
                        
                        <p className="text-[#d1d1d1] text-lg font-medium">
                            Accede hoy al método completo.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 md:p-10 w-full max-w-md shadow-[0_0_50px_rgba(200,162,74,0.04)]">
                        <p className="text-sm md:text-base text-gray-400 tracking-widest uppercase mb-4 text-center">
                            Acceso completo
                        </p>
                        <p className="text-xl md:text-2xl text-gray-500 line-through decoration-[#c8a24a]/60 mb-2">
                            US$ 18
                        </p>

                        <p className="font-serif text-5xl md:text-6xl font-bold text-[#c8a24a] mb-10 drop-shadow-[0_0_15px_rgba(200,162,74,0.15)] leading-none text-center">
                            US$ 8
                        </p>

                        <CheckoutLink
                            className="w-full bg-[#c8a24a] hover:bg-[#b08d3e] text-[#0b0b0b] font-bold text-lg md:text-xl py-5 px-8 rounded-xl shadow-[0_0_40px_rgba(200,162,74,0.25)] transition-all hover:scale-[1.03] active:scale-95 text-center flex items-center justify-center font-sans tracking-wide mb-6"
                        >
                            Acceder ahora al Guía Divino
                        </CheckoutLink>

                        <p className="text-sm text-gray-300 text-center font-medium">
                            Acceso inmediato después del pago.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 6 — QUEBRA DE OBJEÇÕES */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-6 leading-tight">
                        No necesitas creer. <br />
                        Solo aplicar.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 font-medium max-w-xl mx-auto">
                        Sin rituales innecesarios. Sin dependencia. <br className="md:hidden" />
                        <span className="text-white">Solo práctica diaria y dirección.</span>
                    </p>
                </div>

                <div className="max-w-xl mx-auto space-y-4">
                    <div className="flex items-center gap-5 bg-[#1f1f1f]/30 border border-[#1f1f1f] rounded-xl p-6 hover:bg-[#1f1f1f]/60 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0" />
                        <p className="text-lg text-white font-medium">No requiere rituales complejos.</p>
                    </div>
                    <div className="flex items-center gap-5 bg-[#1f1f1f]/30 border border-[#1f1f1f] rounded-xl p-6 hover:bg-[#1f1f1f]/60 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0" />
                        <p className="text-lg text-white font-medium">No requiere cambiar tu religión.</p>
                    </div>
                    <div className="flex items-center gap-5 bg-[#1f1f1f]/30 border border-[#1f1f1f] rounded-xl p-6 hover:bg-[#1f1f1f]/60 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#c8a24a] shrink-0" />
                        <p className="text-lg text-white font-medium">No requiere experiencia espiritual.</p>
                    </div>
                    <div className="flex items-center gap-5 bg-[#c8a24a]/10 border border-[#c8a24a]/30 rounded-xl p-6 mt-6 shadow-[0_0_20px_rgba(200,162,74,0.1)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#c8a24a]/0 via-[#c8a24a]/5 to-[#c8a24a]/0 pointer-events-none"></div>
                        <div className="w-3 h-3 rounded-full bg-[#c8a24a] shrink-0 shadow-[0_0_10px_rgba(200,162,74,0.8)]"></div>
                        <p className="text-xl text-white font-bold relative z-10">Solo disciplina diaria.</p>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 7 — VISÃO FUTURA */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto border-b border-[#1f1f1f]">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] leading-tight mb-6">
                            Imagina despertar <br />
                            con una sensación distinta.
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-200 font-medium">
                            Sin tensión en el pecho al revisar tus cuentas. <br className="hidden md:block" />
                            <span className="text-white">Sin ruido mental constante.</span>
                        </p>

                        <div className="space-y-6 text-lg text-gray-300 mt-8">
                            <p className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a24a] shrink-0"></span>
                                Más claridad.
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a24a] shrink-0"></span>
                                Menos ansiedad al revisar tus cuentas.
                            </p>
                            <p className="flex items-center gap-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a24a] shrink-0"></span>
                                Más control sobre tus decisiones financieras.
                            </p>
                        </div>
                    </div>

                    {/* Imagem Paz Matinal */}
                    <div className="w-full md:w-1/2 aspect-square bg-[#1f1f1f]/50 border border-[#1f1f1f]/50 rounded-[20px] flex items-center justify-center relative shadow-[0_0_60px_rgba(200,162,74,0.05)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent z-10 bottom-0 top-2/3"></div>
                        <Image
                            src="/paz-matinal.png"
                            alt="Sensación de paz matinal"
                            fill
                            className="object-cover object-center grayscale-[5%] hover:scale-105 transition-transform duration-[20s] z-0"
                        />
                    </div>
                </div>
            </section>

            {/* SEÇÃO 8 — CTA FINAL */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-4xl mx-auto text-center border-b border-[#1f1f1f]">
                <div className="bg-gradient-to-b from-[#111111] to-[#0b0b0b] border border-[#1f1f1f] rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(200,162,74,0.05)]">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
                        Tal vez esto no llegó a ti <br className="hidden md:block" />
                        por casualidad.
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
                        Algunos conocimientos aparecen <br className="md:hidden" />
                        cuando la persona está lista <span className="text-[#c8a24a]">para dejar atrás el mismo patrón.</span>
                    </p>

                    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-6">
                        <CheckoutLink
                            className="w-full bg-[#c8a24a] hover:bg-[#b08d3e] text-[#0b0b0b] font-bold text-lg md:text-xl py-5 px-8 rounded-lg shadow-[0_0_50px_rgba(255,245,200,0.55)] transition-all hover:scale-[1.03] hover:shadow-[0_0_70px_rgba(255,250,220,0.7)] active:scale-95 text-center flex items-center justify-center gap-2"
                        >
                            Acceder ahora
                        </CheckoutLink>

                        <p className="text-center text-sm md:text-base text-gray-200 mt-2 font-medium">
                            Tu acceso comienza hoy. <br className="md:hidden" />
                            <span className="text-white/80">Lo único que falta es tu decisión.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-[#c8a24a]" />
                                <span>Acceso inmediato</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#1f1f1f]"></div>
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-[#c8a24a]" />
                                <span>Garantía 7 días</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-[#1f1f1f]"></div>
                            <div className="flex items-center gap-2">
                                <Lock className="w-4 h-4 text-[#c8a24a]" />
                                <span>Pago seguro vía Hotmart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEÇÃO 9 — FAQ e CTA Final Extra */}
            <div className="w-full flex items-center justify-center opacity-40">
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#c8a24a]"></div>
                <div className="w-1 h-1 rotate-45 bg-[#c8a24a] mx-3 shadow-[0_0_8px_rgba(200,162,74,0.8)]"></div>
                <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#c8a24a]"></div>
            </div>
            <section className="w-full py-28 md:py-32 px-6 max-w-3xl mx-auto pb-32">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#c8a24a] mb-4">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-xl text-gray-300 mb-2">
                        Aclaraciones importantes antes de acceder al Guía Divino.
                    </p>
                    <p className="text-lg text-gray-400">
                        Si algo aún te detiene, aquí tienes lo más importante con claridad.
                    </p>
                </div>

                <div className="space-y-4 mb-20">
                    {[
                        {
                            q: "¿Esto tiene relación con alguna religión?",
                            a: "No.\nLas 12 Palabras no pertenecen a ninguna religión específica.\n\nSon un conjunto de palabras transmitidas dentro de una tradición espiritual antigua que busca reorganizar el enfoque interno de la persona.\n\nPuedes aplicarlas independientemente de tus creencias personales.\n\nNo necesitas cambiar tu religión ni adoptar ninguna práctica religiosa nueva."
                        },
                        {
                            q: "¿Cómo se utiliza exactamente el audio?",
                            a: "El proceso es muy simple.\n\nDespués de acceder al Guía Divino recibirás un audio con las 12 palabras, junto con instrucciones claras para utilizarlas correctamente.\n\nLa práctica consiste en escuchar o pronunciar las palabras diariamente durante un período recomendado de 40 días.\n\nEl objetivo es generar un proceso progresivo de reorganización mental, claridad interna y disciplina financiera."
                        },
                        {
                            q: "¿Cuándo puedo empezar a escuchar las palabras?",
                            a: "El acceso es inmediato.\n\nDespués de completar el pago recibirás acceso digital al contenido completo del programa, incluyendo el audio principal y todos los materiales complementarios.\n\nPodrás comenzar a aplicar el método el mismo día."
                        },
                        {
                            q: "¿Esto es algún tipo de magia o promesa milagrosa?",
                            a: "No.\n\nGuía Divino no es magia ni una promesa de riqueza instantánea.\n\nEs un sistema de práctica mental y espiritual diseñado para ayudar a reorganizar tu enfoque interno, tu disciplina y tu relación con el dinero.\n\nMuchas personas descubren que, al aplicar el proceso de forma constante, comienzan a tomar decisiones más claras y a generar nuevas oportunidades en su vida financiera."
                        }
                    ].map((faq, i) => (
                        <details key={i} className="group bg-[#1f1f1f]/20 border border-[#1f1f1f] rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-white hover:text-[#c8a24a] transition-colors">
                                <span className="pr-6">{faq.q}</span>
                                <ChevronDown className="w-5 h-5 shrink-0 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                            </summary>
                            <div className="p-6 pt-0 text-gray-400 leading-relaxed whitespace-pre-line text-base">
                                <div className="border-t border-[#1f1f1f]/50 pt-6 mt-2">
                                    {faq.a}
                                </div>
                            </div>
                        </details>
                    ))}
                </div>

                <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
                    <CheckoutLink
                        className="w-full bg-[#c8a24a] hover:bg-[#b08d3e] text-[#0b0b0b] font-bold text-lg md:text-xl py-5 px-8 rounded-lg shadow-[0_0_50px_rgba(255,245,200,0.55)] transition-all hover:scale-[1.02] hover:shadow-[0_0_70px_rgba(255,250,220,0.7)] active:scale-95 text-center flex items-center justify-center font-sans tracking-wide"
                    >
                        Acceder ahora al Guía Divino
                    </CheckoutLink>

                    <p className="text-[#c8a24a] font-medium mt-1 mb-2">
                        Escucha las 12 palabras hoy mismo.
                    </p>

                    <div className="flex items-center gap-3 text-sm text-gray-400 mt-2">
                        <span>Acceso inmediato</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#1f1f1f]"></div>
                        <span>Pago seguro vía Hotmart</span>
                    </div>
                </div>
            </section>

        </main >
    );
}
