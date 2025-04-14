import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Ai Weather Todo | Apropos" },
        { name: "description", content: "Cette application combine une liste de tâches des mises à jour météo et une intelligence artificielle pour offrir une expérience utilisateur fluide et intelligente, développée à titre d'apprentissage des nouvelles technologies." },
    ];
};



export default function Page() {
    return (
        <div className="flex mt-10 md:mt-28 continue mx-auto max-w-screen-md items-center justify-center">
            <div className="text-center space-y-4">
                <TypographyH1>Bienvenue sur Ai Weather Todo</TypographyH1>
                <p className="mt-4 text-lg text-gray-600">
                    Ce projet est une application simple pour gérer vos tâches et consulter la météo,
                    développée à titre d'apprentissage des nouvelles technologies.
                </p>

                <div className="text-justify">
                    <TypographyP>
                        Cette application open source combine une liste de tâches,
                        des mises à jour météo et une intelligence artificielle
                        pour offrir une expérience utilisateur fluide et intelligente.
                    </TypographyP>
                    <TypographyP>
                        Développée par <Link to="https://github.com/bienfaitshm" className="text-blue-600 underline hover:text-blue-800 mx-2">Bienfait Shomari</Link>,
                        elle vise à rendre votre planification quotidienne plus intelligente et efficace.
                    </TypographyP>
                    <TypographyP>
                        Les contributions sont les bienvenues sur le dépôt GitHub du projet :{" "}
                        <Link to="https://github.com/bienfaitshm/ai_weather_todo" className="text-blue-600 underline hover:text-blue-800">ai_weather_todo</Link>.
                    </TypographyP>
                </div>
            </div>
        </div>
    );
}