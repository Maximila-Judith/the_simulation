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
    <div className="text-center md:text-left lg:text-left  ">
      <div className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden pl-1.5 pb-5">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={onClick} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="flex space-x-1">
            <Calculator className="size-5"/>
            <div className="text-x text-center">Mode de calcul</div>
          </div>
        </div>
      <div className="flex flex-col space-y-2">
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <div className="flex space-x-1">
                <Coins className="size-4" />
                <p className="font-medium text-sm">Base d'imposition</p>
                </div>
                <p className="text-xs">C'est le montant qui sert à déterminer le prix à payer. Il peut être un chiffre d'affaire, un salaire ,etc. </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <div className="flex space-x-1">
                <Coins className="size-4" />
                <p className="font-medium text-sm">Base d'imposition</p>
                </div>
                <p className="text-xs">C'est le montant qui sert à déterminer le prix à payer. Il peut être un chiffre d'affaire, un salaire ,etc. </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <div className="flex space-x-1">
                <Coins className="size-4" />
                <p className="font-medium text-sm">Base d'imposition</p>
                </div>
                <p className="text-xs">C'est le montant qui sert à déterminer le prix à payer. Il peut être un chiffre d'affaire, un salaire ,etc. </p>
              </div>
            </div>
      </div>
        
      </div>

    </div >
  )
}
