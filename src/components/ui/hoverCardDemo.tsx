

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {HelpCircle } from "lucide-react";

export function HoverCardDemo({ item }:{item: string}) {
  return (
    <HoverCard >
      <HoverCardTrigger asChild>
        <button className="flex flex-wrap content-start h-auto ml-0 pt-0 pl-0 items-center space-x-0.5 hover:text-neutral-100 "><p>{ item }</p></button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            
            {item === "Pourcentage appliqué" &&
            
            <p className="text-sm">
              C'est le barême qu'on applique à la base d'imposition
            </p>
            
            }

            {item === "Minimum de perception" &&
            
            <p className="text-sm">
              C'est une somme qui sert de base, si l'impôt calculé est inférieur à cette somme, elle est automatiquement appliquée
            </p>
            
            }

            {item === "Redevance additionnelle" &&
            
            <p className="text-sm">
              C'est un montant qui s'ajoute à l'impôt au profit d'un service
            </p>
            
            }


            <p className="text-sm">
              
            </p>
            <div className="flex items-center pt-2">
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
