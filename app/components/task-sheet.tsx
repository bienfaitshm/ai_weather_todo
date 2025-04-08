import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ListTodo } from "lucide-react"
import { TypographyLarge, TypographyP } from "./ui/typography"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export function TaskSheet() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full">
                    <ListTodo />
                    <span>Taches</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-2/4 space-y-4">
                <SheetHeader>
                    <SheetTitle>Taches et Ai Assistants</SheetTitle>
                    <SheetDescription>
                        Ceci est une liste de vos tâches. Vous pouvez ajouter, modifier ou supprimer des tâches selon vos besoins.
                    </SheetDescription>
                </SheetHeader>
                <div>
                    <div className="">
                        Taches
                        <div className="bg-purple-500/20 px-4 py-2 rounded-md">
                            <TypographyLarge className="text-sm">Boire un verre</TypographyLarge>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild><TypographyP className="text-muted-foreground text-xs truncate">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                                        at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.
                                    </TypographyP></TooltipTrigger>
                                    <TooltipContent>
                                        <TypographyP className="text-xs"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                                            at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.</TypographyP>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>


                        </div>
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    )
}
