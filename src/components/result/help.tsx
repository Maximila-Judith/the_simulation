import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {HandCoins,Calculator,Coins,Percent, Plus,TriangleAlert,Equal,X,RotateCcw} from 'lucide-react'

export const Help = ({onClick} : { onClick: () => void} ) => {

  return (
    <div className="text-center md:text-left lg:text-left">
      <div className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={onClick} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <CardHeader>
          <CardTitle>Mode de calcul</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 ">
          <div className="flex flex-col gap-1">
            <div className="flex space-x-1">
            <Coins />
            <p className="font-medium ">Base d'imposition</p>
            </div>
            <p>C'est le montant qui sert à déterminer le prix à payer. Il peut être un chiffre d'affaire, un salaire ,etc. </p>
          </div>
        </CardContent>
  
      </div>

    </div >
  )
}
