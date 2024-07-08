import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

const lavatar = () => {
    return (
        <div>
            <Avatar className='relative'>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="flex h-2 w-2 translate-x-8 -mt-1.5 rounded-full bg-sky-500" />
        </div>
    )
}

export default lavatar