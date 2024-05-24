import { BellRing, Check,X } from "lucide-react"
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

export const HorsTax = ({ Click, val }: { Click: () => void; val:Htax} ) => {

  return (
    <div className="text-center md:text-left lg:text-left">
      <div  className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={Click} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <CardHeader className="flex justify-center pt-0 h-12 w-full">
          <CardTitle className=" text-center text-sm ">{val.description}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-3">
          {val.values.map(
            (ht, index) => (
          <div key={index} className="flex flex-col space-y-1">
                <div className="flex items-center bg-slate-50 justify-start ">
                <Image
                  src="/hors-taxe.png"
                  alt="icon 1"
                  width={18}
                  height={18}
                  priority
                />
                  <p className="text-xs">{ht.title}</p>
                </div>
                {ht.description && <p className="text-xs">{ht.description}</p>}
          </div>
           )
      )
       }
        </CardContent>

      </div>

    </div >
  )
}
