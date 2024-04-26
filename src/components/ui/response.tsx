import React from 'react'
import { Button } from "@/components/ui/button"


const Response = ({ answer, onSelect, value, nextQuestion }: { answer: string; onSelect: (value: string[],nextQuestion : string) => void; value: string[];nextQuestion : string }) => {
    const handleSelect = () => {
        onSelect(value,nextQuestion)
    };

    return (
        <div className='gap-5'>
            <Button variant="outline" onClick={handleSelect} >{answer}</Button>
        </div>
    )
}
export default Response