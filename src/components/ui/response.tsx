import React from 'react'
import { Button } from "@/components/ui/button"
import styles from '@/app/wizard.module.css'


const Response = ({ onSelect, value, nowQuestion }: { onSelect: (value: string[], next: string, now: string, name: string) => void; value: { name: string; label: string; value: string; nextQuestion: string }; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect([value.value], value.nextQuestion, nowQuestion, value.name)
    };

    return (
        <div className='gap-2'>
            <button onClick={handleSelect} className='w-full text-xs h-10 hover:bg-gradient-to-r from-teal-700 to-blue-900 hover:text-neutral-100 text-neutral-300'><div className='mx-0 truncate w-full'>{value.label}</div></button>
        </div>
    )
}
export default Response