import React from 'react'
import { Input } from './input';
import { CheckboxReactHookFormMultiple } from '@/components/ui/multipleCheck'
import { useState } from 'react';


export const CheckBoxChoice = ({ value, label, onCheck }: { value: string, label: string, onCheck: () => void }) => {

    const handleChange = () => {
        onCheck()
    }
    return (
        <div>
            <div className="items-top flex space-x-2 ">
                <Input type='checkbox' id={value} onChange={handleChange} />
                <div className="grid gap-1.5 leading-none">
                    <label
                        htmlFor={value}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                    </label>
                </div>
            </div>
        </div>
    )
}

