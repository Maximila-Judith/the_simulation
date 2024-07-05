"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {setCookie} from "nookies"
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
import { useRouter } from 'next/navigation';
import path from "path"

export default function LoginForm() {
    const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    })

     const router = useRouter();
    const tempUsername = localStorage.getItem('tempUsername')
    const tempPassword = localStorage.getItem('tempPassword')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: tempUsername?tempUsername:'',
            password: tempPassword?tempPassword:'',
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const username = values.username
    const password = values.password
     
        
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
        const { token } = await res.json();
        localStorage.setItem('jwt-token', token)
        localStorage.removeItem('tempUsername');
        localStorage.removeItem('tempPassword');
        router.push('/accueil');
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

    return (
        <div className="flex flex-row item-center gap-10 w-full justify-center mt-20">
            <div className="w-1/2 mt-20">
                <Image
                    src="/img/login.jpg"
                    alt="icon 1"
                    width={800}
                    height={800}
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
                            name="password"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn" type = 'password' {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <button className="bg-blue-600 p-2 rounded-sm text-center hover:bg-blue-800" type="submit">Se connecter</button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

