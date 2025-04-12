import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { HomeIcon, ListTodoIcon, CloudMoonIcon, MapPinHouseIcon, InfoIcon, type LucideProps } from "lucide-react";
import { Link } from "@remix-run/react";
import { TypographyH2, TypographyMuted, TypographyP } from "./ui/typography";

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
        href: "/infos",
    },
    {
        icon: InfoIcon,
        name: "À propos",
        href: "/about",
    },
]
export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="p-4">
                <div className="">
                    <TypographyH2 className="text-md font-bold text-primary">Ai Weather Todo</TypographyH2>
                    <TypographyMuted className="text-xs text-muted-foreground">
                        Ceci est une application simple pour gérer vos tâches et vérifier la météo.
                    </TypographyMuted>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-2">
                            {menus.map((item) => (
                                <SidebarMenuItem key={item.name}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.href} className="text-lg">
                                            <item.icon />
                                            <span>{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <div className="flex items-center justify-center gap-2 text-sm">
                            <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                            <TypographyP><b>Lubumbashi</b> <span className="text-xs">selon votre position.</span></TypographyP>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-2 mt-4 sm:text-xs text-sm text-muted-foreground">
                            <p>© {new Date().getFullYear()} Ai Weather Todo</p>
                            <p>Tous droits réservés.</p>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}
