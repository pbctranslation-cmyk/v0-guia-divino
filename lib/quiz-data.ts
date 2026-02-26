export interface QuizOption {
  label: string
  imageSrc: string
  emoji?: string
}

export interface QuizQuestion {
  id: number
  question: string
  questionHighlight?: string
  questionAfterHighlight?: string
  subtitle?: string
  subtitleIsPrimary?: boolean
  headline?: {
    before: string
    highlight: string
    after: string
    line2before?: string
    line2highlight?: string
    line2after?: string
  }
  warningText?: string
  warningBanner?: string
  layout?: "2-col" | "2x2" | "list" | "image-cta" | "multi-select"
  stepImage?: string
  videoSrc?: string
  redBanner?: string
  ctaText?: string
  ctaButtonLabel?: string
  type?: "default" | "checkout" | "upsell1" | "upsell2"
  options: QuizOption[]
  correctAnswer: number
}

// Step 2 variants based on step 1 choice
export const step2Man: QuizQuestion = {
  id: 2,
  question: "¿Cuántos años tienes?",
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
  question: "¿Cuántos años tienes?",
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
  {
    id: 2,
    question: "¿Cuántos años tienes?",
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
    id: 17,
    question: "¿Te comprometes a usar este poder solo para propósitos nobles?",
    warningBanner: "Las palabras têm consciência própria, e se voltam contra quem as usa com más intenções.",
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
    videoSrc: "/images/step18-video.mp4",
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
    question: "Sientes que fuiste elegido por algo mais grande para finalmente receber o conhecimento que esteve guardado por séculos?",
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
    ctaText: "Las 12 palabras sagradas te estão esperando. El conocimiento que cambió la historia del pueblo judío está a un paso de ser tuyo.",
    ctaButtonLabel: "QUIERO MI ACTIVACIÓN AHORA",
    options: [],
    correctAnswer: 0,
  },
]
