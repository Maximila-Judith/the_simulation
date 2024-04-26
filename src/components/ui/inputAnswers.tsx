import React, { useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"
import { Target } from 'lucide-react';


export const TypeInput = ({ onSubmit, question }: { onSubmit: (label: string[], next: string) => void; question: Data }) => {
    const [response, setResponse] = useState([''])

    const handleAnswerSubmit = (event: Event) => {
        const a = (event.target).value;

        setResponse(event.target)
    }

    const handleSend = () => {
        onSubmit(response, question.nextQuestion)

    }

    return (
        <div className="flex flex-col space-y-2">
            <Input type={question.answers.inputOption.type} placeholder={question.answers.inputOption.label} onInput={handleAnswerSubmit(event)} />
            <Button type="submit" className='w-20' onClick={handleSend}>Submit</Button>
        </div>
    )
}

{/* <Card>
                <CardHeader className='h-20'>
                    <CardContent style={{ fontFamily: 'Italianno', fontStyle: 'italic', textAlign: 'center', fontSize: '35px' }}>
                        <p>{questions[currentQuestionIndex].content}</p>
                    </CardContent>
                </CardHeader>
            </Card> 

            <Card className='mt-2'>
                <CardHeader>
                    <CardContent className='space-y-2'>
                        <div className="flex flex-col space-y-2">
                            <Input ref={inputRef} type={questions[currentQuestionIndex].type} placeholder="Réponse" />
                            <Button type="submit" className='w-20' onClick={handleAnswerSubmit}>Submit</Button>
                        </div>
                    </CardContent>
                </CardHeader>
            </Card> */}