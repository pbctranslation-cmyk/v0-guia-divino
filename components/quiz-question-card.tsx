"use client"

import { useState, useRef, useEffect } from "react"
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
  const isList = question.layout === "list"
  const isImageCta = question.layout === "image-cta"
  const isMultiSelect = question.layout === "multi-select"

  // Local state for multi-select
  const [selected, setSelected] = useState<Set<number>>(new Set())
  const [showVideoBtn, setShowVideoBtn] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const lastTimeRef = useRef(0)

  useEffect(() => {
    // Reset state when question changes
    setShowVideoBtn(false)
    setSelected(new Set())
    lastTimeRef.current = 0

    // Show button after 3s for any question with video, except step 18
    if (question.videoSrc && question.id !== 18) {
      const timer = setTimeout(() => {
        setShowVideoBtn(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [question.id, question.videoSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !question.videoSrc) return

    const handleTimeUpdate = () => {
      // Prevent seeking forward
      if (video.currentTime > lastTimeRef.current + 1.5) {
        video.currentTime = lastTimeRef.current
      } else {
        lastTimeRef.current = video.currentTime
      }

      // Step 18 rule: show wait button after 16 min 10 sec (970s)
      if (question.id === 18 && video.currentTime >= 970) {
        setShowVideoBtn(true)
      }
    }

    const handleSeeking = () => {
      if (video.currentTime > lastTimeRef.current) {
        video.currentTime = lastTimeRef.current
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("seeking", handleSeeking)
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("seeking", handleSeeking)
    }
  }, [question.videoSrc, question.id])

  const toggleSelect = (index: number) => {
    setSelected(prev => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }

  // multi-select: checkboxes in a 2-col grid + Continue button
  if (isMultiSelect) {
    return (
      <div className="flex flex-col gap-5 w-full max-w-md mx-auto">
        <div className="text-center flex flex-col gap-1">
          <h2 className="font-serif text-lg md:text-xl font-bold text-foreground leading-relaxed">
            {question.question}
          </h2>
          {question.subtitle && (
            <p className="text-sm text-muted-foreground italic">{question.subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {question.options.map((option, index) => {
            const isChecked = selected.has(index)
            return (
              <button
                key={index}
                onClick={() => toggleSelect(index)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-3 py-3 text-left text-sm font-medium transition-all duration-150 border",
                  isChecked
                    ? "bg-primary/15 border-primary text-foreground"
                    : "bg-[#1a1a1a] border-white/10 text-foreground hover:border-white/30"
                )}
              >
                <span className={cn(
                  "w-4 h-4 shrink-0 rounded border-2 flex items-center justify-center transition-colors",
                  isChecked ? "border-primary bg-primary" : "border-white/30"
                )}>
                  {isChecked && (
                    <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 10 10" fill="none">
                      <path d="M1.5 5L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                {option.label}
              </button>
            )
          })}
        </div>

        <button
          onClick={() => onSelectOption(0)}
          className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          {question.ctaButtonLabel ?? "Continuar"}
        </button>
      </div>
    )
  }

  // image-cta: hero media + text + Continue button
  if (isImageCta) {
    const showButton = question.videoSrc ? showVideoBtn : true

    return (
      <div className="flex flex-col gap-5 items-center w-full max-w-md mx-auto">
        {question.redBanner && (
          <div className="w-full bg-[#cc0000] text-white py-2 px-3 rounded-xl text-center font-bold text-xs md:text-base mb-1">
            {question.redBanner}
          </div>
        )}

        {question.subtitle && (
          <p className={cn(
            "text-sm md:text-base leading-relaxed italic",
            question.subtitleIsPrimary ? "text-primary font-semibold" : "text-muted-foreground"
          )}>
            {question.subtitle}
          </p>
        )}

        {question.headline && (
          <h2 className="font-serif text-lg md:text-2xl font-bold uppercase leading-snug tracking-wide text-foreground text-center px-1">
            {question.headline.before}{" "}
            <span className="text-primary">{question.headline.highlight}</span>
            {question.headline.after ? ` ${question.headline.after}` : ""}
            {question.headline.line2before && (
              <>
                <br />
                {question.headline.line2before}{" "}
                <span className="text-primary">{question.headline.line2highlight}</span>
                {question.headline.line2after ? ` ${question.headline.line2after}` : ""}
              </>
            )}
          </h2>
        )}

        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
          {question.videoSrc ? (
            <video
              ref={videoRef}
              src={question.videoSrc}
              controls
              controlsList="nodownload noplaybackrate"
              autoPlay
              muted
              playsInline
              onContextMenu={(e) => e.preventDefault()}
              onClick={(e) => {
                const v = e.currentTarget
                if (v.paused) v.play().catch(console.error)
                else v.pause()
              }}
              className="w-full h-auto aspect-[9/16] vsl-video cursor-pointer bg-black"
            />
          ) : (
            <img
              src={question.stepImage}
              alt=""
              className="w-full h-auto object-cover"
            />
          )}
        </div>

        {question.ctaText && (
          <p className="text-sm md:text-base text-foreground text-center leading-relaxed px-2">
            {question.ctaText}
          </p>
        )}

        {showButton && (
          <button
            onClick={() => onSelectOption(0)}
            className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-base md:text-lg tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98] animate-in fade-in slide-in-from-bottom-2"
          >
            {question.ctaButtonLabel ?? "Continuar"}
          </button>
        )}
      </div>
    )
  }

  // Standard layouts (list, grid, special)
  return (
    <div className="flex flex-col gap-6">
      {/* Red Banner at top */}
      {question.redBanner && (
        <div className="w-full bg-[#cc0000] text-white py-2 px-3 rounded-xl text-center font-bold text-xs md:text-base">
          {question.redBanner}
        </div>
      )}

      {/* Warning layout (Aviso:) */}
      {question.warningBanner && (
        <p className="text-sm md:text-base text-center leading-relaxed font-medium">
          <span className="text-primary font-bold">Aviso: </span>
          {question.warningBanner}
        </p>
      )}

      {/* Headline / Question Header */}
      {isSpecialStep && question.headline ? (
        <div className="flex flex-col gap-4 text-center">
          <h2 className="font-serif text-lg md:text-2xl font-bold uppercase leading-tight md:leading-snug tracking-wide text-foreground px-1">
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
            <p className={cn(
              "text-sm md:text-base leading-relaxed italic",
              question.subtitleIsPrimary ? "text-primary font-semibold" : "text-muted-foreground"
            )}>
              {question.subtitle}
            </p>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-center">
          {question.subtitle && question.subtitleIsPrimary && (
            <p className="text-sm md:text-base leading-relaxed font-semibold text-primary">
              {question.subtitle}
            </p>
          )}
          {question.question && (
            <h2 className="font-serif text-lg md:text-xl font-bold text-foreground leading-relaxed text-balance">
              {question.questionHighlight ? (
                <>
                  {question.question}
                  <span className="text-primary">{question.questionHighlight}</span>
                  {question.questionAfterHighlight ?? ""}
                </>
              ) : (
                question.question
              )}
            </h2>
          )}
          {question.subtitle && !question.subtitleIsPrimary && (
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
              {question.subtitle}
            </p>
          )}
        </div>
      )}

      {/* Inline step media (image or video between header and options) */}
      {question.stepImage && !question.videoSrc && (
        <div className="w-full rounded-2xl overflow-hidden">
          <img src={question.stepImage} alt="" className="w-full h-auto object-cover" />
        </div>
      )}

      {question.videoSrc && (
        <div className="w-full rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            src={question.videoSrc}
            controls
            controlsList="nodownload noplaybackrate"
            autoPlay
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            onClick={(e) => {
              const v = e.currentTarget
              if (v.paused) v.play().catch(console.error)
              else v.pause()
            }}
            className="w-full h-auto aspect-[9/16] vsl-video cursor-pointer bg-black"
          />
        </div>
      )}

      {/* Options Rendering */}
      {isList ? (
        <div className="flex flex-col gap-3 w-full max-w-md mx-auto" role="group">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectOption(index)}
              className={cn(
                "group flex items-center gap-3 w-full rounded-xl px-4 py-3.5",
                "bg-[#1a1a1a] border border-white/10 text-left transition-all duration-200",
                "hover:border-primary/50 hover:bg-[#222222]"
              )}
            >
              {option.emoji && <span className="text-xl shrink-0 w-8 text-center">{option.emoji}</span>}
              <span className="flex-1 text-sm md:text-base font-medium text-foreground leading-snug">
                {option.label}
              </span>
              <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" />
            </button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:gap-4 mx-auto w-full max-w-md" role="group">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onSelectOption(index)}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-xl transition-all duration-200 border border-white/10",
                "hover:border-primary/50 hover:bg-[#1a1a1a]",
                is2x2 ? "border-2 border-primary" : "bg-card"
              )}
            >
              {option.imageSrc && (
                <div className={cn("relative w-full overflow-hidden", is2x2 ? "aspect-square" : "aspect-[3/4]")}>
                  <img src={option.imageSrc} alt={option.label} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
              )}
              <div className={cn("flex items-center justify-center gap-2 px-3 py-3 md:px-4 md:py-4", is2x2 ? "bg-primary" : "bg-card w-full")}>
                {option.emoji && <span className="text-xl">{option.emoji}</span>}
                <span className={cn("text-sm md:text-base font-semibold", is2x2 ? "text-primary-foreground" : "text-foreground")}>
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Warning banner at bottom */}
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
