"use client"

import { RotateCcw, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizResultsProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100)

  const getMessage = () => {
    if (percentage >= 90) return "Excelente! Conhecimento excepcional!"
    if (percentage >= 70) return "Muito bem! Otimo desempenho!"
    if (percentage >= 50) return "Bom trabalho! Continue estudando!"
    if (percentage >= 30) return "Nao desista, voce pode melhorar!"
    return "Tente novamente e aprenda mais!"
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-8 text-center max-w-md">
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-primary/10">
          <Trophy className="h-12 w-12 text-primary" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Resultado Final
          </h1>
          <p className="text-lg text-muted-foreground">
            {getMessage()}
          </p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-7xl font-bold text-primary tabular-nums">
              {score}
            </span>
            <span className="text-2xl text-muted-foreground">
              {"/ " + totalQuestions}
            </span>
          </div>
          <span className="text-sm tracking-widest uppercase text-muted-foreground">
            {"respostas corretas (" + percentage + "%)"}
          </span>
        </div>

        <div className="h-2 w-full max-w-xs rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <Button
          onClick={onRestart}
          size="lg"
          className="mt-4 gap-2 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
        >
          <RotateCcw className="h-4 w-4" />
          Refazer Quiz
        </Button>
      </div>
    </div>
  )
}
