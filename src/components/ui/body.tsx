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
import { HelpCircle, Info, MoveLeft } from 'lucide-react';

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
        <div className="text-center md:text-left lg:text-left pt-2">
            <div className='max-w-screen-md mx-auto'>
                <Card className="mx-0 mt-0.5 h-20 md:text-left lg:text-left flex text-center">
                        <CardContent className='flex space-x-2 w-full h-full justify-center pt-4'>
                            {length > 1 && <div className={styles.backDiv}><button onClick={onBack}><MoveLeft className='size-[25px] pb-1.5' /></button></div>}
                        <div className={styles.questionContent}>
                            <div className={styles.question}>{question}</div> 
                            {the_question.info && (<div className={styles.help}><button className='rounded-full' onClick={onInfo}><HelpCircle className='size-[18px] hover:bg-blue-300 rounded-full' /></button></div>)}
                        </div>
                        </CardContent>
                </Card>
                    <CardContent className={styles.cardContent}>
                        <div className="flex flex-col space-y-3 mx-1 " >

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

                    </CardContent>
            </div>

        </div >
    )
}