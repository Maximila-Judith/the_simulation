'use client'
import { CheckCircle, CircleHelp, MoveLeft } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Second } from '@/components/ui/second'



export default function Home() {

  const [step, setStep] = useState(0);

  const questions = [
    {
      question: 'Etes-vous particulier ou une entreprise?',
      answers: ['Particulier', 'Entreprise']
    },
    {
      question: 'Possedez-vous une parcelle?',
      answers: ['Oui', 'Non', 'oui mais pan encore payé']
    },
    {
      question: 'Exploitez-vous la parcelle?',
      answers: ['Oui', 'Non']
    }
  ];

  const theQuestions = ['Combien de parcelle possédez vous', 'Quel est votre revenu']

  const forAnswer = () => {
    if (step < questions.length - 1) {
      setStep(beforeSet => beforeSet + 1);
    } else {
      setStep(beforeSet => beforeSet + 1);
    }
  };

  const forBack = () => {
    if (step > 0) {
      setStep(beforeSet => beforeSet - 1);
    }
  };



  return (
    <main className="h-screen w- bg-[url('/nat-7.jpg')] bg-gradient-to-r from-gray-400 to-green-900 bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="flex flex-row item-center my-6 text-white	">
        <h1 className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</h1>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-teal-2100">
        <div className="mb-10 space-y-5">
          <div className="mb-10 space-y-6">
            <Stepper currentStep={step} />
            {step < 3 ? (
              <>
                <Body question={questions[step]} onAnswer={forAnswer} />
                <div className="flex justify-between mt-4">
                  <button onClick={forBack} className={`bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1 ${step === 0 ? 'hidden' : ''}`}>Back</button>
                </div>
              </>
            ) : (
              <>
                <Second />
                <div className="flex justify-between mt-4">
                  <button onClick={forBack} className="bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1">
                    Back
                  </button>
                </div>

              </>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}





