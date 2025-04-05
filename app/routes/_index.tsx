import { HomeDateTimer } from "@/components/home-time";
import { Button } from "@/components/ui/button";
import { CloudMoon, HomeIcon, ListTodoIcon } from "lucide-react"


import { json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { WeatherCard } from "@/components/weather-card";
import { getClientIPAddress } from "remix-utils/get-client-ip-address";
import { getLocation } from "@/lib/location";
import { useLoaderData, type ClientLoaderFunctionArgs } from "@remix-run/react";

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

export default function Index() {
  const { location } = useLoaderData<typeof loader>();
  return (
    <div className="flex container h-screen items-center mx-auto max-w-screen-md">
      <div className="flex w-full items-center justify-between">
        <div className="space-y-6">
          <HomeDateTimer />
          <div className="flex justify-center gap-6">
            <Button className="flex items-center gap-2 rounded-full">
              <HomeIcon />
              <span>Home</span>
            </Button>
            <Button className="flex items-center gap-2 rounded-full">
              <ListTodoIcon />
              <span>Tasks</span>
            </Button>
          </div>
        </div>
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
  );
}