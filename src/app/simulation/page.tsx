'use client'
import styles from '@/app/wizard.module.css'
import { Home, MoveLeft, } from "lucide-react"
import { Body } from "@/components/ui/body";
import React, { useEffect, useState } from 'react';
import { Stepper } from '@/components/ui/stepper'
import { Questions, valQuestions } from '@/components/questions/globalQuestion'
import { Data, Info } from "@/lib/type/type"
import { Result } from "@/components/result/result";
import { QuestionContext } from "@/lib/questionContext";
import { infos, valInfos } from "@/components/informations/globalInfo";
import {
    valQuestionsIBA, valQuestionsIS, valQuestionsIRF,
    valQuestionsITS, valQuestionsTPS, valQuestionsTFU
} from "@/components/questions/calcul/global";
import { entry } from "@/components/questions/taxType/entry";
import Link from "next/link";
import { Button } from '@/components/ui/button';
import { Alert } from '@/components/ui/alert';
import LoadingPercentage from '@/components/ui/LoadingPercentage';

export default function Simulation() {
    const [step, setStep] = useState<Data>(Questions.entry);
    const [back, setBack] = useState([0]);
    const [answers, setAnswers] = useState([{ question: '', response: [''] }])
    const [level, setLevel] = useState([0])
    const [info, setInfo] = useState<Info>(infos.init)
    const [valsTable, setValsTable] = useState(valQuestions)
    const [taxType, setTaxType] = useState("")
    const [alert, setAlert] = useState("")
    const valInfo = (step) ? valInfos.find(info => info.id === step.info) : infos.init


    const forAnswer = (answer: string[], next: string, now: string, name: string) => {
        setAnswers(beforeAnswer => [{ question: now, response: answer }, ...beforeAnswer])

        if (!next && name) {
            setTaxType(name)
            setLevel((before) => [before.length, ...before])

        } else if (!next && !name && level.length < 2) {
            setAlert("Désolé, pas d'impôt")
            setBack(before => before.slice(1))

        } else if (!next && level.length > 1) {
            setLevel((before) => [before.length, ...before])
        }

        let valQuestion = valsTable.find(question => question.id === next)
        valQuestion ? setStep(valQuestion) : setStep(before => before)
        setBack(beforeBack => [valsTable.indexOf(valQuestion ? valQuestion : step), ...beforeBack])

    }

    useEffect(() => {
        if (level.length === 2) {
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

                    setValsTable(val ? val : valQuestionsIBA);
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
    }, [back]);

    const forBack = () => {
        setBack(beforeBack => beforeBack.slice(1))
        setAnswers(before => before.slice(1))

    }

    const forAlert = () => {
        setAlert("")
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
    const handleClick = () => {
        window.location.href = '/';
    };



    return (
        <QuestionContext.Provider value={step}>
            <main className="h-screen w-full bg-[url('/333.jpg')] relative bg-cover bg-no-repeat bg-center overflow-hidden text-center md:text-left lg:text-righ">
                <div className="absolute inset-0 bg-teal-800 opacity-80 "></div>
                {!(taxType && level.length === 3 || alert)
                    && <div className="flex flex-row item-center my-6 text-white relative z-9">
                        {/* <Link href="" onClick={handleClick} className=" flex flex-row mx-8 gap-x-3 mt-20">
                            <Home className="fill-black-600 text-black-950 size-6" />
                        </Link> */}
                    </div>}
                <div className="relative z-10 mt-20 flex justify-center pr-7 md:w-1/2 mx-auto rounded-none h-auto w-[500px] bg-teal-900 bg-opacity-25  ">

                    {level.length < 3 ?
                        <div className="mb-4 space-y-5 ">

                            <div className={styles.wizard}>
                                <Stepper currentStep={level} />
                                <div className='mt-10'></div>
                                <div className="min-w-80 ">
                                    {(taxType && level.length === 3 || alert) ?
                                        <div>
                                            {alert && <Alert alert={alert} onClick={forAlert} />}
                                        </div> :
                                        <Body onAnswer={forAnswer} length={back.length} onBack={forBack} />
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <div className=' h-screen w-screen '>
                            <LoadingPercentage duration={2000} size={200} color="#34b365" thickness={10}>
                                <Result tax={taxType} answers={answers} />
                            </LoadingPercentage>
                        </div>
                    }

                </div>
            </main>
        </QuestionContext.Provider>
    )
}