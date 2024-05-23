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
import { TriangleAlert } from 'lucide-react';

export const Alert = ({ alert, onClick }: { alert: string, onClick: () => void } ) => {

  return (
    <div className="text-center md:text-left lg:text-left text-xs " >
      <Card className=" flex flex-col space-y-1 w-96 m-auto">
        <CardContent className="flex justify-center content-center h-full w-full bg-orange-50 rounded-t-md">
            <div className="flex space-x-1 pt-3">
              <TriangleAlert/>
              <p className="text-red-700"> Warning</p>
            </div>
        </CardContent>

        <CardContent className="flex justify-center pt-auto">
          <div className="text-center">
            {alert}
          </div>
        </CardContent>
        <div className="flex justify-center">
          <Button onClick={onClick} className=" h-8 text-slate-950 bg-slate-200 hover:text-slate-400 mb-5 w-50">
            <Check className="mr-2 h-4 w-4" /> Ok
          </Button>
        </div>
      </Card>

    </div >
  )
}