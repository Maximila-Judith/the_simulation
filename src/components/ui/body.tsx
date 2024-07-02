import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Data } from "@/lib/type/type"
import Response from '@/components/ui/response'
import { TypeInput } from './inputAnswers';
import { CheckboxReactHookFormMultiple } from '@/components/ui/multipleCheck'
import { useState, useContext,useEffect } from 'react'
import { QuestionContext } from "@/lib/questionContext";
import styles from '@/app/wizard.module.css'
import { Button } from './button';
import { HelpCircle, ChevronLeft } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { HoverInfo } from '@/components/informations/HoverInfo';
import Image from "next/image";

interface BodyProps {
    onAnswer: (value: string[], nextQuestion: string, nowQuestion: string, name: string) => void;
    onBack: () => void;
    length: number
}

export const Body: React.FC<BodyProps> = ({ onAnswer, onBack, length }) => {
    const the_question = useContext(QuestionContext)

    const question =  the_question.question,
        type_answer = the_question.answers.type ,
        choiceOptions = the_question.answers.choiceOptions
    const [questionEnd, setQuestionEnd] = useState(false)

    function forEnd() {
        setQuestionEnd(true)
    }

    return (
        <div className="flex flex-col gap-2 text-center pt-0 opacity-100 w-[550px]">

          <div className= "flex ml-0 mt-0.5 h-20 text-xs rounded-none overflow-hidden bg-gradient-to-r from-neutral-50 to-neutral-200  ">
            <div className='flex ml-0 space-x-2 h-full'>
                    <button disabled={length > 1 ? false : true} className="rounded-l-sm overflow-hidden text-teal-950 border-r  flex items-center justify-center content-center p-0 m-0 h-full w-11 disabled:opacity-20  bg-opacity-0 " onClick={onBack}>
                        <ChevronLeft className='size-[25px] hover:size-[30px] ' />
                    </button>
            </div>
            <div className='flex space-x-1 text-black font-medium h-full text-center text-xs   w-full justify-center items-center  m-auto flex-wrap content-center px-2'>
               <p className=' text-start '><AnimatedText text={question} onEnd={forEnd} /></p> 
            {(the_question.info && questionEnd) && (<div className='content-center'><HoverInfo  info = {the_question.info} /></div>)}
            </div>
            </div>
            
          <div className='bg-gradient-to-r from-neutral-100 to-neutral-200 bg-opacity-100 rounded-none overflow-hidden'>
            <div className='flex justify-center content-center text-center h-60  gap-4 mx-1.5'>
         <div className = {`${
                        questionEnd ? 'opacity-100' : 'opacity-0'
                    } transition duration-900 ease-in-out transform content-center space-y-4 w-[520px] text-x  text-black font-medium`}
                    >
                    {(type_answer === "unique_choice") && (
                        
                        choiceOptions.length<5? choiceOptions.map((choice) => (
                            <Response key={choice.value} nowQuestion={the_question.id} value={choice} onSelect={onAnswer} />
                        )): <p className='text-center text-red-700'>La limite de proposition de réponses est de 4 !</p>
                    )}

                    {(type_answer === "multiple_choice") && (
                        < CheckboxReactHookFormMultiple onValide={onAnswer} question={the_question} />
                    )}

                    {(type_answer === "input") && (
                        <TypeInput key={the_question.id} question={the_question} onSubmit={onAnswer} />
                    )}
            </div>

            </div>
          </div>
            
        </div >
    )
}