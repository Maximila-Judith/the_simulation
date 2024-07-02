"use client"
import React, { useState } from 'react'
import Image from "next/image"
import styles from '@/app/diaporama.module.css'
import { Menu, X } from "lucide-react"
import { ThisMenu } from './thisMenu'
import { ConsultMode } from "@/components/ui/consultMode"


export const Propos = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [callCalculmode, setCallCalculmode] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }



    return (
        
        <div className="flex justify-center bg-neutral-300 w-full p-20 ">
            <div className="flex flex-row justify-between pl-5 items-center fixed top-0 left-0 w-full z-50 bg-neutral-200">
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

            <div className="flex flex-col gap-y-10 mt-10 p-10 bg-gray-200 w-1/2 h-full">
                <h1 className='font-bold text-2xl text-center'>Rapport de Simulation</h1>
                <div className='flex flex-col justify-items-start gap-y-10'>
                    <div className='text-left space-y-6'>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Nom:</h2>
                            <p>AHOLOU</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Prénoms:</h2>
                            <p>John Doe</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Email:</h2>
                            <p>johndoe@gmail.com</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Type d'impot:</h2>
                            <p>Impot sur les bénéfices d'affaire (IBA)</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Montant à payer:</h2>
                            <p>25 666 000 F CFA</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Pourcentage appliqué :</h2>
                            <p>25 %</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Redevance additionnelle:</h2>
                            <p>+ 4000 F CFA sur l'impot</p>
                        </div>
                        <div className='flex flex-rows space-x-4'>
                            <h2 className='font-bold'>Minimum de perception:</h2>
                            <p>500 000 F CFA au moins</p>
                        </div>
                    </div>

                    {/*  <div className='flex flex-rows items-center gap-x-5'>
                        <ConsultMode isCall={callCalculmode} />
                    </div> */}
                </div>


            </div>
        </div>
    )
}

