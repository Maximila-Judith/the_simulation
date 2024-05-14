"use client"
import React, { useState } from 'react'
import { Progress } from "@/components/ui/progress"

interface StepperProps {
  currentStep: number[];
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {

  const [progress, setProgress] = React.useState(33)

  React.useEffect(() => {
    currentStep[0] === 1 ? setProgress(66) : currentStep[0] === 2 ? setProgress(100) : setProgress(33)
    return () => { }
  }, [currentStep])

  return (
    <div className="flex justify-center items-center"><Progress value={progress} className="w-[60%]" /></div>
  )
}
