"use client"

import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"


export default function SignInForm() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <div className="flex flex-row item-center gap-20 w-full justify-center mt-20">
            <div className="w-1/2 mt-20">
                <Image
                    src="/img/sign.jpg"
                    alt="icon 1"
                    width={1000}
                    height={1000}
                    priority
                    className="opacity-100"
                />
            </div>
            <div className="p-10 bg-gray-200 rounded-md mt-10 w-1/2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Nom de l'utilisateur</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <button className="bg-blue-600 p-2 rounded-sm text-center hover:bg-blue-800" type="submit">S'inscrire</button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

