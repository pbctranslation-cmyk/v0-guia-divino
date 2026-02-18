"use client"

import { useState, useCallback } from "react"
import { quizQuestions } from "@/lib/quiz-data"
import { QuizProgress } from "@/components/quiz-progress"
import { QuizQuestionCard } from "@/components/quiz-question-card"
import { QuizResults } from "@/components/quiz-results"
import { QuizStart } from "@/components/quiz-start"

type QuizPhase = "start" | "playing" | "results"

export function Quiz() {
  const [phase, setPhase] = useState<QuizPhase>("start")
  const [currentStep, setCurrentStep] = useState(0)
  const [score, setScore] = useState(0)

  const currentQuestion = quizQuestions[currentStep]

  const handleStart = useCallback(() => {
    setPhase("playing")
    setCurrentStep(0)
    setScore(0)
  }, [])

  const handleSelectOption = useCallback(
    (index: 0 | 1) => {
      const isCorrect = index === currentQuestion.correctAnswer
      const nextScore = isCorrect ? score + 1 : score

      setScore(nextScore)

      if (currentStep < quizQuestions.length - 1) {
        setCurrentStep((prev) => prev + 1)
      } else {
        // Use the calculated nextScore since setState is async
        setScore(nextScore)
        setPhase("results")
      }
    },
    [currentStep, currentQuestion, score]
  )

  const handleRestart = useCallback(() => {
    setPhase("start")
    setCurrentStep(0)
    setScore(0)
  }, [])

  if (phase === "start") {
    return <QuizStart onStart={handleStart} />
  }

  if (phase === "results") {
    return (
      <QuizResults
        score={score}
        totalQuestions={quizQuestions.length}
        onRestart={handleRestart}
      />
    )
  }

  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 px-4 py-8 md:py-12">
      <QuizProgress currentStep={currentStep} totalSteps={quizQuestions.length} />

      <QuizQuestionCard
        key={currentStep}
        question={currentQuestion}
        onSelectOption={handleSelectOption}
      />
    </div>
  )
}
