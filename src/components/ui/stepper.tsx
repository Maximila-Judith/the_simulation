import React, { useState } from 'react'
import { CheckCircle, CircleHelp } from "lucide-react"


interface StepperProps {
  currentStep: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  
  return (
    <div className='flex justify-center items-center'>
      <ul className="flex flex-row gap-x-3 ">
        <li>
          <div className="flex item-center justify-center">
            <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
              {currentStep === 3 ? <CheckCircle className="text-green-500" /> : <CircleHelp />}
            </span>
            <div className="ms-2 w-36 h-px bg-gray-200 mt-5 place-content-center"></div>
          </div>
          <div className="mt-3 block text-md text-white">
            Questions
          </div>
        </li>
        <li>
          <div className="flex flex-row item-center">
            <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
              {currentStep === 5 ? <CheckCircle className="text-green-500" /> : <CircleHelp />}
            </span>
            <div className="ms-2 w-36 h-px bg-gray-200 mt-5 place-content-center"></div>
          </div>
          <div className="mt-3 block text-md text-white ">
            Calcul du montant
          </div>
        </li>
        <li>
          <div className="min-w-7 min-h-7 w-full inline-flex items-center text-xs align-middle">
            <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
              <CircleHelp />
            </span>
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 block text-md text-white ">
            Result
          </div>
        </li>
      </ul>
    </div>
  )
}

