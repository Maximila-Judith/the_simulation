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
import { useState, useContext } from 'react'
import { QuestionContext } from "@/lib/questionContext";
import styles from '@/app/wizard.module.css'
import { Button } from './button';
import { HelpCircle, ChevronLeft } from 'lucide-react';

interface BodyProps {
    onAnswer: (value: string[], nextQuestion: string, nowQuestion: string, name: string) => void;
    onInfo: () => void;
    onBack: () => void;
    length: number
}

export const Body: React.FC<BodyProps> = ({ onAnswer, onInfo, onBack, length }) => {
    const the_question = useContext(QuestionContext)

    const question = the_question ? the_question.question : "",
        type_answer = the_question ? the_question.answers.type : "",
        choiceOptions = the_question ? the_question.answers.choiceOptions : []

    return (
        <div className="flex flex-col gap-2 h-50 text-center pt-0">

          <Card className= "flex ml-0 mt-0.5 h-20 text-xs  ">
            <div className='flex ml-0 space-x-2 h-full'>
      {length > 1 && <button className={styles.backButton} onClick={onBack}><ChevronLeft className='size-[18px]' /></button>}
            </div>
            <div className='flex space-x-1  w-full justify-center text-center m-auto px-2 '>
                      <p className=' text-center'>{question}</p> 
{the_question.info && (<div className='content-center'><button className='rounded-full' onClick={onInfo}><HelpCircle className='size-[16px] hover:bg-slate-300 rounded-full' /></button></div>)}
            </div>
          </Card>
          <Card className='bg-gray-200 bg-opacity-70'>
            <div className='flex justify-center content-center text-center h-60  gap-4 mx-1.5'>
                <div className="content-center space-y-3 w-full text-x" >

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
          </Card>
            
        </div >
    )
}