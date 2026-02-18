"use client"

import { cn } from "@/lib/utils"
import type { QuizQuestion } from "@/lib/quiz-data"
import { ChevronRight, ImageIcon, TriangleAlert } from "lucide-react"

interface QuizQuestionCardProps {
  question: QuizQuestion
  onSelectOption: (index: 0 | 1) => void
}

export function QuizQuestionCard({
  question,
  onSelectOption,
}: QuizQuestionCardProps) {
  const isSpecialStep = !!question.headline

  return (
    <div className="flex flex-col gap-6">
      {/* Headline / Question */}
      {isSpecialStep && question.headline ? (
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-serif text-xl md:text-2xl font-bold uppercase leading-snug tracking-wide text-foreground">
            {question.headline.before}{" "}
            <span className="text-primary">{question.headline.highlight}</span>
            {question.headline.after ? ` ${question.headline.after}` : ""}
            <br />
            {question.headline.line2before && (
              <>
                {question.headline.line2before}{" "}
                <span className="text-primary">{question.headline.line2highlight}</span>
                {question.headline.line2after ? ` ${question.headline.line2after}` : ""}
              </>
            )}
          </h2>

          {question.subtitle && (
            <p className="text-sm md:text-base text-muted-foreground">
              {question.subtitle}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
            {"Pergunta " + question.id + " de 25"}
          </span>
          <h2 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-relaxed text-balance">
            {question.question}
          </h2>
        </div>
      )}

      {/* Image options */}
      <div
        className="grid grid-cols-2 gap-3 md:gap-4"
        role="group"
        aria-label="Opcoes de resposta"
      >
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index as 0 | 1)}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-lg",
              "bg-card transition-all duration-200 cursor-pointer",
              "hover:shadow-[0_0_20px_-4px] hover:shadow-primary/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            )}
          >
            {/* Image area */}
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              {option.imageSrc ? (
                <img
                  src={option.imageSrc}
                  alt={option.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary/60 text-muted-foreground transition-colors duration-200 group-hover:text-primary/60">
                  <ImageIcon className="h-10 w-10 md:h-12 md:w-12" strokeWidth={1} />
                  <span className="text-xs tracking-wider uppercase">Imagem</span>
                </div>
              )}
            </div>

            {/* Label with chevron */}
            <div className="flex items-center justify-between px-3 py-2.5 md:px-4 md:py-3 bg-card">
              <span className="text-sm md:text-base font-medium text-foreground">
                {option.label}
              </span>
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
            </div>
          </button>
        ))}
      </div>

      {/* Warning banner */}
      {question.warningText && (
        <div className="flex items-start gap-2 rounded-lg bg-secondary px-4 py-3 text-center">
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
            <span className="font-bold text-primary">ATENCAO:</span>{" "}
            {"Apenas "}
            <span className="font-bold text-primary">2.8%</span>
            {" sao aprovados neste teste."}
          </p>
        </div>
      )}
    </div>
  )
}
