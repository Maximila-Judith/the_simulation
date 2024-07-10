import React from 'react';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { User } from 'lucide-react';

const lavatar = () => {
    return (
        <div>
            <Avatar className='relative'>
                <AvatarImage src="/img/user.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default lavatar