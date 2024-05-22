import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Data } from "@/lib/type/type"
import { CircleCheck,CircleX } from 'lucide-react';
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
        //mise à jour de response
        setResponse(event.target.value.replace(...spaceDeleteRegex));
    }

    const handleSend = () => {
        onSubmit([response], question.nextQuestion, question.id, question.answers.name)
        setResponse('');
    }

return (
  <div className="flex flex-col space-y-2 m-10 mt-6 h-30">
    <Input
      type={question.answers.inputOption.type}
      value={montantValue}
      placeholder={question.answers.inputOption.label}
      onChange={handleAnswerSubmit}
    />
    {condition ? (
      <>
         {response.trim() !== '' && isValidNumber && isAccepted && (
            <>
                <div className='flex pl-0 pt-2 space-x-2'>
            <CircleCheck className='bg-green-300 size-3.5 rounded-full mt-1' /><p className=" inline-block mb-2 ">Ok</p>
                </div>
                <Button type="submit" className="w-20 h-9 inline-block" onClick={handleSend}>
                Submit
                </Button>
            </>
        )}
         {!isValidNumber && response.trim() !== '' && (
          <div className='flex pl-0 pt-2 space-x-2'>
            <CircleX className='text-red-700 size-3.5 rounded-full mt-1' /><p className=" inline-block mb-2 ">Entrez un nombre valide</p>
          </div>
        )}
                
         {!isAccepted && response.trim() !== ''&& isValidNumber && (
          <div className='flex pl-0 pt-2 space-x-2'>
            <CircleX className='text-red-700 size-3.5 rounded-full mt-1' /><p className=" inline-block mb-2 ">{alert}</p>
          </div>
        )}
                
         {!(response.trim() !== '' && isValidNumber) && (
          <div className="h-8"></div>
        )}
      </>
    ) : (
      <>
        {response.trim() !== '' && isValidNumber && (
            <>
                <div className='flex pl-0 pt-2 space-x-2'>
            <CircleCheck className='bg-green-300 size-3.5 rounded-full mt-1' /><p className=" inline-block mb-2 ">Ok</p>
                </div>
                <Button type="submit" className="w-20 h-9 inline-block" onClick={handleSend}>
                Submit
                </Button>
            </>
        )}
        {!isValidNumber && response.trim() !== '' && (
          <div className='flex pl-0 pt-2 space-x-2'>
            <CircleX className='text-red-700 size-3.5 rounded-full mt-1' /><p className=" inline-block mb-2 ">Entrez un nombre valide</p>
          </div>
        )}
        {!(response.trim() !== '' && isValidNumber) && (
          <div className="h-8"></div>
        )}
      </>
    )}
  </div>
);

}

