import { HomeDateTimer } from "@/components/home-time";
import { CloudMoon } from "lucide-react"
import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { WeatherCard } from "@/components/weather-card";
import { getClientIPAddress } from "remix-utils/get-client-ip-address";
import { getLocation } from "@/lib/location";
import { useLoaderData } from "@remix-run/react";


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
  return json({ clientIp, location });
}

export default function Index() {
  const { location } = useLoaderData<typeof loader>();
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl animate-pulse" />
      <div className="flex container items-center mx-auto max-w-screen-lg p-4 relative z-10">
        <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center mt-14 md:mt-52 ">
          <HomeDateTimer />
          <WeatherCard
            title={`${location?.city} - ${location?.country}` || "Unknown Region"}
            temperature={35}
            weatherCondition="Mostly Clear"
            rainChance="25% Chance of Rain"
            humidity="70% Humidity"
            icon={<CloudMoon className="size-28" />}
          />
        </div>
      </div>
    </div>
  );
}