import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { X } from 'lucide-react'
import Response from '@/components/ui/response'


const body = () => {
    return (
        <div>
            <Card className='h-20'>
                <CardHeader style={{ fontFamily: 'Italianno', fontStyle: 'italic', textAlign: 'center', fontSize: '35px' }}>
                    <CardContent>Etes-vous particulier ou entrepreneur ?</CardContent>
                </CardHeader>
            </Card>
            <Card className='mt-2'>
                <CardHeader>
                    <CardContent className='space-y-2'>
                        <div className='flex flex-row gap-4'>
                            <Response />
                            <Response />
                            <Response />
                            <Response />
                        </div>
                        {/* <div className='flex flex-row gap-4'>
                            <Response />
                            <Response />
                            <Response />
                            <Response />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <Response />
                            <Response />
                            <Response />
                            <Response />
                        </div> */}

                    </CardContent>
                </CardHeader>
            </Card>

        </div >
    )
}

export default body