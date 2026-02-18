"use client"

import { cn } from "@/lib/utils"
import type { QuizQuestion } from "@/lib/quiz-data"
import { Check, X } from "lucide-react"

interface QuizQuestionCardProps {
  question: QuizQuestion
  selectedAnswer: number | null
  hasConfirmed: boolean
  onSelectAnswer: (index: number) => void
}

const optionLabels = ["A", "B", "C", "D"]

export function QuizQuestionCard({
  question,
  selectedAnswer,
  hasConfirmed,
  onSelectAnswer,
}: QuizQuestionCardProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
          {"Pergunta " + question.id + " de 25"}
        </span>
        <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-relaxed text-balance">
          {question.question}
        </h2>
      </div>

      <div className="flex flex-col gap-3" role="radiogroup" aria-label="Opcoes de resposta">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index
          const isCorrect = hasConfirmed && index === question.correctAnswer
          const isWrong = hasConfirmed && isSelected && index !== question.correctAnswer

          return (
            <button
              key={index}
              onClick={() => !hasConfirmed && onSelectAnswer(index)}
              disabled={hasConfirmed}
              role="radio"
              aria-checked={isSelected}
              className={cn(
                "group relative flex items-center gap-4 rounded-lg border px-5 py-4 text-left transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                !hasConfirmed && !isSelected && "border-border bg-card hover:border-primary/40 hover:bg-secondary cursor-pointer",
                !hasConfirmed && isSelected && "border-primary bg-primary/10 cursor-pointer",
                isCorrect && "border-success bg-success/10",
                isWrong && "border-destructive bg-destructive/10",
                hasConfirmed && !isCorrect && !isWrong && "border-border/50 bg-card opacity-50"
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-sm font-semibold transition-colors duration-200",
                  !hasConfirmed && !isSelected && "bg-secondary text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary",
                  !hasConfirmed && isSelected && "bg-primary text-primary-foreground",
                  isCorrect && "bg-success text-success-foreground",
                  isWrong && "bg-destructive text-foreground",
                  hasConfirmed && !isCorrect && !isWrong && "bg-secondary text-muted-foreground"
                )}
              >
                {isCorrect ? (
                  <Check className="h-4 w-4" />
                ) : isWrong ? (
                  <X className="h-4 w-4" />
                ) : (
                  optionLabels[index]
                )}
              </span>
              <span
                className={cn(
                  "text-base leading-relaxed transition-colors duration-200",
                  !hasConfirmed && !isSelected && "text-foreground/80 group-hover:text-foreground",
                  !hasConfirmed && isSelected && "text-foreground",
                  isCorrect && "text-success font-medium",
                  isWrong && "text-destructive",
                  hasConfirmed && !isCorrect && !isWrong && "text-muted-foreground"
                )}
              >
                {option}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
