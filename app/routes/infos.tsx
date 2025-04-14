import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";
import { getPosition } from "@/.server/geo"

export const meta: MetaFunction = () => {
    return [
        { title: "Ai Weather Todo| Client information" },
        { name: "description", content: "This is a simple application to manage your tasks and check the weather." },
    ];
};

export async function loader({
    request,
}: LoaderFunctionArgs) {
    return await getPosition(request)
}



export default function Page() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="flex items-center justify-center mt-10">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Informations sur votre emplacement et adresse IP</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Cette page fournit des informations sur votre emplacement actuel et votre adresse IP.
                </p>
                <div className="mt-8 bg-white shadow-sm rounded-lg p-6 max-w-md mx-auto">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Détails de votre emplacement</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex justify-between">
                            <span className="font-medium">IP:</span>
                            <span>{data.ip}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Ville:</span>
                            <span>{data.city}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Latitude:</span>
                            <span>{data.latitude}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Longitude:</span>
                            <span>{data.longitude}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Région:</span>
                            <span>{data.region}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Fuseau horaire:</span>
                            <span>{data.timezone}</span>
                        </li>
                        <li className="flex justify-between">
                            <span className="font-medium">Pays:</span>
                            <span>{data.country}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}