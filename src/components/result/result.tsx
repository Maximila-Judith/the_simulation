import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ImpotType } from '@/lib/functions/impotType';


export interface ResultProps {
answers : { question: string; response: string[]}[]
}

export const Result: React.FC<ResultProps> = ({answers}) => {
    

    return (
        <div className="text-center md:text-left lg:text-right">
            <div className='max-w-screen-md mx-auto'>
                <Card className="md-w-1/2 mx-4 mt-4">
                    <CardHeader>
                        <CardContent className='p-10'>
                            <div className="flex flex-row item-center space-x-6">
                                {
                                answers.map(answer=> (
                                    <ul>
                                        <li key = {answer.response.length++} >  {answer.question }: {answer.response}</li>
                                    </ul>
                                ))}
                            </div>

                        </CardContent>
                    </CardHeader>
                </Card>
            </div>


        </div >
    )
}
