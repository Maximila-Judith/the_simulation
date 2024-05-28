import React, { useState, useEffect, ReactNode } from 'react';

interface LoadingPercentageProps {
  children: ReactNode;
  duration?: number;
  size?: number;
  color?: string;
  thickness?: number;
}

const LoadingPercentage = ({
  children,
  duration = 2000,
  size = 100,
  color = '#007bff',
  thickness = 5,
}: LoadingPercentageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const intervalDuration = duration / 100;
    const timer = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;

        if (nextPercentage === 100) {
          setIsLoading(false);
          clearInterval(timer);
        }

        return nextPercentage;
      });
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [duration]);

  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <div className="relative" style={{ width: size, height: size }}>
            <svg
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
              className="transform -rotate-90"
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="lightgray"
                strokeWidth={thickness}
                fill="none"
              />
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={color}
                strokeWidth={thickness}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className='text-white'>{percentage}%</div>
            </div>
          </div>
        </div>
      )}
      {!isLoading && children}
    </div>
  );
};

export default LoadingPercentage;
