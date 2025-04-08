import React from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { TypographyLarge, TypographyP } from "./ui/typography"

export const Task: React.FC = () => {
    return (
        <div className="bg-purple-500/20 px-4 py-2 rounded-md">
            <TypographyLarge className="text-sm">Boire un verre</TypographyLarge>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild><TypographyP className="text-muted-foreground text-xs truncate cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                        at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.
                    </TypographyP></TooltipTrigger>
                    <TooltipContent>
                        <TypographyP className="text-xs max-w-sm"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Voluptatum illum velit sint mollitia deleniti quis optio fuga minus hic,
                            at vero inventore magni? Maiores sint assumenda obcaecati maxime reiciendis exercitationem.</TypographyP>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}