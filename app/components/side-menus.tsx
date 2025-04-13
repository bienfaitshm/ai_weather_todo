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
import { HomeIcon, ListTodoIcon, CloudMoonIcon, MapPinHouseIcon, InfoIcon, type LucideProps } from "lucide-react";
import { Link } from "@remix-run/react";

type Menu = {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    name: string,
    href: string
}
const menus: Menu[] = [
    {
        icon: HomeIcon,
        name: "Accueil",
        href: "/",
    },
    {
        icon: ListTodoIcon,
        name: "Mes tâches",
        href: "/tasks",
    },
    {
        icon: CloudMoonIcon,
        name: "Météos et Prévisions",
        href: "/weather",
    },
    {
        icon: MapPinHouseIcon,
        name: "Informations",
<<<<<<< HEAD
        href: "/info",
=======
        href: "/infos",
>>>>>>> developpement
    },
    {
        icon: InfoIcon,
        name: "À propos",
        href: "/about",
    },
]

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
                        Ceci est une application simple pour gérer vos tâches et vérifier la météo.
                    </SheetDescription>

                </SheetHeader>
                <div className="flex flex-1 mt-4 w-full">
                    <div className="space-y-2 w-full">
                        {
                            menus.map((menu) => {
                                const Icon = menu.icon;
                                return (
                                    <Link to={menu.href} key={menu.name} className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer w-full">
                                        <Icon className="w-4 h-4" />
                                        <TypographyP>{menu.name}</TypographyP>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
<<<<<<< HEAD
                <SheetFooter className=" sm:flex-col sm:justify-center sm:space-x-2">
                    <div className="flex gap-2 text-sm">
=======
                <SheetFooter className="sm:flex-col sm:justify-center sm:space-x-2">
                    <div className="flex items-center justify-center gap-2 text-sm">
>>>>>>> developpement
                        <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                        <TypographyP><b>Lubumbashi</b> <span className="text-xs">selon votre position actuelle</span></TypographyP>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 mt-4 sm:text-xs text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} Ai Weather Todo</p>
                        <p>Tous droits réservés.</p>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}