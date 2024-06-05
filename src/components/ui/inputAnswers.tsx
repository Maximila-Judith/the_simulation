import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"
import { CircleCheck,CircleX,TriangleAlert } from 'lucide-react';
import { spaceDeleteRegex, numberFormatRegex } from "@/lib/regex/numberRegex"

export const TypeInput = ({ onSubmit, question }: { onSubmit: (label: string[], next: string, now: string, name: string) => void; question: Data }) => {
    const [response, setResponse] = useState<string>('');
    const isValidNumber = !isNaN(Number(response)) &&Number(response)>=0 && Number.isInteger(Number(response)) && response !== '';
    const condition = question.answers.inputOption.condition
    const alert = question.answers.inputOption.alert
    const conditionValue = question.answers.inputOption.conditionValue
    const [isAccepted, setIsAccepted] = useState(false)  

    let montantValue ='';

    montantValue = response.replace(...spaceDeleteRegex);
    montantValue = montantValue.replace(...numberFormatRegex);

    const handleAnswerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {

        // traitement de la condition
      if (condition) {
        if (condition === 'more') {
            Number(event.target.value.replace(...spaceDeleteRegex)) > conditionValue ? setIsAccepted(true): setIsAccepted(false)
        } else if (condition === 'less') {
            Number(event.target.value.replace(...spaceDeleteRegex)) < conditionValue ? setIsAccepted(true): setIsAccepted(false)
         }
      }
  
        setResponse(event.target.value.replace(...spaceDeleteRegex));
    }

    const handleSend = () => {
        onSubmit([response], question.nextQuestion, question.id, question.answers.name)
        setResponse('');
    }

return (
  <div className="flex flex-col space-y-2 mx-20 flex-wrap content-center  ">
    <input
      type={question.answers.inputOption.type}
      value={montantValue}
      placeholder={question.answers.inputOption.label}
      onChange={handleAnswerSubmit}
      className='text-sm pl-3 h-10 border-none '
      autoFocus
    />
    {condition ? (
      <>
         {response.trim() !== '' && isValidNumber && isAccepted && (
                <Button type="submit" className="w-20 h-9 mt-0 inline-block" onClick={handleSend}>
                Submit
                </Button>
        )}
         {!isValidNumber && response.trim() !== '' && (
          <div className='flex pl-0 space-x-2'>
            <CircleX className='text-red-700 size-5 rounded-full mt-1' /><p className=" inline-block mt-1.5 text-sm">Entrez un nombre valide</p>
          </div>
        )}
                
         {!isAccepted && response.trim() !== ''&& isValidNumber && (
          <div className='flex pl-0 pt-2 space-x-2'>
            <TriangleAlert className='text-orange-500 size-5 rounded-full mt-1' /><p className=" inline-block mt-1.5 text-sm">{alert}</p>
          </div>
        )}
                
         {!(response.trim() !== '' && isValidNumber) && (
          <div className="h-11"></div>
        )}
      </>
    ) : (
      <>
        {response.trim() !== '' && isValidNumber && (
                <Button type="submit" className="w-20 h-9 inline-block" onClick={handleSend}>
                Submit
                </Button>
        )}
        {!isValidNumber && response.trim() !== '' && (
          <div className='flex pl-0 pt-2 space-x-2'>
            <CircleX className='text-red-700 size-5 rounded-full mt-1' /><p className=" inline-block mt-1.5 text-sm">Entrez un nombre valide</p>
          </div>
        )}
        {!(response.trim() !== '' && isValidNumber) && (
          <div className="h-11"></div>
        )}
      </>
    )}
  </div>
);

}
