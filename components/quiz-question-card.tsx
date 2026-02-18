"use client"

import { cn } from "@/lib/utils"
import type { QuizQuestion } from "@/lib/quiz-data"
import { ChevronRight, ImageIcon, TriangleAlert } from "lucide-react"

interface QuizQuestionCardProps {
  question: QuizQuestion
  onSelectOption: (index: number) => void
}

export function QuizQuestionCard({
  question,
  onSelectOption,
}: QuizQuestionCardProps) {
  const isSpecialStep = !!question.headline
  const is2x2 = question.layout === "2x2"

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
          {question.question && (
            <h2 className="font-serif text-lg md:text-xl font-bold text-foreground leading-relaxed text-balance">
              {question.question}
            </h2>
          )}
        </div>
      )}

      {/* Image options grid */}
      <div
        className="grid grid-cols-2 gap-3 md:gap-4 mx-auto w-full max-w-md"
        role="group"
        aria-label="Opcoes de resposta"
      >
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(index)}
            className={cn(
              "group relative flex flex-col overflow-hidden rounded-lg",
              "transition-all duration-200 cursor-pointer",
              "hover:shadow-[0_0_20px_-4px] hover:shadow-primary/30",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              is2x2 ? "border-2 border-primary" : "bg-card"
            )}
          >
            {/* Image area */}
            <div className={cn(
              "relative w-full overflow-hidden",
              is2x2 ? "aspect-square" : "aspect-[3/4]"
            )}>
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

            {/* Label bar */}
            <div className={cn(
              "flex items-center justify-between px-3 py-2 md:px-4 md:py-2.5",
              is2x2 ? "bg-primary" : "bg-card"
            )}>
              <span className={cn(
                "text-sm md:text-base font-semibold",
                is2x2 ? "text-primary-foreground" : "text-foreground"
              )}>
                {option.label}
              </span>
              <ChevronRight className={cn(
                "h-4 w-4 md:h-5 md:w-5",
                is2x2
                  ? "text-primary-foreground/70 group-hover:text-primary-foreground"
                  : "text-muted-foreground group-hover:text-foreground"
              )} />
            </div>
          </button>
        ))}
      </div>

      {/* Warning banner */}
      {question.warningText && (
        <div className="flex items-start gap-2 rounded-lg bg-secondary px-4 py-3 text-center mx-auto max-w-md w-full">
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
