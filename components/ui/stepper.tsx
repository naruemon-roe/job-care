// ✅ Stepper.tsx
"use client";

import React from "react";

interface StepperProps {
  step: number;
  onStepChange?: (step: number) => void;
  steps: string[];
}

export const Stepper: React.FC<StepperProps> = ({ step, steps }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`flex-1 text-center text-sm font-medium relative pb-2 ${
            index + 1 <= step ? "text-white" : "text-gray-400"
          }`}
        >
          <div
            className={`w-8 h-8 mx-auto rounded-full mb-1 flex items-center justify-center ${
              index + 1 <= step ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
          {label}
        </div>
      ))}
    </div>
  );
};