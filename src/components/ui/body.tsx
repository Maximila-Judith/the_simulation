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
import {HoverInfo} from '@/components/informations/HoverInfo';

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
    const [typing, setTyping] = useState(false)

    function forEnd(typ:boolean) {
        setTyping(typ)
        setQuestionEnd(true)
    }
    console.log(typing)
    
    return (
        <div className="flex flex-col gap-2 h-50 text-center pt-0">

          <div className= "flex ml-0 mt-0.5 h-20 text-xs overflow-hidden ">
            <div className='flex ml-0 space-x-2 h-full'>
               <button disabled = {length > 1 ? false : true} className="rounded-l-sm overflow-hidden flex items-center justify-center content-center p-0 m-0 h-full w-11 disabled:opacity-30  bg-slate-200  hover:bg-slate-300 " onClick={onBack}><ChevronLeft className='size-[18px] hover:size-[21px] ' /></button>
            </div>
            <div className='flex space-x-1 text-white h-full  w-full justify-start  m-auto flex-wrap content-start px-2 pt-2'>
               <p className=' text-start'><AnimatedText text={question} onEnd={forEnd} /></p> 
            {(the_question.info && questionEnd) && (<div className='content-center'><HoverInfo  info = {the_question.info} /></div>)}
            </div>
            </div>
            
          <div className='bg-green-800 bg-opacity-70 rounded-sm overflow-hidden'>
            <div className='flex justify-center content-center text-center h-60  gap-4 mx-1.5'>
         <div className = {`${
                        questionEnd ? 'opacity-100' :typing? 'opacity-0':''
                    } transition duration-700 ease-in-out transform content-center space-y-3 w-full text-x`}
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