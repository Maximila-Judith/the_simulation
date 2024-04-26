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
import { Input } from './input';
import { CheckBoxChoice } from './CheckBoxChoice';
import { CheckboxReactHookFormMultiple } from '@/components/ui/multipleCheck'
import { string } from 'zod';
//const [coche, setCoche] = useState(false);

interface BodyProps {
    questionData: Data;
    onAnswer: (value: string[], nextQuestion: string) => void
}

export const Body: React.FC<BodyProps> = ({ questionData, onAnswer }) => {
    const question = questionData.question,
        type_answer = questionData.answers.type,
        choiceOptions = questionData.answers.choiceOptions;
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
                            )

                            }
                            {(type_answer === "multiple_choice") && (

                                < CheckboxReactHookFormMultiple onValide={onAnswer} question={questionData} />

                            )
                            }

                            {(type_answer === "input") && (
                                choiceOptions.map((choice) => (
                                    <Input key={choice.value} answer={choice.label} onSelect={onAnswer} />
                                ))
                            )
                            }
                        </div>

                    </CardContent>
                </CardHeader>
            </Card>

        </div >
    )
}
