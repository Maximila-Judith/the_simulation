

"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    useFormField,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { useState } from "react"
import { Data } from "@/lib/type/type"

const FormSchema = z.object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "Vous devez sélectionner au moins un élément.",
    }),
})
/* const OtherQuestion = z.object({
    items: z.array(z.string()).refine((value) => value.find((item) => item), {
    }),
})
 */

export function CheckboxReactHookFormMultiple({ onValide, question }: { onValide: (value: string[], next: string, now:string) => void; question: Data }) {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            items: [],
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        onValide(data.items, question.nextQuestion, question.id)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="items"
                    render={() => (
                        <FormItem>
                            {question.answers.choiceOptions.map((choice) => (
                                <FormField
                                    key={choice.value}
                                    control={form.control}
                                    name="items"
                                    render={({ field }) => {
                                        return (
                                            <FormItem
                                                key={choice.value}
                                                className="flex flex-row items-start space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value?.includes(choice.value)}
                                                        onCheckedChange={(checked) => {

                                                            return checked
                                                                ?
                                                                field.onChange([...field.value, choice.value])
                                                                : field.onChange(
                                                                    field.value?.filter(
                                                                        (value) => value !== choice.value
                                                                    )
                                                                )
                                                        }}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {choice.label}
                                                </FormLabel>
                                            </FormItem>
                                        )
                                    }}
                                />
                            ))}
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Soumettre</Button>
            </form>
        </Form>
    )
}