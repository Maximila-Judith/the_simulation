import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { TriangleAlert , X} from 'lucide-react';

export const Alert = ({ alert, onClick }: { alert: string, onClick: () => void } ) => {

  return (
    <div className="text-center md:text-left lg:text-left text-xs " >
      <div className=" bg-white flex flex-col space-y-0 w-96 m-auto rounded-sm overflow-hidden">
        <div className="flex justify-end mt-0 mr-0">
          <button onClick={onClick} className=" hover:text-white w-8 h-6 bg-red-700 rounded-none p-1 bg-opacity-0 hover:bg-opacity-100 hover: color-white ">
            <X className="h-full w-full " />
          </button>
        </div>
        <CardContent className="flex justify-center h-full w-full ">
            <div className="flex space-x-1 ">
              <TriangleAlert className=""/>
              <p className="text-orange-700 mt-1"> Warning</p>
            </div>
        </CardContent>

        <CardContent className="flex justify-center pt-auto">
          <div className="text-center">
            {alert}
          </div>
        </CardContent>
      </div>

    </div >
  )
}