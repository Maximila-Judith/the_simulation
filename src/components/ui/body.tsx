import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Response from '@/components/ui/response'



export const Body = ({ question, onAnswer }: { question: { question: string; answers: string[] }; onAnswer: () => void }) => {
    return (
        <div>
            <Card className='h-20'>
                <CardHeader style={{ fontFamily: 'Italianno', fontStyle: 'italic', textAlign: 'center', fontSize: '35px' }}>
                    <CardContent>{question.question}</CardContent>
                </CardHeader>
            </Card>
            <Card className='mt-2'>
                <CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='flex flex-row gap-4'>
                            {question.answers.map((answer, index) => (
                                <Response key={index} answer={answer} onSelect={onAnswer} />
                            ))}
                        </div>

                    </CardContent>
                </CardHeader>
            </Card>

        </div >
    )
}
