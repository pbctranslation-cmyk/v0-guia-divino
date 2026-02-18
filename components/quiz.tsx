"use client"

import { useState, useCallback } from "react"
import { quizQuestions } from "@/lib/quiz-data"
import { QuizProgress } from "@/components/quiz-progress"
import { QuizQuestionCard } from "@/components/quiz-question-card"
import { QuizResults } from "@/components/quiz-results"

export function Quiz() {
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const currentQuestion = quizQuestions[currentStep]

  const handleSelectOption = useCallback(
    (index: 0 | 1) => {
      const isCorrect = index === currentQuestion.correctAnswer
      const nextScore = isCorrect ? score + 1 : score

      setScore(nextScore)

      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        setScore(nextScore)
        setFinished(true)
      }
    },
    [currentStep, currentQuestion, score]
  )

  const handleRestart = useCallback(() => {
    setCurrentStep(0)
    setScore(0)
    setFinished(false)
  }, [])

  if (finished) {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-4 py-6 md:py-10">
      <QuizProgress currentStep={currentStep} totalSteps={quizQuestions.length} />

      <QuizQuestionCard
        key={currentStep}
        question={currentQuestion}
        onSelectOption={handleSelectOption}
      />
    </div>
  )
}
