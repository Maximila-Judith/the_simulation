import React from 'react'
import { Button } from "@/components/ui/button"
import styles from '@/app/wizard.module.css'


const Response = ({ onSelect, value, nowQuestion }: { onSelect: (value: string[], next: string, now: string, name: string) => void; value: { name: string; label: string; value: string; nextQuestion: string }; nowQuestion: string }) => {
    const handleSelect = () => {
        onSelect([value.value], value.nextQuestion, nowQuestion, value.name)
    };

    return (
        <div className='gap-2'>
            <Button variant="secondary" onClick={handleSelect} className={styles.response}><div className='mx-0 truncate w-full'>{value.label}</div></Button>
        </div>
    )
}
export default Response