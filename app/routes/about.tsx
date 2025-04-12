import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

import { TypographyP } from "@/components/ui/typography";
import { SideMenus } from "@/components/side-menus";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

export const meta: MetaFunction = () => {
    return [
        { title: "Ai Weather Todo | Apropos" },
        { name: "description", content: "Cette application combine une liste de tâches des mises à jour météo et une intelligence artificielle pour offrir une expérience utilisateur fluide et intelligente." },
    ];
};



export default function Page() {
    return (
        <div className="flex h-screen continue mx-auto max-w-screen-md items-center justify-center">
            <div className="text-center">
                <div className="flex items-center gap-4">
                    <SideMenus btnOpen={
                        <Button>
                            <PanelLeft className="h-4 w-4" />
                            <span className="sr-only">Ouvrir le menu</span>
                        </Button>
                    } />
                    <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur Ai Weather Todo</h1>
                </div>
                <p className="mt-4 text-lg text-gray-600">
                    Ceci est une application simple pour gérer vos tâches et consulter la météo.
                </p>
                <TypographyP>
                    Cette application combine une liste de tâches,
                    des mises à jour météo et une intelligence artificielle
                    pour offrir une expérience utilisateur fluide et intelligente.
                    <Link to="https://github.com/bienfaitshm" className="text-blue-600 underline hover:text-blue-800">Bienfait Shomari</Link>,
                    elle vise à rendre votre planification quotidienne plus intelligente et efficace.
                </TypographyP>
            </div>
        </div>
    );
}