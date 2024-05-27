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


export function ResultMoreOption({ onExoneration }: { onExoneration: () => void}) {
  return (
    <NavigationMenu className="bg-opacity-0 ">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" text-center text-x">Resultat de la simulation</NavigationMenuTrigger>
          <NavigationMenuContent >
            <ul className="hover:text-blue-900  ">
              <ListItem
                key="horsTaxe"
                title="Voir les exonérations de cet impôt"
                onClick={onExoneration}
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
