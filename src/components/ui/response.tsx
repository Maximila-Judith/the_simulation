import React from 'react'
import { Button } from "@/components/ui/button"


const Response = ({ onSelect, value, nowQuestion }: { onSelect: (value: string[], next: string, now: string, name: string) => void; value: { name: string; label: string; value: string; nextQuestion: string }; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect([value.value], value.nextQuestion, nowQuestion, value.name)
    };

    return (
        <div className='gap-5'>
            <Button variant="secondary" onClick={handleSelect} className="w-full">{value.label}</Button>
        </div>
    )
}
export default Response