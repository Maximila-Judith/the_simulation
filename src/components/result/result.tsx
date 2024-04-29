import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CheckboxReactHookFormMultiple } from '@/components/ui/multipleCheck'

interface ResultProps {

}

export const Result: React.FC<ResultProps> = ({}) => {
    return (
        <div className="text-center md:text-left lg:text-right">
            <div className='max-w-screen-md mx-auto'>
                <Card className="md-w-1/2 mx-4 mt-4">
                    <CardHeader>
                        <CardContent className='p-10'>
                            <div className="flex flex-row item-center space-x-6">
                            </div>

                        </CardContent>
                    </CardHeader>
                </Card>
            </div>


        </div >
    )
}
