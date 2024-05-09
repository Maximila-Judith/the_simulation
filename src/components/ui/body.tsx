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

interface BodyProps {
    onAnswer: (value: string[], nextQuestion: string, nowQuestion: string, name: string) => void
}

export const Body: React.FC<BodyProps> = ({ onAnswer}) => {
    const the_question = useContext(QuestionContext)

    const question = the_question?the_question.question:"",
        type_answer = the_question?the_question.answers.type:"",
        choiceOptions = the_question?the_question.answers.choiceOptions:[]

    return (
        <div className="text-center md:text-left lg:text-left">
            <div className='max-w-screen-md mx-auto'>
                <Card className="md-w-1/2 mx-4 mt-4 h-20 md:text-left lg:text-left">
                    <CardHeader style={{ fontFamily: 'inter', fontStyle: 'italic', textAlign: 'center', fontSize: '15px' }}>
                        <CardContent className="font-italic text-center text-2xl mx-auto">
                            {question}
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="md-w-1/2 mx-4 mt-4 md:text-left lg:text-left">
                    <CardHeader>
                        <CardContent className=''>
                            <div className="flex flex-col space-y-4">

                                {(type_answer === "unique_choice") && (
                                    choiceOptions.map((choice) => (
                                        <Response key={choice.value} nowQuestion =  {the_question.id} value={choice} onSelect={onAnswer} />
                                    ))
                                )}

                                {(type_answer === "multiple_choice") && (
                                    < CheckboxReactHookFormMultiple onValide={onAnswer} question= {the_question} />
                                )}

                                {(type_answer === "input") && (
                                    <TypeInput key= {the_question.id} question= {the_question} onSubmit={onAnswer} />
                                )}
                            </div>

                        </CardContent>
                    </CardHeader>
                </Card>
            </div>


        </div >
    )
}