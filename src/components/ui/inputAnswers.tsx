import React, { useRef, useState } from 'react';
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"

export const TypeInput = ({ onSubmit, question }: { onSubmit: (label: string[], next: string) => void; question: Data }) => {
    const [response, setResponse] = useState<string[]>(['']);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAnswerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        setResponse([event.target.value]);
    }

    const handleSend = () => {
        if (inputRef.current) {
            onSubmit([inputRef.current.value], question.nextQuestion);
        }
    }

    return (
        <div className="flex flex-col space-y-2">
            <Input ref={inputRef} type={question.answers.inputOption.type} value={response} placeholder={question.answers.inputOption.label} onChange={handleAnswerSubmit} />
            <Button type="submit" className='w-20' onClick={handleSend}>Submit</Button>
        </div>
    )
}
