

import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {HelpCircle } from "lucide-react";
import { Info } from "@/lib/type/type"
import { valInfos } from "./globalInfo";
export function HoverInfo({ info }: { info: string }) {

  const valInfo : Info|undefined = valInfos.find(now => now.id === info) 

  return (
    <HoverCard >
      <HoverCardTrigger asChild>
        <button className="flex flex-wrap content-start h-auto ml-0 pt-0 pl-0 items-center space-x-0.5 hover:text-neutral-100 "><HelpCircle className='size-[16px] hover:bg-slate-300 rounded-full' /></button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="text-center md:text-left lg:text-left text-xs">
      <div className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden">
        <CardHeader className="flex justify-center pt-0 h-full w-full">
          <CardTitle className=" text-center text-xl ">{valInfo?.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {valInfo?.values.map((info, index) => (
              <div
                key={index}
                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
              >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {info.title}
                  </p>
      {info.description && <p className="text-xs text-muted-foreground">
                    {info.description}
                  </p>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>

      </div>

    </div >
      </HoverCardContent>
    </HoverCard>
  )
}
