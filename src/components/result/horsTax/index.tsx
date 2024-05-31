import { BellRing, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Htax } from "@/lib/type/type"
import Image from 'next/image';
import { CircleCheck } from 'lucide-react'
import { exonerationValues } from './globalExonerations';
import { init } from "./items/init"

export const Exoneration = ({ Click, val }: { Click: () => void; val: string }) => {
  const valH = exonerationValues.find(ht => ht.id === val)

  return (
    <div className="text-center md:text-left lg:text-left">
      <div className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={Click} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <div className="flex flex-col space-y-1.5 pb-2 pt-0 pl-1.5 w-full h-auto">
          <div className="flex justify-center ">
            <Image
              src="/exoneration.png"
              alt="icon 1"
              width={22}
              height={22}
              priority
            />

            <p className="text-sm text-teal-700">Qu'est-ce qu'une exonération ?</p>
          </div>
          <p className="text-xs text-center">
            Certains revenus ne sont pas pris en compte dans le barème de l'impôt sur le revenu (IR), et ils ne doivent donc pas être inscrits sur la déclaration de revenus.
          </p>
        </div>

        <p className="text-sm text-blue-800 font-medium text-center">Exonérations applicables :</p>

        {valH ?
          <div className='text-xs mb-3 p-1  flex flex-col gap-y-1 mx-0.5 py-1 '>
            <CardTitle className=" text-center text-xs ">{valH.description}</CardTitle>
            <CardContent className="flex flex-col space-y-2.5">
              {valH.values.map(
                (ht, index) => (
                  <div key={index} className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-1 justify-start ">
                      <CircleCheck className="size-3.5" />
                      <p className="text-xs text-blue-800">{ht.title}</p>
                    </div>
                    {ht.description && <p className="text-xs bg-slate-50 ">{ht.description}</p>}
                  </div>
                )
              )
              }
            </CardContent>
          </div> :
          <div className="mb-11 mt-1">
            <p className="text-xs text-orange-900 text-center">Il n'y a aucune exonération associée à ce type d'impôt</p>
          </div>}
      </div>

    </div >
  )
}
