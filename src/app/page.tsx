'use client'
import styles from './wizard.module.css'
import { CheckCircle, CircleHelp, Info, MoveLeft } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useEffect, useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Questions, valQuestions } from '@/components/questions/globalQuestion'
import { Data, Infor } from "@/lib/type/type"
import { Result } from "@/components/result/result";
import { QuestionContext } from "@/lib/questionContext";
import { InfoCard } from "@/components/informations";
import { infos, valInfos } from "@/components/informations/globalInfo";
import {
  valQuestionsIBA, valQuestionsIS, valQuestionsIRF,
  valQuestionsITS, valQuestionsTPS, valQuestionsTFU
} from "@/components/questions/calcul/global";
import { object } from "zod";
import { entry } from "@/components/questions/taxType/entry";
import Link from "next/link";

export default function Home() {
  const [step, setStep] = useState<Data>(Questions.entry);
  const [back, setBack] = useState([0]);
  const [answers, setAnswers] = useState([{ question: '', response: [''] }])
  const [level, setLevel] = useState([0])
  const [info, setInfo] = useState<Infor>(infos.init)
  const [valsTable, setValsTable] = useState(valQuestions)
  const [taxType, setTaxType] = useState("")
  const valInfo = (step) ? valInfos.find(info => info.id === step.info) : infos.init


  const forAnswer = (answer: string[], next: string, now: string, name: string) => {
    setAnswers(beforeAnswer => [{ question: now, response: answer }, ...beforeAnswer])

    if (!next && name) {
      setTaxType(name)
      setLevel((before) => [before.length, ...before])

    } else if (!next && !name && level.length < 1) {
      console.log("Désolé, pas d'impôt")

    } else if (!next && level.length > 1) {
      setLevel((before) => [before.length, ...before])
    }

    let valQuestion = valsTable.find(question => question.id === next)
    setStep(valQuestion ? valQuestion : Questions.entry)
    setBack(beforeBack => [valsTable.indexOf(valQuestion ? valQuestion : Questions.entry), ...beforeBack])

  }


  useEffect(() => {
    if (level.length === 2) {
      console.log(answers)
      switch (taxType) {
        case "IS": {
          setValsTable(valQuestionsIS);
          break;
        }

        case "IBA": {
          let alone = result("aloneManagementSituation")[0]
          let val = add([], valQuestionsIBA, "profit")
          val[0].nextQuestion = ""
          setValsTable((alone === "yesRealEstate" && val) ? val : valQuestionsIBA);
          break;
        }
        case "IBA&TFU": {
          let val = add([], valQuestionsIBA, "profit")
          val[0].nextQuestion = "entryTfu"
          val = add([...val], valQuestionsTFU, "builtProperties")
          val = add([...val], valQuestionsTFU, "entryTfu")
          val = add([...val], valQuestionsTFU, "undevelopedProperties")

          setValsTable((val) ? val : valQuestionsIBA);
          break;
        }
        case "IRF&TFU": {
          let val = add(valQuestionsIRF, valQuestionsTFU, "builtProperties")
          val = add([...val], valQuestionsTFU, "entryTfu")
          val = add([...val], valQuestionsTFU, "undevelopedProperties")
          let obj = val.find(quest => quest.id === 'landlordsExpensesPrice')
          obj ? obj.nextQuestion = 'entryTfu' : ''
          let obj1 = val.find(quest => quest.id === 'landlordsExpenses')
          obj1 ? obj1.answers.choiceOptions[1].nextQuestion = 'entryTfu' : ''
          setValsTable((val) ? val : valQuestionsIRF);
          break;
        }
        case "TFU": {
          setValsTable(valQuestionsTFU);
          break;
        }
        case "IRF": {
          setValsTable(valQuestionsIRF);
          break;
        }
        case "TPS": {
          setValsTable(valQuestionsTPS);
          break;
        }
        case "ITS": {
          setValsTable(valQuestionsITS);
          break;
        }
      }
    }
    if (level.length > 2) {
      setInfo(infos.init)
    }
    setBack([0])
  }, [level]);


  useEffect(() => {
    setStep(valsTable[back[0]])
    console.log(valsTable)
  }, [back]);

  const forBack = () => {
    setBack(beforeBack => beforeBack.slice(1))
    setAnswers(before => before.slice(1))

  }

  const forInfo = () => {
    setInfo(valInfo ? valInfo : infos.init)
  }
  const forClick = () => {
    setInfo(infos.init)
  }
  function result(quest: string) {
    let obj = answers.find(answer => answer.question === quest)
    return obj ? obj.response : [""]
  }
  function add(obj: Data[], val: Data[], id: string) {
    let quest = val.find(question => question.id === id)
    obj = quest ? [...obj, quest] : [...obj]
    return obj
  }

  return (
    <QuestionContext.Provider value={step}>
      <main className="h-screen w-full bg-[url('/bgg.jpg')] relative bg-cover bg-no-repeat  bg-center overflow-hidden text-center md:text-left lg:text-righ">
        <div className = "absolute inset-0 bg-black opacity-85 "></div>
        <div className="flex flex-row item-center my-6 text-white relative z-9">
          <Link href="/accueil" className=" flex flex-row mx-8 gap-x-3"> <MoveLeft /> Retour</Link>
        </div>
        <div className="relative z-10 flex justify-center items-center md:w-1/2 mx-auto rounded-2xl pb-2  ">
          
          <div className="mb-10 space-y-5">
            <div className={styles.wizard}>
              <Stepper currentStep={level} />
              <div className="flex justify-between mt-4">
                {step && (step.info && info === infos.init) ? <button onClick={forInfo} className={`bg-gray-700 hover:bg-gray-700 border-1 rounded-full text-white p-1 `} ><Info /></button> : <div style={{ height: '32px' }}></div>}
              </div>
              <>
                <div className="min-w-80 ">
                  {info !== infos.init ? <InfoCard onClick={forClick} infos={info} /> : ((level.length < 3) ? (<Body onAnswer={forAnswer} />) : (<Result tax={taxType} answers={answers} />))}
                </div>
              </>
            </div>
            <div className="flex justify-between mt-4">
              {(info === infos.init) && <button onClick={forBack} className={`bg-gray-700 hover:bg-gray-700 border-1 rounded text-white p-1 ${back.length === 1 ? 'hidden' : ''}`} >Back</button>}
            </div>
          </div>
        </div>
      </main>
    </QuestionContext.Provider>
  )
}