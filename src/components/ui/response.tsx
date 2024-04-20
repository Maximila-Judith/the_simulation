import React from 'react'
import { Button } from "@/components/ui/button"


const Response = ({ answer, onSelect }: { answer: string; onSelect: () => void }) => {
    const handleSelect = () => {
        onSelect();
    };

    return (
        <div className='gap-5'>
            <Button variant="outline" onClick={handleSelect}>{answer}</Button>
        </div>

    )
}

export default Response 