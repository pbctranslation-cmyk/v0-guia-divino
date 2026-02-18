"use client"

import { cn } from "@/lib/utils"
import type { QuizQuestion } from "@/lib/quiz-data"
import { ImageIcon } from "lucide-react"

interface QuizQuestionCardProps {
  question: QuizQuestion
  onSelectOption: (index: 0 | 1) => void
}

export function QuizQuestionCard({
  question,
  onSelectOption,
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

      <div
        className="grid grid-cols-2 gap-4 md:gap-6"
        role="group"
        aria-label="Opcoes de resposta"
      >
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index as 0 | 1)}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-xl border border-border",
              "bg-card transition-all duration-200 cursor-pointer",
              "hover:border-primary/60 hover:shadow-[0_0_24px_-4px] hover:shadow-primary/20",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
          >
            {/* Image area */}
            <div className="relative aspect-[4/3] w-full bg-secondary/60 overflow-hidden">
              {option.imageSrc ? (
                <img
                  src={option.imageSrc}
                  alt={option.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-muted-foreground transition-colors duration-200 group-hover:text-primary/60">
                  <ImageIcon className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
                  <span className="text-xs tracking-wider uppercase">Imagem</span>
                </div>
              )}
            </div>

            {/* Label */}
            <div className="flex items-center justify-center px-3 py-3 md:py-4">
              <span className="text-sm md:text-base font-medium text-foreground/80 transition-colors duration-200 group-hover:text-foreground text-balance text-center leading-snug">
                {option.label}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
