'use client'
import { CheckCircle, CircleHelp, MoveLeft } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useEffect, useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Second } from '@/components/ui/second'
import { Questions } from '@/components/questions/globalQuestion'
import { Data } from "@/lib/type/type"
import { string } from "zod";


export default function Home() {

  const [step, setStep] = useState<Data>(Questions.entry);
  const [back, setBack] = useState([0]);
  const newTab = Object.values(Questions)

  const [answers, setAnswers] = useState([['']])
  const [nextQuestion, setnextQuestion] = useState('')

  const forAnswer = (Answers: string[], nextQuestion: string) => {

    setAnswers(beforeAnswer => [...beforeAnswer, Answers])
    setnextQuestion(nextQuestion)

    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === nextQuestion) {
        setStep(newTab[i])
        setBack(beforeBack => [i, ...beforeBack])
      }
    }
  }
  useEffect(() => {
    console.log(back)
  }, [answers]);



  const forBack = () => {
    setBack(beforeBack => beforeBack.slice(1))
    setStep(beforeSet => beforeSet = newTab[back[0]])
  }


  return (
    <main className="h-screen w- bg-[url('/nat-7.jpg')] bg-gradient-to-r from-gray-400 to-green-900 bg-no-repeat bg-cover bg-center overflow-hidden">
      <div className="flex flex-row item-center my-6 text-white	">
        <h1 className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</h1>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-teal-2100">
        <div className="mb-10 space-y-5">
          <div className="mb-10 space-y-6">
            <Stepper currentStep={step} />
            <>
              <Body questionData={step} onAnswer={forAnswer} />
              <div className="flex justify-between mt-4">
                <button onClick={forBack} className={`bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1 ${back.length === 1 ? 'hidden' : ''}`} >Back</button>
              </div>
            </>

            {/*  : (
              <>
                <Second />
                <div className="flex justify-between mt-4">
                  <button className="bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1">
                    Back
                  </button>
                </div>

              </>
            )  */}
          </div>

        </div>
      </div>
    </main>
  )
}





