"use client"

import { useState, useCallback, useMemo } from "react"
import { quizQuestions, step2Man, step2Woman } from "@/lib/quiz-data"
import { QuizProgress } from "@/components/quiz-progress"
import { QuizQuestionCard } from "@/components/quiz-question-card"
import { QuizResults } from "@/components/quiz-results"
import { HotmartCheckout } from "@/components/hotmart-checkout"

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [genderChoice, setGenderChoice] = useState<"man" | "woman" | null>(null)

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
        setScore(nextScore)
        setFinished(true)
      }
    },
    [currentStep, currentQuestion, score, effectiveQuestions.length]
  )

  const handlePurchaseComplete = useCallback(() => {
    // Advance from checkout step (23) to next step (24)
    if (currentStep < effectiveQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      setFinished(true)
    }
  }, [currentStep, effectiveQuestions.length])

  const handleRestart = useCallback(() => {
    setCurrentStep(0)
    setScore(0)
    setFinished(false)
    setGenderChoice(null)
  }, [])

  if (finished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={effectiveQuestions.length}
        onRestart={handleRestart}
      />
    )
  }

  const isCheckoutStep = currentQuestion.type === "checkout"

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-6 md:py-10">
      <QuizProgress currentStep={currentStep} totalSteps={effectiveQuestions.length} />

      {isCheckoutStep ? (
        <HotmartCheckout onPurchaseComplete={handlePurchaseComplete} />
      ) : (
        <QuizQuestionCard
          key={`${currentStep}-${genderChoice}`}
          question={currentQuestion}
          onSelectOption={handleSelectOption}
        />
      )}
    </div>
  )
}
