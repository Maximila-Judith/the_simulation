import React from 'react'
import { Button } from "@/components/ui/button"


const Response = ({ onSelect, value, nowQuestion }: { onSelect: (value: string[], next: string, now: string, name: string) => void; value: { name: string; label: string; value: string; nextQuestion: string }; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect([value.value], value.nextQuestion, nowQuestion, value.name)
    };

    return (
        <div className='gap-2'>
            <Button variant="secondary" onClick={handleSelect} style={{ overflow: 'hidden' }} className="w-full h-full bg-blue-200"><div style={{ whiteSpace: 'nowrap' }}>{value.label}</div></Button>
        </div>
    )
}
export default Response