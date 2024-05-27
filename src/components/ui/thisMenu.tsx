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



export function ThisMenu() {

    const handleClick = () => {
        window.location.href = '/accueil'
    }

    const handleClickb = () => {
        window.location.href = '/props';
    }

    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>Accueil</MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Simulation</MenubarTrigger>
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
            </MenubarMenu>

            <MenubarMenu>
                <MenubarTrigger>Documentation</MenubarTrigger>
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
                <MenubarTrigger>
                    <Link href='' onClick={handleClickb}> A propos </Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>

        /* <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Accueil
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" relative text-md bg-transparent">Simulation</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <div className=" relative bg-gray-100" style={{ left: '40px' }}>
                            <ul className="grid lg:grid-cols-[1fr] -space-y-4 text-start md:w-[200px] lg:w-[350px]">
                                <ListItem href='' onClick={handleClick}>
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <Newspaper className="fill-black-600 text-black-950 size-5" />
                                        <span className="text-xs"> Impot sur les Sociétés (IS) </span>
                                    </div>
                                </ListItem>
                                <ListItem href='' onClick={handleClick} >
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <Building2 className="fill-black-600 text-black-950 size-5" />
                                        <span className="text-xs"> Impot sur les Bénéfices d'Affaire (IBA) </span>
                                    </div>
                                </ListItem>
                                <ListItem href='' onClick={handleClick}>
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <Shield className="fill-current text-black-950 size-5" />
                                        <span className="text-xs"> Impot sur les Revenus Fonciers (IRF) </span>
                                    </div>
                                </ListItem>
                                <ListItem href='' onClick={handleClick}>
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <Layers3 className="fill-black-500 text-black-950 size-5" />
                                        <span className="text-xs"> Impot sur les Traitement de Salaire (ITS) </span>
                                    </div>
                                </ListItem>
                                <ListItem href='' onClick={handleClick}>
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <TableCellsMerge className="fill-black-500 text-black-950 size-5" />
                                        <span className="text-xs"> Taxe Professionnelle Synthétique (TPS) </span>
                                    </div>
                                </ListItem>
                                <ListItem href='' onClick={handleClick}>
                                    <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                        <Home className="fill-black-500 text-black-950 size-5" />
                                        <span className="text-xs"> Taxe Foncière Unique (TFU) </span>
                                    </div>
                                </ListItem>
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" text-md bg-transparent">Documentation</NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-gray-100">
                        <ul className="grid lg:grid-cols-[1fr] -space-y-4 text-start md:w-[200px] lg:w-[250px]">
                            <ListItem href='https://api.impots.bj/media/65d5ae32a155a_B%C3%A9nin-Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%202024.pdf'>
                                <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                    <span className="text-xs"> Code Général des Impôts 2024 (CGI) </span>
                                </div>
                            </ListItem>
                            <ListItem href='https://api.impots.bj//media/63b450bf40bf1_Code%20G%C3%A9n%C3%A9ral%20des%20Imp%C3%B4ts%20(Version%20citoyenne).pdf' >
                                <div className="flex flex-rows space-x-3 hover:text-blue-950 hover:font-semibold">
                                    <span className="text-xs"> Code Général des Impôts 2024 (V.C) </span>
                                </div>
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            A propos
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu> */
    )
}

/* const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem" */
