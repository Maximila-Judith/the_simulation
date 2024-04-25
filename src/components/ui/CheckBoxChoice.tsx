import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from 'react';
export const CheckBoxChoice = ({ value, label, onCheck }: { value: string, label: string, onCheck: () => void }) => {

    const handleChange = () => {
        onCheck()
    }
    return (
        <div>
            <div className="items-top flex space-x-2">
                <Checkbox id={value} onChange={handleChange} />
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

