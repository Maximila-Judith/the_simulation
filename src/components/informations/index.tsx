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
import { Info } from "@/lib/type/type"

export interface InfoProps {
  infos: Info,
  onClick: () => void
}

export const InfoCard: React.FC<InfoProps> = ({ infos, onClick }) => {

  return (
    <div className="text-center md:text-left lg:text-left text-xs">
      <div className=" bg-white md:text-left lg:text-left rounded-sm overflow-hidden">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={onClick} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <CardHeader className="flex justify-center pt-0 h-full w-full">
          <CardTitle className=" text-center text-xl ">{infos.title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
            {infos.values.map((info, index) => (
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
  )
}
