'use client'
import { CircleHelp, MoveLeft } from "lucide-react"
import Body from "@/components/ui/body";
import React, { useState } from 'react';
import Stepper from '@/components/ui/stepper'
import Formulaire from '@/components/ui/formulaire'



export default function Home() {

  const [step, setStep] = useState(0);

  const questions = [
    {
      question: 'Etes-vous particulier ?',
      answers: ['Particulier', 'Entrepreneur']
    },
    {
      question: 'Possedez-vous une parcelle?',
      answers: ['Oui', 'Non']
    },
    {
      question: 'Exploitez-vous une parcelle?',
      answers: ['Oui', 'Non']
    }
  ];

  const handleAnswer = () => {
    if (step < questions.length - 1) {
      setStep(prevStep => prevStep + 1);
    } else {
      // Passer au second stepper
      setStep(prevStep => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(prevStep => prevStep - 1);
    }
  };

  const handleSubmit = () => {
    // Logique pour soumettre le formulaire
  };

  return (
    <main className="h-screen w- bg-[url('/nat-7.jpg')] bg-gradient-to-r from-gray-400 to-green-900 bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="flex flex-row item-center my-6 text-white	">
        <h1 className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</h1>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-teal-2100">
        <div className="mb-10 space-y-5">

          {/* <Stepper /> */}
          {/* <div className='flex justify-center items-center'>
            <ul className="flex flex-row gap-x-3 ">
              <li>
                <div className="flex item-center justify-center">
                  <span className="size-[46px] flex justify-center items-center flex-shrink-0 size-[46px] rounded-full border-4 border-green-100 bg-green-200 text-white border-green-900 bg-green-800 text-white">
                    <CircleHelp />
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
                    <CircleHelp />
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
          </div> */}
          <div className="mb-10 space-y-6">
            <Stepper currentStep={step} />
            {step < 3 ? (
              <>
                <Body question={questions[step]} onAnswer={handleAnswer} />
                <div className="flex justify-between mt-4">
                  {step > 0 && <button onClick={handleBack} className="bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1">Back</button>}
                  <button onClick={handleAnswer} className="bg-green-700 hover:bg-green-400 border-1 rounded text-white p-1">Next</button>
                </div>
              </>
            ) : (
              <Formulaire />
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

