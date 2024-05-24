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

export const HorsTax = ({ Click}:{ Click: () => void} ) => {

  return (
    <div className="text-center md:text-left lg:text-left">
      <Card className=" md:text-left lg:text-left">
        <CardHeader>
          <CardTitle>Mode de calcul</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={Click} className="w-full">
            <Check className="mr-2 h-4 w-4" /> J'ai compris
          </Button>
        </CardFooter>
      </Card>

    </div >
  )
}
