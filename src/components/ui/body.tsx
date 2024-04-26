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
    onAnswer: (value: string[], type: string, nextQuestion: string, response: string) => void
}

export const Body: React.FC<BodyProps> = ({ questionData, onAnswer }) => {
    const question = questionData.question,
        type_answer = questionData.answers.type,
        choiceOptions = questionData.answers.choiceOptions,
        inputOption = questionData.answers.inputOption
    return (
        <div>
            <Card className='h-20'>
                <CardHeader style={{ fontFamily: 'Italianno', fontStyle: 'italic', textAlign: 'center', fontSize: '35px' }}>
                    <CardContent>{question}</CardContent>
                </CardHeader>
            </Card>
            <Card className='mt-2'>
                <CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='flex flex-row gap-4'>

                            {(type_answer === "unique_choice") && (
                                choiceOptions.map((choice) => (
                                    <Response key={choice.value} answer={choice.label} value={[choice.value]} nextQuestion={choice.nextQuestion} onSelect={onAnswer} />
                                ))
                            )}

                            {(type_answer === "multiple_choice") && (
                                < CheckboxReactHookFormMultiple onValide={onAnswer} question={questionData} />
                            )}

                            {(type_answer === "input") && (
                                <TypeInput key={questionData.id} type={questionData.answers.inputOption.type} question={questionData} label={inputOption.label} onSubmit={onAnswer} />
                            )}
                        </div>

                    </CardContent>
                </CardHeader>
            </Card>

        </div >
    )
}
