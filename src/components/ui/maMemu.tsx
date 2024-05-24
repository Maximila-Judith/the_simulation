"use client"
import * as React from "react"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"


export const PasMenu = () => {
    const handleClick = () => {
        window.location.href = '/accueil'
    }

    return (
        <NavigationMenu className="bg-opacity-0  ">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" ">Simulation</NavigationMenuTrigger>
                    <NavigationMenuContent >
                        <ul className="hover:text-blue-900 ">
                            <ListItem
                                title="Impot sur les Sociétés (IS)"
                                onClick={handleClick}
                            >
                            </ListItem>
                            <ListItem
                                title="Impot sur les Bénéfices d'Affaire (IBA)"
                                onClick={handleClick}
                            >
                            </ListItem>
                            <ListItem
                                title="Impot sur les Revenus Fonciers (IRF)"
                                onClick={handleClick}
                            >
                            </ListItem>
                            <ListItem
                                title="Impot sur les Traitement de Salaire (ITS)"
                                onClick={handleClick}
                            >
                            </ListItem>
                            <ListItem
                                title="Taxe Professionnelle Synthétique (TPS)"
                                onClick={handleClick}
                            >
                            </ListItem>
                            <ListItem
                                title="Taxe Foncière Unique (TFU)"
                                onClick={handleClick}
                            >
                            </ListItem>

                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "  flex m-auto w-[320px] h-[30px] mt-0 select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm text-center">{title}</div>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
