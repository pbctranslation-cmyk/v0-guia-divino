"use client"

interface QuizProgressProps {
  currentStep: number
  totalSteps: number
}

export function QuizProgress({ currentStep, totalSteps }: QuizProgressProps) {
  const percentage = ((currentStep + 1) / totalSteps) * 100

  return (
    <div className="flex flex-col gap-1">
      {/* Small square indicator aligned to the left edge of the bar fill */}
      <div className="relative h-2">
        <div
          className="absolute top-0 h-2 w-2 bg-primary transition-all duration-500 ease-out"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />
      </div>
      {/* Thin progress bar */}
      <div className="h-1 w-full bg-secondary overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
