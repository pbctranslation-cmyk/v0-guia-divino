"use client"

import { useState, useCallback } from "react"
import { quizQuestions } from "@/lib/quiz-data"
import { QuizProgress } from "@/components/quiz-progress"
import { QuizQuestionCard } from "@/components/quiz-question-card"
import { QuizResults } from "@/components/quiz-results"
import { QuizStart } from "@/components/quiz-start"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

type QuizPhase = "start" | "playing" | "results"

export function Quiz() {
  const [phase, setPhase] = useState<QuizPhase>("start")
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [hasConfirmed, setHasConfirmed] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = quizQuestions[currentStep]

  const handleStart = useCallback(() => {
    setPhase("playing")
    setCurrentStep(0)
    setSelectedAnswer(null)
    setHasConfirmed(false)
    setScore(0)
  }, [])

  const handleSelectAnswer = useCallback((index: number) => {
    setSelectedAnswer(index)
  }, [])

  const handleConfirm = useCallback(() => {
    if (selectedAnswer === null) return
    setHasConfirmed(true)
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1)
    }
  }, [selectedAnswer, currentQuestion])

  const handleNext = useCallback(() => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep((prev) => prev + 1)
      setSelectedAnswer(null)
      setHasConfirmed(false)
    } else {
      setPhase("results")
    }
  }, [currentStep])

  const handleRestart = useCallback(() => {
    setPhase("start")
    setCurrentStep(0)
    setSelectedAnswer(null)
    setHasConfirmed(false)
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

      <div className="min-h-[400px]">
        <QuizQuestionCard
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          hasConfirmed={hasConfirmed}
          onSelectAnswer={handleSelectAnswer}
        />
      </div>

      <div className="flex items-center justify-end gap-3 border-t border-border pt-6">
        {!hasConfirmed ? (
          <Button
            onClick={handleConfirm}
            disabled={selectedAnswer === null}
            className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 px-8 cursor-pointer"
          >
            Confirmar
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 cursor-pointer"
          >
            {currentStep < quizQuestions.length - 1 ? "Proxima" : "Ver Resultado"}
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}
