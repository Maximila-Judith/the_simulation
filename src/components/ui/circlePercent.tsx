import React, { useState, useEffect, ReactNode } from 'react';

interface LoadingPercentageProps {
  children?: ReactNode;
  duration?: number;
  size?: number;
  color?: string;
  thickness?: number;
  targetPercentage: number;
}

const LoadingPercentage = ({
  children,
  duration = 2000,
  size = 100,
  color = '#007bff',
  thickness = 5,
  targetPercentage,
}: LoadingPercentageProps) => {
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (targetPercentage < 0 || targetPercentage > 100) {
      return;
    }

    const intervalDuration = duration / targetPercentage;
    const timer = setInterval(() => {
      setPercentage((prevPercentage) => {
        const nextPercentage = prevPercentage + 1;

        if (nextPercentage > targetPercentage) {
          clearInterval(timer);
          return targetPercentage;
        }

        return nextPercentage;
      });
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [duration, targetPercentage]);

  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
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
        <div>{percentage}%</div>
      </div>
      {children}
    </div>
  );
};

export default LoadingPercentage;
