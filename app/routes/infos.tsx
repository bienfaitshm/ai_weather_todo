import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, type ClientLoaderFunctionArgs } from "@remix-run/react";
import { getClientIPAddress } from "remix-utils/get-client-ip-address"
import type { MetaFunction } from "@remix-run/node";
import { Button } from "@/components/ui/button";
import { getLocation } from "@/lib/location";

export const meta: MetaFunction = () => {
    return [
        { title: "Ai Weather Todo" },
        { name: "description", content: "This is a simple application to manage your tasks and check the weather." },
    ];
};

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const clientIp = getClientIPAddress(request);
    const location = getLocation(clientIp || "41.243.2.163") // for testing purposes, use localhost ip;
    //   const data = JSON.stringify()
    return json({ clientIp, location });
}



export default function Page() {
    const data = useLoaderData<typeof loader>();
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-800">Welcome to Ai Weather Todo</h1>
                <p className="mt-4 text-lg text-gray-600">
                    This is a simple application to manage your tasks and check the weather.
                </p>
                <Button>Loard</Button>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
}