import React from 'react'
import { Button } from "@/components/ui/button"


const Response = ({ answer, onSelect, value, nextQuestion, nowQuestion}: { answer: string; onSelect: (value: string[],next : string, now: string) => void; value: string[];nextQuestion : string; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect(value,nextQuestion,nowQuestion)
    };

    return (
        <div className='gap-5'>
            <Button variant="outline" onClick={handleSelect} >{answer}</Button>
        </div>
    )
}
export default Response