"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Building2, Home, Layers3, Newspaper, Shield, TableCellsMerge } from "lucide-react"


export function ThisMenu({ handleClicka}: { handleClicka:() => void}) {

    const handleClick = () => {
        window.location.href = '/accueil'
    }

    const handleClickc = () => {
        window.location.href = '/'
    }

    const handleClickb = () => {
        window.location.href = '/props';
    }

    return (
        <Menubar >
            <MenubarMenu>
                <MenubarTrigger className="text-white" onClick={handleClickc}>Accueil</MenubarTrigger>
            </MenubarMenu>

            {/* <MenubarMenu>
                <MenubarTrigger className="text-neutral-900">Simulation rapide</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <Newspaper className="fill-black-600 text-black-950 size-5" />
                                <span className="text-xs"> Impot sur les Sociétés (IS) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <Building2 className="fill-black-600 text-black-950 size-5" />
                                <span className="text-xs"> Impot sur les Bénéfices d'Affaire (IBA) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <Shield className="fill-current text-black-950 size-5" />
                                <span className="text-xs"> Impot sur les Revenus Fonciers (IRF) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <Layers3 className="fill-black-600 text-black-950 size-5" />
                                <span className="text-xs"> Impot sur les Traitement de Salaire (ITS) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <TableCellsMerge className="fill-black-600 text-black-950 size-5" />
                                <span className="text-xs"> Taxe Professionnelle Synthétique (TPS) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='' onClick={handleClick}>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <Home className="fill-black-600 text-black-950 size-5" />
                                <span className="text-xs"> Taxe Foncière Unique (TFU) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}

            <MenubarMenu>
                <MenubarTrigger className="text-white">Documentation</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href='https://api.impots.bj/media/65d5ae32a155a_B%C3%A9nin-Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%202024.pdf'>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <span className="text-xs"> Code Général des Impôts 2024 (CGI) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href='https://api.impots.bj//media/63b450bf40bf1_Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%20(Version%20citoyenne).pdf'>
                            <div className="flex flex-rows space-x-3 hover:text-blue-900 hover:font-bold">
                                <span className="text-xs"> Code Général des Impôts 2024 (V.C) </span>
                            </div>
                        </Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger className="text-white">
                    <Link href='' onClick={handleClickb}> Consulter mes resultats </Link>
                </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger className="text-white">
                    <Link href='' onClick={handleClicka}> Déconnexion </Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>


    )
}


