import React, { useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const questions = [
    {
        id: 1,
        content: 'Quel est votre chiffre d\'affaire ?',
        type: 'text'
    },
    {
        id: 2,
        content: 'Quels sont vos revenus ?',
        type: 'text'
    },
    {
        id: 2,
        content: 'Quels sont vos chiffre ?',
        type: 'text'
    },
];

export const Second = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);


    const handleAnswerSubmit = () => {
        const answerValue = inputRef.current?.value;
        if (answerValue) {
            setAnswers(prevAnswers => [...prevAnswers, answerValue]);

            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {

                console.log('Questionnaire terminé', answers);

            }
        }
    };

    return (
        <div>
            <Card>
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
            </Card>
        </div>
    );
};
