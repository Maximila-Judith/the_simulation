"use client"
import React, { useState } from 'react'
import Image from "next/image"
import styles from '@/app/diaporama.module.css'
import { Menu, X } from "lucide-react"
import { ThisMenu } from './thisMenu'
import { ConsultMode } from "@/components/ui/consultMode"


import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    const [menuOpen, setMenuOpen] = useState(false)
    const [callCalculmode, setCallCalculmode] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }


    return (
        <div className="rounded-md border flex justify-center bg-neutral-300 w-full p-10 mt-20">
            <div className="flex flex-row justify-between pl-5 items-center fixed top-0 left-0 w-full z-50 bg-gray-400">
                <Image
                    src="/benin.png"
                    alt="icon 1"
                    width={80}
                    height={80}
                    priority
                />
                <div className="relative">
                    <button
                        onClick={toggleMenu}
                        className="items-center left-10 right-10 -top-5 justify-center lg:hidden sm:block md:block rounded-lg w-10 h-10 hover:bg-gray-300 hover:bg-opacity-40 focus:outline-none"
                    >
                        {menuOpen ? <X className="absolute -left-20 -right-20" /> : <Menu className="absolute -left-20 -right-20" />}
                    </button>
                    <div
                        className={`absolute -left-20 -right-20 mt-5 shadow-lg z-30 lg:flex lg:flex-row lg:static lg:mt-0 lg:bg-transparent lg:border-0 lg:shadow-none lg:z-auto ${menuOpen ? "block block" : "hidden hidden"
                            }`}
                    >
                        <ThisMenu />
                    </div>
                </div>
            </div>

            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}



