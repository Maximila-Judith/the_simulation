"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "status",
        header: "N°",
    },
    {
        accessorKey: "email",
        header: "Date de Simulation",
    },
    {
        accessorKey: "email",
        header: "Type d'impot",
    },
    {
        accessorKey: "email",
        header: "Montant à payer",
    },
    {
        accessorKey: "email",
        header: "Pourcentage appliqué",
    },
    {
        accessorKey: "email",
        header: "Rededvance additionnelle",
    },
    {
        accessorKey: "email",
        header: "Minimum de perception",
    },
    {
        accessorKey: "amount",
        header: () => <div className="text-right">Amount</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
]
