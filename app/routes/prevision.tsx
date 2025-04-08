import { Button } from "@/components/ui/button"
import { TypographyH2, TypographyH3, TypographyH4, TypographySmall } from "@/components/ui/typography"
import { CloudSnowIcon, CloudMoon, ArrowLeftIcon } from "lucide-react"
import { useNavigate } from "@remix-run/react";
import { TaskSheet } from "@/components/task-sheet";

const WeatherCardPrevesion: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <TypographyH4 className="text-md">27 Sun</TypographyH4>
            <CloudSnowIcon className="size-14" />
            <div className="flex flex-col items-center gap-2">
                <TypographyH3>18° / 23°</TypographyH3>
                <div className="flex flex-col items-center">
                    <TypographySmall className="text-xs">Shower</TypographySmall>
                    <TypographySmall className="text-xs">Rain 90%</TypographySmall>
                </div>
            </div>
        </div>
    )
}

const WeatherMainCardPrevesion: React.FC = () => {
    return (
        <div className="space-y-4">
            <div className="">
                <TypographyH2>35°</TypographyH2>
                <div className="flex flex-col">
                    <TypographySmall className="text-xs">Shower</TypographySmall>
                    <TypographySmall className="text-xs">Chance of Rain 90%</TypographySmall>
                </div>
            </div>
            <CloudMoon className="size-28" />
        </div>
    )
}

const ButtonGoBack: React.FC = () => {
    const navigate = useNavigate()
    return (
        <Button size="icon" variant="outline" className="rounded-full" onClick={() => navigate(-1)}>
            <ArrowLeftIcon />
        </Button>
    )
}

export default function PrevisionPage() {
    return (
        <div className="container flex h-screen items-center mx-auto max-w-screen-lg">
            <div className="w-full space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <ButtonGoBack />
                        <TypographyH3>Lubumbashi-CD</TypographyH3>
                    </div>
                    <div className="flex items-center gap-4">
                        <TaskSheet />
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-8 w-full">
                    <div className="col-span-2">
                        <WeatherMainCardPrevesion />
                    </div>
                    <WeatherCardPrevesion />
                    <WeatherCardPrevesion />
                    <WeatherCardPrevesion />
                    <WeatherCardPrevesion />
                    <WeatherCardPrevesion />
                </div>
            </div>
        </div>
    )
}