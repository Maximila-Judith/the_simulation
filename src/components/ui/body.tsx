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
import { string } from 'zod';

interface BodyProps {
    questionData: Data;
    onAnswer: (value: string[], nextQuestion: string) => void
}

export const Body: React.FC<BodyProps> = ({ questionData, onAnswer }) => {
    const question = questionData.question,
        type_answer = questionData.answers.type,
        choiceOptions = questionData.answers.choiceOptions
        
    return (
        <div className="text-center md:text-left lg:text-right">
            <div className='max-w-screen-md mx-auto'>
                <Card className="md-w-1/2 mx-4 mt-4 h-20">
                    <CardHeader style={{ fontFamily: 'inter', fontStyle: 'italic', textAlign: 'center', fontSize: '25px' }}>
                        <CardContent className="font-italic text-center text-2xl">
                            {question}
                        </CardContent>
                    </CardHeader>
                </Card>
                <Card className="md-w-1/2 mx-4 mt-4">
                    <CardHeader>
                        <CardContent className='p-10'>
                            <div className="flex flex-row item-center space-x-6">

                                {(type_answer === "unique_choice") && (
                                    choiceOptions.map((choice) => (
                                        <Response key={choice.value} answer={choice.label} value={[choice.value]} nextQuestion={choice.nextQuestion} onSelect={onAnswer} />
                                    ))
                                )}

                                {(type_answer === "multiple_choice") && (
                                    < CheckboxReactHookFormMultiple onValide={onAnswer} question={questionData} />
                                )}

                                {(type_answer === "input") && (
                                    <TypeInput key={questionData.id} question={questionData} onSubmit={onAnswer} />
                                )}
                            </div>

                        </CardContent>
                    </CardHeader>
                </Card>
            </div>


        </div >
    )
}
