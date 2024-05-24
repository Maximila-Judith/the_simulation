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
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"


export function ResultMoreOption({ onHelp, onHorsTax, htName }: { onHelp: () => void; onHorsTax: () => void; htName:string}) {
  return (
    <NavigationMenu className="mb-11 bg-opacity-0  ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" text-xs">Plus</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="hover:text-blue-900 ">
  {htName && <ListItem
                key="horsTaxe"
                title="Voir les exonérations associées à ce type d'impôt"
                onClick={onHorsTax}
              >
              </ListItem>}
              <ListItem
                key="help"
                title= "voir la procédure de calcul"
                onClick={onHelp}
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
            " flex flex-col  h-auto w-[315px] mt-0 select-none space-y-1 rounded-md p-1.5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-xs text-start">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
