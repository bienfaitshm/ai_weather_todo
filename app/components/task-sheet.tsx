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
import { Task } from "./task"

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
                    <Tabs defaultValue="taches" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="taches">Taches</TabsTrigger>
                            <TabsTrigger value="ai-assistant">Ai Assistant</TabsTrigger>
                        </TabsList>
                        <TabsContent value="taches" className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <TypographyLarge className="text-sm">Taches</TypographyLarge>
                                <div className="space-y-2">
                                    <Task />
                                    <Task />
                                    <Task />
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="ai-assistant" className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <TypographyLarge className="text-sm">Ai Assistant</TypographyLarge>
                                <div className="bg-purple-500/20 px-4 py-2 rounded-md">
                                    <TypographyP className="text-sm">Boire un verre</TypographyP>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>

            </SheetContent>
        </Sheet>
    )
}
