import React, { useEffect, useState } from 'react';
import { Progress } from './progress';

interface StepProps {
    currentStep: number;
    onStepChange: (step: number) => void;
}

export const Step: React.FC<StepProps> = ({ currentStep, onStepChange }) => {
    const [progress, setProgress] = useState(currentStep === 1 ? 0 : 50)
    useEffect(() => {
        setProgress(currentStep === 1 ? 50 : 50);
    }, [currentStep])

    return (
        <div className="flex justify-center items-center ">
            <Progress
                className={`px-2 py-1 hover:bg-gray-400 w-[30%] ${currentStep === 1 ? 'bg-green-500 text-white hover:bg-green-500' : 'bg-gray-300'}`}
                onClick={() => onStepChange(1)}
                value={progress}
            >
                Step 1
            </Progress>
            <Progress
                className={`px-2 py-1 hover:bg-gray-400 w-[30%] ${currentStep === 2 ? 'bg-green-500 text-white hover:bg-green-500' : 'bg-gray-300'}`}
                onClick={() => onStepChange(2)}
                value={progress}
            >
                Step 2
            </Progress>
        </div>
    )
}
