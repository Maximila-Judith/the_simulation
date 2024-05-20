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
import { Info } from "@/lib/type/type"

export interface InfoProps {
  infos: Info,
  onClick: () => void
}

export const InfoCard: React.FC<InfoProps> = ({ infos, onClick }) => {

  return (
    <div className="text-center md:text-left lg:text-left">
      <Card className=" md:text-left lg:text-left">
        <CardHeader>
          <CardTitle>{infos.title}</CardTitle>
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
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onClick} className="w-full">
            <Check className="mr-2 h-4 w-4" /> J'ai compris
          </Button>
        </CardFooter>
      </Card>

    </div >
  )
}
