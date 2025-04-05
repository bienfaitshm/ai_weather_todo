import { HomeDateTimer } from "@/components/home-time";
import { Button } from "@/components/ui/button";
import { CloudMoon, HomeIcon, ListTodoIcon } from "lucide-react"


import type { MetaFunction } from "@remix-run/node";
import { WeatherCard } from "@/components/weather-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Ai Weather Todo" },
    { name: "description", content: "This is a simple application to manage your tasks and check the weather." },
  ];
};

export default function Index() {
  return (
    <div className="flex container h-screen items-center mx-auto max-w-screen-md">
      <div className="flex items-center justify-between w-full">
        <div className="space-y-5">
          <HomeDateTimer />
          <div className="w-full flex flex-row justify-center gap-5">
            <Button className="rounded-full">
              <HomeIcon />
              <span>Home</span>
            </Button>
            <Button className="rounded-full">
              <ListTodoIcon />
              <span>Taches</span>
            </Button>
          </div>
        </div>
        <WeatherCard
          title="Card Title"
          description="Card Description"
          temperature={35}
          weatherCondition="Mostly clear"
          rainChance="Chance of Rain 25%"
          humidity="Humidity 70%"
          icon={<CloudMoon className="size-24" />}
        />
      </div>
    </div>
  );
}