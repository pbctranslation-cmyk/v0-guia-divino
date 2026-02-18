export interface QuizOption {
  label: string
  imageSrc: string
}

export interface QuizQuestion {
  id: number
  question: string
  subtitle?: string
  headline?: {
    before: string
    highlight: string
    after: string
    line2before?: string
    line2highlight?: string
    line2after?: string
  }
  warningText?: string
  options: [QuizOption, QuizOption]
  correctAnswer: 0 | 1
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "",
    headline: {
      before: "SEU DESTINO FINANCEIRO",
      highlight: "PODE MUDAR HOJE.",
      after: "",
      line2before: "FACA O TESTE",
      line2highlight: "DE 30 SEGUNDOS",
      line2after: "E DESCUBRA SE A ORACAO DAS 12 PALAVRAS FOI DESTINADA PARA VOCE.",
    },
    subtitle: "As palavras precisam saber: voce e...",
    warningText: "ATENCAO: Apenas 2.8% sao aprovados neste teste.",
    options: [
      { label: "Homem", imageSrc: "/images/img01.png" },
      { label: "Mulher", imageSrc: "/images/img02.png" },
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "Pergunta 2 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: "Pergunta 3 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 4,
    question: "Pergunta 4 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 5,
    question: "Pergunta 5 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 6,
    question: "Pergunta 6 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Pergunta 7 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 8,
    question: "Pergunta 8 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: "Pergunta 9 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 10,
    question: "Pergunta 10 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "Pergunta 11 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 12,
    question: "Pergunta 12 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Pergunta 13 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: "Pergunta 14 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 15,
    question: "Pergunta 15 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Pergunta 16 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: "Pergunta 17 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "Pergunta 18 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: "Pergunta 19 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: "Pergunta 20 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: "Pergunta 21 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: "Pergunta 22 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "Pergunta 23 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "Pergunta 24 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
  {
    id: 25,
    question: "Pergunta 25 - Insira sua pergunta aqui",
    options: [
      { label: "Opcao A", imageSrc: "" },
      { label: "Opcao B", imageSrc: "" },
    ],
    correctAnswer: 0,
  },
]
