import React from 'react'
import { Button } from "@/components/ui/button"
import styles from '@/app/wizard.module.css'


const Response = ({ onSelect, value, nowQuestion }: { onSelect: (value: string[], next: string, now: string, name: string) => void; value: { name: string; label: string; value: string; nextQuestion: string }; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect([value.value], value.nextQuestion, nowQuestion, value.name)
    };

    return (
        <div className='gap-2 bg-neutral-200 border border-neutral-400 hover:border-neutral-500 '>
            <button onClick={handleSelect} className='w-full text-xs h-10 hover:bg-gradient-to-r from-teal-700 to-teal-900 hover:text-white text-black  font-medium'><div className='mx-0 truncate w-full'>{value.label}</div></button>
        </div>
    )
}
export default Response