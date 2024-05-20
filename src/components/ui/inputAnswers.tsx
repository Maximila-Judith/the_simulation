import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"

export const TypeInput = ({ onSubmit, question }: { onSubmit: (label: string[], next: string, now: string, name: string) => void; question: Data }) => {
    const [response, setResponse] = useState<string>('');
    const isValidNumber = !isNaN(Number(response)) && response !== '';
    let montantValue ='';
    // supprimez les espaces existants
    montantValue = response.replace(/\s/g, '');
    // formatez la valeur en groupe de trois chiffres séparés par une espace
    montantValue = montantValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    const handleAnswerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
         // récuperer la valeur entrée sans les espaces existants
        setResponse(event.target.value.replace(/\s/g, ''));
    }

    const handleSend = () => {
        onSubmit([response], question.nextQuestion, question.id, question.answers.name)
        setResponse('');
    }

    return (
        <div className="flex flex-col space-y-2 m-10 mt-4 h-30">
            <Input type={question.answers.inputOption.type} value={montantValue} placeholder={question.answers.inputOption.label} onChange={handleAnswerSubmit} />
            {(response.trim() !== '' && isValidNumber) ? (<Button type="submit" className='w-20 h-8' onClick={handleSend}>Submit</Button>
            ) : !isValidNumber && response.trim() !== '' ? <p className='text-red-700  pb-2'>Entrez un nombre valide</p> : <div className='h-8'></div>}
        </div>
    )
}
