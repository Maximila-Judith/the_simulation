import React, { useEffect, useState } from 'react';
import { Progress } from './progress';

interface TheslideProps {
    currentStep: number;
    onStepChange: (step: number) => void;
}

export const Theslide: React.FC<TheslideProps> = ({ currentStep, onStepChange }) => {
    const [progress, setProgress] = useState(currentStep === 1 ? 0 : 50)

    useEffect(() => {
        setProgress(currentStep === 1 ? 0 : 50)
    }, [currentStep])

    return (
        <div className="flex justify-center items-center">
            <Progress className="w-[60%]" value={progress} />
        </div>
    );
}
