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
    id: 18,
    question: "",
    redBanner: "MIRA EL VIDEO DE ABAJO PARA RECIBIR LAS 12 PALABRAS SAGRADAS DE LA PROSPERIDAD JUDÍA...",
    subtitle: "Advertencia: Si sales de esta página, pierdes el acesso para siempre.",
    layout: "image-cta",
    videoSrc: "/images/step19-video.mp4",
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
