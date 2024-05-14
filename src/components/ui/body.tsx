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
import styles from '@/app/cardContent.module.css'
import { Button } from './button';
import { Info } from 'lucide-react';

interface BodyProps {
    onAnswer: (value: string[], nextQuestion: string, nowQuestion: string, name: string) => void;
    onInfo : () => void;
}

export const Body: React.FC<BodyProps> = ({ onAnswer,onInfo }) => {
    const the_question = useContext(QuestionContext)

    const question = the_question ? the_question.question : "",
        type_answer = the_question ? the_question.answers.type : "",
        choiceOptions = the_question ? the_question.answers.choiceOptions : []

    return (
        <div className="text-center md:text-left lg:text-left">
            <div className='max-w-screen-md mx-auto'>
                <Card className="mx-4 mt-0.5 h-20 md:text-left lg:text-left">
                    <CardHeader>
                        <CardContent className="italic text-extrabold text-center text-sm mx-auto overflow-hidden flex">
                      {question}
                          {the_question.info&&(<div className='inline-bloc mx-3'><button className='rounded-full' onClick ={onInfo}><Info className='size-[20px] hover:bg-blue-300 rounded-full'/></button></div>)}
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className=" mx-4 mt-4 md:text-left lg:text-left">
                    <CardContent className={styles.cardContent}>
                        <div className="flex flex-col space-y-3 mx-4" >

                            {(type_answer === "unique_choice") && (
                                choiceOptions.map((choice) => (
                                    <Response key={choice.value} nowQuestion={the_question.id} value={choice} onSelect={onAnswer} />
                                ))
                            )}

                            {(type_answer === "multiple_choice") && (
                                < CheckboxReactHookFormMultiple onValide={onAnswer} question={the_question} />
                            )}

                            {(type_answer === "input") && (
                                <TypeInput key={the_question.id} question={the_question} onSubmit={onAnswer} />
                            )}
                        </div>

                    </CardContent>
                </Card>
            </div>


        </div >
    )
}