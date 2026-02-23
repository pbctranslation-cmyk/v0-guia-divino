export interface QuizOption {
  label: string
  imageSrc: string
  emoji?: string
}

export interface QuizQuestion {
  id: number
  question: string
  questionHighlight?: string   // palavra(s) em amarelo antes do restante da frase
  questionAfterHighlight?: string // texto após o highlight
  subtitle?: string
  subtitleIsPrimary?: boolean  // se true, renderiza o subtitle na cor primária (amarelo)
  headline?: {
    before: string
    highlight: string
    after: string
    line2before?: string
    line2highlight?: string
    line2after?: string
  }
  warningText?: string
  warningBanner?: string  // aviso no topo com prefixo "Aviso:" em amarelo
  layout?: "2-col" | "2x2" | "list" | "image-cta" | "multi-select"
  stepImage?: string      // imagem hero para layout image-cta
  videoSrc?: string       // video para layout video
  redBanner?: string      // banner vermelho no topo
  ctaText?: string        // texto abaixo da imagem/video
  ctaButtonLabel?: string // rótulo do botão (padrão "Continuar")
  type?: "default" | "checkout" | "upsell1" | "upsell2"
  options: QuizOption[]
  correctAnswer: number
}

// Step 2 variants based on step 1 choice
export const step2Man: QuizQuestion = {
  id: 2,
  question: "Que idade voce tem?",
  layout: "2x2",
  options: [
    { label: "18 - 24", imageSrc: "/images/man-18-24.jpg" },
    { label: "25 - 34", imageSrc: "/images/man-25-34.jpg" },
    { label: "35 - 44", imageSrc: "/images/man-35-44.jpg" },
    { label: "45+", imageSrc: "/images/man-45.jpg" },
  ],
  correctAnswer: 0,
}

export const step2Woman: QuizQuestion = {
  id: 2,
  question: "Que idade voce tem?",
  layout: "2x2",
  options: [
    { label: "18 - 24", imageSrc: "/images/woman-18-24.jpg" },
    { label: "25 - 34", imageSrc: "/images/woman-25-34.jpg" },
    { label: "35 - 44", imageSrc: "/images/woman-35-44.jpg" },
    { label: "45+", imageSrc: "/images/woman-45.jpg" },
  ],
  correctAnswer: 0,
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "",
    headline: {
      before: "TU DESTINO FINANCIERO",
      highlight: "PUEDE CAMBIAR HOY.",
      after: "",
      line2before: "REALICE LA PRUEBA",
      line2highlight: "DE 30 SEGUNDOS",
      line2after: "Y DESCUBRA SI LA ORACIÓN DE 12 PALABRAS FUE HECHA PARA USTED.",
    },
    subtitle: "Las palabras necesitan saber: tú eres...",
    warningText: "ATENCIÓN: Sólo el 2,8% pasa esta prueba.",
    layout: "2-col",
    options: [
      { label: "Hombre", imageSrc: "/images/img01.png" },
      { label: "Mujer", imageSrc: "/images/img02.png" },
    ],
    correctAnswer: 0,
  },
  // Step 2 is injected dynamically based on step 1 choice (see quiz.tsx)
  // Placeholder so IDs stay consistent - this will be replaced at runtime
  {
    id: 2,
    question: "¿Cuántos años tiene?",
    layout: "2x2",
    options: [
      { label: "18 - 24", imageSrc: "" },
      { label: "25 - 34", imageSrc: "" },
      { label: "35 - 44", imageSrc: "" },
      { label: "45+", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Cuando el dinero llega a tu vida, ¿qué pasa después?",
    layout: "list",
    options: [
      { label: "Siempre aparece una urgencia o una cuenta que no esperaba", imageSrc: "", emoji: "📱" },
      { label: "Se va sin que entienda cómo", imageSrc: "", emoji: "🕯️" },
      { label: "Lo guardo, pero me da miedo gastarlo", imageSrc: "", emoji: "👐" },
      { label: "Se multiplica por sí solo", imageSrc: "", emoji: "🙏" },
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "¿Sabías que las familias judías controlan el 40% de la riqueza de ",
    questionHighlight: "Estados Unidos",
    questionAfterHighlight: " siendo solo el 2% de la población?",
    layout: "list",
    options: [
      { label: "No tenía idea de eso", imageSrc: "", emoji: "🤩" },
      { label: "He escuchado algo al respecto", imageSrc: "", emoji: "😐" },
      { label: "Sí, siempre me he preguntado cómo lo logran", imageSrc: "", emoji: "❓" },
      { label: "Es una coincidencia", imageSrc: "", emoji: "😮" },
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "",
    layout: "image-cta",
    stepImage: "/images/step5-elite-meeting.jpg",
    ctaText: "Los Rothschild, Rockefeller, Goldman... todos conocían el secreto...",
    ctaButtonLabel: "Continuar",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "¿Alguna vez has intentado la ",
    questionHighlight: "Ley de Atracción",
    questionAfterHighlight: ", el pensamiento positivo o la manifestación?",
    layout: "list",
    options: [
      { label: "Sí, varias veces y NUNCA funcionó bien", imageSrc: "", emoji: "✨" },
      { label: "Lo intenté, pero los resultados fueron temporales", imageSrc: "", emoji: "🌀" },
      { label: "Nunca lo intenté en serio", imageSrc: "", emoji: "😅" },
      { label: "Funcionó perfectamente para mí", imageSrc: "", emoji: "⭐" },
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "¿Alguna vez te has preguntado:",
    subtitle: '"¿Por qué esa persona que trabaja menos tiene más que yo?"',
    layout: "list",
    options: [
      { label: "Sí, eso me frustra profundamente", imageSrc: "" },
      { label: "A veces pienso en eso", imageSrc: "" },
      { label: "Rara vez", imageSrc: "" },
      { label: "Nunca", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "",
    layout: "image-cta",
    stepImage: "/images/step8-biblical-scene.jpg",
    ctaText: "Esa persona probablemente conoce frecuencias que tú aún no conoces",
    ctaButtonLabel: "Continuar",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Completa la frase:",
    subtitle: '"Cuando pienso en tener mucho dinero, yo..."',
    subtitleIsPrimary: true,
    layout: "list",
    options: [
      { label: "Siento que no lo merezco o no soy capaz", imageSrc: "", emoji: "😟" },
      { label: "Me pongo ansioso(a) por miedo a perderlo", imageSrc: "", emoji: "😐" },
      { label: "Me siento culpable por desearlo", imageSrc: "", emoji: "😔" },
      { label: "Sé que es mío por derecho", imageSrc: "", emoji: "😌" },
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "",
    redBanner: "¡Tu respuesta revela tu bloqueo principal!",
    layout: "image-cta",
    stepImage: "/images/step10-woman-problems.png",
    ctaText: "La culpa corta tu conexión com la prosperidad. El dinero es solo energia - no es bueno ni malo. Libérate: puedes desear y seguir siendo luz.",
    ctaButtonLabel: "Continuar",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "¿Sabías que ",
    questionHighlight: "8 de las 10 familias más ricas",
    questionAfterHighlight: " de la historia son judías?",
    layout: "list",
    options: [
      { label: "No me había dado cuenta de eso", imageSrc: "", emoji: "📱" },
      { label: "Ya noté ese patrón", imageSrc: "", emoji: "🕯️" },
      { label: "Siempre me he preguntado por qué", imageSrc: "", emoji: "🙏" },
      { label: "Eso es una coincidencia", imageSrc: "", emoji: "👐" },
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "",
    layout: "image-cta",
    stepImage: "/images/step12-powerful-men.png",
    ctaText: "Rothschild, Warburg, Goldman, Sachs, Lehman, Schiff, Oppenheimer, Rockefeller...",
    ctaButtonLabel: "Continuar",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "¿Y si te dijera que una ",
    questionHighlight: "oración de 12 palabras",
    questionAfterHighlight: " en hebreo puede cambiar tu realidad financiera en 40 días, tú...?",
    layout: "list",
    options: [
      { label: "La intentaría de inmediato", imageSrc: "", emoji: "😄" },
      { label: "Me daría mucha curiosidad saber más", imageSrc: "", emoji: "🤩" },
      { label: "Necesitaría entender cómo funciona primero", imageSrc: "", emoji: "✨" },
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "¿Cuál es tu mayor deseo en este momento?",
    subtitle: "Elige lo que más deseas",
    layout: "list",
    options: [
      { label: "Pagar todas las deudas", imageSrc: "" },
      { label: "Tener un fondo de emergencia", imageSrc: "" },
      { label: "Alcanzar la libertad financiera", imageSrc: "" },
      { label: "Ayudar a mi familia", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "",
    layout: "image-cta",
    stepImage: "/images/step15-mystic-woman.png",
    ctaText: "Las palabras se ajustan a tu deseo especifico...",
    ctaButtonLabel: "Continuar",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Marca lo que más deseas manifestar en los próximos 30 días:",
    subtitle: "(Elección múltiple)",
    layout: "multi-select",
    options: [
      { label: "Abundancia financiera", imageSrc: "" },
      { label: "Paz interior", imageSrc: "" },
      { label: "Alegría", imageSrc: "" },
      { label: "Motivación", imageSrc: "" },
      { label: "Confianza", imageSrc: "" },
      { label: "Relaciones saludables", imageSrc: "" },
      { label: "Propósito", imageSrc: "" },
      { label: "Gratitud", imageSrc: "" },
      { label: "Claridad mental", imageSrc: "" },
      { label: "Pensamientos positivos", imageSrc: "" },
      { label: "Salud física", imageSrc: "" },
      { label: "Enfoque", imageSrc: "" },
      { label: "Evolución personal", imageSrc: "" },
      { label: "Productividad", imageSrc: "" },
      { label: "Manifestar deseos", imageSrc: "" },
      { label: "Paciencia", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "¿Te comprometes a usar este poder solo para propósitos nobles?",
    warningBanner: "Las palabras tienen conciencia propia, y se vuelven contra quien las usa con malas intenciones.",
    stepImage: "/images/step17-hebrew-scroll.jpg",
    layout: "list",
    options: [
      { label: "Sí, me comprometo completamente", imageSrc: "", emoji: "🙏" },
      { label: "No puedo garantizarlo", imageSrc: "", emoji: "✋" },
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "",
    redBanner: "MIRA EL VIDEO DE ABAJO PARA RECIBIR LAS 12 PALABRAS SAGRADAS DE LA PROSPERIDAD JUDÍA...",
    subtitle: "Advertencia: Si sales de esta página, pierdes el acesso para siempre.",
    layout: "image-cta",
    videoSrc: "/images/video_placeholder.mp4",
    options: [],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "¿Crees tener un corazón puro — libre de la avaricia y con el deseo genuino de transformar tu vida?",
    subtitle: "Responde para seguir",
    subtitleIsPrimary: true,
    layout: "2-col",
    options: [
      { label: "No", imageSrc: "", emoji: "🚫" },
      { label: "Si", imageSrc: "", emoji: "✅" },
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "Sientes que fuiste elegido por algo más grande para finalmente recibir el conocimiento que estuvo guardado por siglos?",
    subtitle: "Responde para seguir",
    subtitleIsPrimary: true,
    layout: "2-col",
    options: [
      { label: "No", imageSrc: "", emoji: "🚫" },
      { label: "Si", imageSrc: "", emoji: "✅" },
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "Si estas palabras realmente funcionan para quienes tienen pureza y fe...¿estás listo para demonstrarlo y comenzar hoy?",
    subtitle: "Responde para seguir",
    subtitleIsPrimary: true,
    layout: "2-col",
    options: [
      { label: "No", imageSrc: "", emoji: "🚫" },
      { label: "Si", imageSrc: "", emoji: "✅" },
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "",
    redBanner: "¡TEST COMPLETADO CON ÉXITO!",
    headline: {
      before: "EL MOMENTO DE TU",
      highlight: "ACTIVACIÓN",
      after: "HA LLEGADO.",
    },
    layout: "image-cta",
    stepImage: "/images/step22-mystic-boy.png",
    ctaText: "Las 12 palabras sagradas te están esperando. El conocimiento que cambió la historia del pueblo judío está a un paso de ser tuyo.",
    ctaButtonLabel: "QUIERO MI ACTIVACIÓN AHORA",
    options: [],
    correctAnswer: 0,
  },
]
