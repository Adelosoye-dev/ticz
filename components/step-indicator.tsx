interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-muted-foreground">
          Step {currentStep}/{totalSteps}
        </span>
      </div>
    </div>
  )
}

