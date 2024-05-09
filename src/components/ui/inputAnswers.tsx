import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"

export const TypeInput = ({ onSubmit, question }: { onSubmit: (label: string[], next: string, now: string, name:string) => void; question: Data }) => {
    const [response, setResponse] = useState<string[]>(['']);

    const handleAnswerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponse([event.target.value]);
    }

    const handleSend = () => {
        onSubmit(response, question.nextQuestion, question.id, question.answers.name )
        setResponse(['']);
    }

    return (
        <div className="flex flex-col space-y-2">
            <Input type={question.answers.inputOption.type} value={response[0]} placeholder={question.answers.inputOption.label} onChange={handleAnswerSubmit} />
            {response[0].trim() !== '' && (
                <Button type="submit" className='w-20' onClick={handleSend}>Submit</Button>
            )}
        </div>
    )
}
