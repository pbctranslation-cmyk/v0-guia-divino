"use client"

import { BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizStartProps {
  onStart: () => void
}

export function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="flex flex-col items-center gap-10 text-center max-w-lg">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/5">
          <BookOpen className="h-10 w-10 text-primary" />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
            Quiz de Religiao
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-md mx-auto">
            Teste seus conhecimentos com 25 perguntas sobre o tema. Clique em uma das duas imagens para escolher sua resposta.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              25 perguntas
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              2 opcoes cada
            </span>
          </div>
        </div>

        <Button
          onClick={onStart}
          size="lg"
          className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 cursor-pointer"
        >
          Comecar Quiz
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
