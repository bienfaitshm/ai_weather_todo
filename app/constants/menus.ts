
import { HomeIcon, ListTodoIcon, CloudMoonIcon, MapPinHouseIcon, InfoIcon, type LucideProps } from "lucide-react";

export type Menu = {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>,
    name: string,
    href: string
}
export const menus: Menu[] = [
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
        href: "/infos",
    },
    {
        icon: InfoIcon,
        name: "À propos",
        href: "/about",
    },
]