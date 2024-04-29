'use client'
import { CheckCircle, CircleHelp, MoveLeft } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useEffect, useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Questions } from '@/components/questions/globalQuestion'
import { Data } from "@/lib/type/type"
import { Result } from "@/components/result/result";
import { string } from "zod";
import { before } from "node:test";


export default function Home() {

  const [step, setStep] = useState<Data>(Questions.entry);
  const [back, setBack] = useState([0]);
  const newTab = Object.values(Questions)
  const [answers, setAnswers] = useState([['']])
  const [level, setLevel] = useState([0])

  const forAnswer = (Answers: string[], next: string) => {
    setAnswers(beforeAnswer => [Answers, ...beforeAnswer])
    if (!next) {
      setLevel((before) => [before.length, ...before])
    }
    for (let i = 0; i < newTab.length; i++) {
      if (newTab[i].id === next) {
        setStep(newTab[i])
        setBack(beforeBack => [i, ...beforeBack])
      }
    }

  }

  useEffect(() => {
    if (level.length === 2) {
      setStep(Questions.entryCalcul)
      setBack([newTab.indexOf(Questions.entryCalcul)])
    }
    if (level.length === 3) {
      setBack([0])
      setStep(Questions.entry)
    }
  }, [level]);

  useEffect(() => {
    setStep(newTab[back[0]])
    console.log(answers)
  }, [back]);

  const forBack = () => {
    setBack(beforeBack => beforeBack.slice(1))
    setAnswers(before => before.slice(1))
  }

  return (
    <main className="h-screen w- bg-[url('/nat-7.jpg')] bg-gradient-to-r from-gray-400 to-green-900 bg-no-repeat bg-cover bg-center overflow-hidden text-center md:text-left lg:text-righ">
      <div className="flex flex-row item-center my-6 text-white	">
        <h1 className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</h1>
      </div>

      <div className="flex justify-center items-center md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-teal-2100">
        <div className="mb-10 space-y-5">
          <div className="mb-10 space-y-6">
            <Stepper currentStep={level} />
            <>
              {(level.length < 3) ? (<Body questionData={step} onAnswer={forAnswer} />) : (<Result />)}
              <div className="flex justify-between mt-4">
                <button onClick={forBack} className={`bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1 ${back.length === 1 ? 'hidden' : ''}`} >Back</button>
              </div>
            </>
          </div>

        </div>
      </div>
    </main>
  )
}






