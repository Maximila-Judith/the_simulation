import React, { useEffect, useState } from 'react'
import { Progress } from './progress'

interface TheslideProps {
    onProgressChange: (progress: number) => void;
}
export const Theslide: React.FC<TheslideProps> = ({ onProgressChange }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                const nextProgress = prevProgress + 1;
                onProgressChange(nextProgress);
                return nextProgress >= 100 ? 0 : nextProgress;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [onProgressChange]);

    return (

        <div className="flex justify-center items-center">
            <Progress className="w-[60%]" value={progress} />
        </div>
    )
}








