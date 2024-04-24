'use client'
import { CheckCircle, CircleHelp, MoveLeft } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Second } from '@/components/ui/second'
import { globalQuestion } from '@/components/questions/globalQuestion'
import { Data } from "@/lib/type/type";
import { entry } from "@/components/questions/entry";
import { plot } from "@/components/questions/plot";
import { associate } from "@/components/questions/associate";
import { validateHeaderValue } from "http";


export default function Home() {
  const tab = {
    plot: plot,
    associate: associate,
    entry: entry
  }
  const [step, setStep] = useState<Data>(entry);
  const next = '';

  const forAnswer = (value: string) => {

    for (let i in tab) {
      if (i.hasOwnProperty(value)) {
        setStep(beforeSet => beforeSet = tab[value]);
      }
    }

    if (step ===  ) {
      setStep(beforeSet => beforeSet = tab.entry.answers.choiceOptions.value);
    } else {
      setStep(beforeSet => beforeSet + 1);
    }
    console.log(value)
  }


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
            (
            <>
              <Body questionData={step} onAnswer={forAnswer} />
              <div className="flex justify-between mt-4">
                <button className={`bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1 ${step === 0 ? 'hidden' : ''}`}>Back</button>
              </div>
            </>
            )
            { /* : (
              <>
                <Second />
                <div className="flex justify-between mt-4">
                  <button className="bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1">
                    Back
                  </button>
                </div>

              </>
            ) */}
          </div>

        </div>
      </div>
    </main>
  )
}





