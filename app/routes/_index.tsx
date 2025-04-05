import { HomeDateTimer } from "@/components/home-time";
import { Button } from "@/components/ui/button";
import { CloudMoon, HomeIcon, ListTodoIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import type { MetaFunction } from "@remix-run/node";

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
        <Card className="px-5">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-10">
              <div>
                <h1 className="text-4xl font-bold">35</h1>
                <p className="text-xs">Mosly clear</p>
                <p className="text-xs">Chance of Rain 25%</p>
                <p className="text-xs">Humidity 70%</p>
              </div>
              <CloudMoon className="size-24" />
            </div>
          </CardContent>

        </Card>

      </div>
    </div>
  );
}