import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from 'react';

import { z } from "zod"

const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    password: z.string().min(2).max(50),
    confpassword: z.string().min(2).max(50),
})
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import Image from "next/image"
import { useRouter } from 'next/navigation';

export function SignIn({ children }: { children: ReactNode }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confpassword: "",
        },
    })

  const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const username = values.username
        const email = values.email
        const password = values.password
        const confpassword = values.confpassword

    if (password !== confpassword) {
      alert("Passwords don't match");
      return;
    }

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

        if (res.ok) {
        localStorage.setItem('tempUsername', username);
        localStorage.setItem('tempPassword', password);
         console.log(values)
         router.push('/login'); 
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };



  

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className=" rounded-none ">
        <DialogHeader>
          <DialogTitle>Inscription</DialogTitle>
          <DialogDescription>
            Inscrivez-vous
          </DialogDescription>
        </DialogHeader>
                   <div className=" rounded-md w-full">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Nom de l'utilisateur</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" placeholder="shadcn"  required {...field} />
                                    </FormControl>
                                </FormItem>

                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" type="email" placeholder="shadcn" {...field} />
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
                                        <input className="p-2 rounded-sm w-full" type="password" required placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="confpassword"
                            render={({ field }) => (
                                <FormItem className="flex flex-col space-y-2 items-left">
                                    <FormLabel>Confirm password</FormLabel>
                                    <FormControl>
                                        <input className="p-2 rounded-sm w-full" type="password"  required placeholder="shadcn" {...field} />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <button className="bg-blue-600 p-2 rounded-sm text-center hover:bg-blue-800" type="submit">S'inscrire</button>
                    </form>
                </Form>
            </div>
      </DialogContent>
    </Dialog>
  );
}
