import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { TypographyP } from "./ui/typography";

interface SideMenusProps {
    btnOpen?: React.ReactNode;
}

export const SideMenus: React.FC<SideMenusProps> = ({ btnOpen }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{btnOpen}</SheetTrigger>
            <SheetContent side="left" className="w-1/2 sm:w-1/3 lg:w-1/4 flex flex-col">
                <SheetHeader>
                    <SheetTitle>Menus</SheetTitle>
                    <SheetDescription>
                        This is a simple application to manage your tasks and check the weather.
                    </SheetDescription>

                </SheetHeader>
                <div className="flex flex-1 flex-col gap-4 mt-4">
                    <div>

                    </div>
                </div>
                <SheetFooter className=" sm:flex-col sm:justify-center sm:space-x-2">
                    <div className="flex items-center gap-2 text-sm">
                        <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                        <TypographyP><b>Lubumbashi</b> d'après votre position actuelle</TypographyP>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4">
                        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Ai Weather Todo</p>
                        <p className="text-sm text-muted-foreground">All rights reserved.</p>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}