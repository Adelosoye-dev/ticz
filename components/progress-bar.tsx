interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100

  return (
    <div className="w-full bg-secondary h-[2px] rounded-full overflow-hidden bg-[#197686]">
      <div className="bg-primary h-full transition-all duration-300 ease-in-out" style={{ width: `${progress}%` }} />
    </div>
  )
}

