"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import { quizQuestions, step2Man, step2Woman } from "@/lib/quiz-data"
import { QuizProgress } from "@/components/quiz-progress"
import { QuizQuestionCard } from "@/components/quiz-question-card"


export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [genderChoice, setGenderChoice] = useState<"man" | "woman" | null>(null)
  const [isClient, setIsClient] = useState(false)

  // Initialization: read ?step= from URL
  useEffect(() => {
    setIsClient(true)
    const searchParams = new URLSearchParams(window.location.search)
    const stepParam = searchParams.get("step")

    if (stepParam) {
      const stepId = parseInt(stepParam, 10)
      const targetIndex = quizQuestions.findIndex((q) => q.id === stepId)
      if (targetIndex !== -1) {
        setCurrentStep(targetIndex)
      }
    }
  }, [])

  // Build the effective questions list, injecting the correct step 2 variant
  const effectiveQuestions = useMemo(() => {
    const questions = [...quizQuestions]
    if (genderChoice === "man") {
      questions[1] = step2Man
    } else if (genderChoice === "woman") {
      questions[1] = step2Woman
    }
    return questions
  }, [genderChoice])

  const currentQuestion = effectiveQuestions[currentStep]

  const handleSelectOption = useCallback(
    (index: number) => {
      // Capture gender choice on step 1
      if (currentStep === 0) {
        setGenderChoice(index === 0 ? "man" : "woman")
      }

      const isCorrect = index === currentQuestion.correctAnswer
      const nextScore = isCorrect ? score + 1 : score

      setScore(nextScore)

      if (currentStep < effectiveQuestions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Dispara evento de InitiateCheckout do Facebook
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'InitiateCheckout');
        }

        // Exibe o spinner de carregamento e redireciona direto para o checkout
        setFinished(true)
        window.location.href = "https://pay.hotmart.com/I104537340A?off=5v6zt5x8"
      }
    },
    [currentStep, currentQuestion, score, effectiveQuestions.length]
  )



  const handleRestart = useCallback(() => {
    setCurrentStep(0)
    setScore(0)
    setFinished(false)
    setGenderChoice(null)
  }, [])

  if (finished) {
    // Tela de transição enquanto o redirecionamento do window.location.href acontece
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center px-4 animate-in fade-in duration-500">
        <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 className="text-xl font-bold font-serif">Processando seu resultado...</h2>
        <p className="text-muted-foreground text-sm">Transferindo para o ambiente seguro.</p>
      </div>
    )
  }

  if (!isClient) return null // Evita piscar o primeiro passo no carregamento se houver redirecionamento

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-4 md:py-10">
      <QuizProgress currentStep={currentStep} totalSteps={effectiveQuestions.length} />
      <QuizQuestionCard
        key={`${currentStep}-${genderChoice}`}
        question={currentQuestion}
        onSelectOption={handleSelectOption}
      />
    </div>
  )
}
