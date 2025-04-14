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
import { Link } from "@remix-run/react"

import { menus } from "@/constants/menus"
import { TypographyH3, TypographyP } from "./ui/typography"

export const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarContent className="flex flex-col">
                <SidebarHeader className="px-4 py-2">
                    <TypographyH3 className="text-lg font-bold">Menu</TypographyH3>
                    <TypographyP className="text-xs text-muted-foreground">
                        Ceci est une application simple pour gérer vos tâches et vérifier la météo.
                    </TypographyP>
                </SidebarHeader>
                <SidebarGroup className="flex-1 mt-5">
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menus.map((item) => (
                                <SidebarMenuItem key={item.name} className="space-y-2">
                                    <SidebarMenuButton asChild>
                                        <Link to={item.href} className="flex items-center space-x-2">
                                            <item.icon className="size-5" />
                                            <span className="text-md">{item.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarFooter className="px-4 py-2">
                    <div className="flex items-center gap-2 mt-4 sm:text-xs text-sm text-muted-foreground flex-wrap">
                        <div className="size-2 rounded-full bg-green-600 animate-pulse flex-shrink-0"></div>
                        <TypographyP className="flex-1">
                            <b>Lubumbashi</b> <span className="text-xs">(position actuelle)</span>
                        </TypographyP>
                    </div>
                    <div className="flex flex-col items-center justify-center sm:text-xs text-sm text-muted-foreground">
                        <TypographyP>© {new Date().getFullYear()} - Tous droits réservés</TypographyP>
                        <TypographyP>Ai Weather Todo</TypographyP>
                        {/* <TypographyP>Version {process.env.APP_VERSION || "1.0.0"}</TypographyP> */}
                    </div>
                </SidebarFooter>
            </SidebarContent>
        </Sidebar>
    )
}