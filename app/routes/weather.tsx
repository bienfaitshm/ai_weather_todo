import { getPosition } from "@/.server/geo"
import { fetchWeatherForcast } from "@/.server/weather"
import { TypographyH1, TypographyH3, TypographyH4, TypographySmall } from "@/components/ui/typography"

import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { CloudSnowIcon, CloudMoon } from "lucide-react"

const WeatherCardPrevesion: React.FC = () => {
    return (
        <div className="flex flex-col items-center gap-5  rounded-md border p-2 shadow-sm md:shadow-none md:border-none">
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
        <div className="flex flex-row items-center justify-between md:flex-col md:items-start">
            <div className="">
                <TypographyH4>Aujourd'hui</TypographyH4>
                <TypographyH1>35°</TypographyH1>
                <div className="flex flex-col">
                    <TypographySmall className="text-sm">Shower</TypographySmall>
                    <TypographySmall className="text-sm">Chance of Rain 90%</TypographySmall>
                </div>
            </div>
            <CloudMoon className="size-28" />
        </div>
    )
}

export async function loader({
    request,
}: LoaderFunctionArgs) {
    const geo = await getPosition(request)
    const weathers = await fetchWeatherForcast(geo.city)
    return {
        geo,
        weathers
    }
}

export default function PrevisionPage() {
    const { geo, weathers } = useLoaderData<typeof loader>();
    console.log({ weathers })
    return (
        <div className="p-4 container flex items-center mx-auto max-w-screen-lg mt-10 md:mt-28">
            <div className="w-full space-y-6">
                <div className="flex items-center justify-between gap-4">
                    <TypographyH3>{`${geo?.city} - ${geo?.country}` || "Unknown Region"}</TypographyH3>
                    <p>
                        {/* {JSON.stringify(weathers, null, 4)} */}
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-7 md:gap-8 w-full">
                    <div className="col-span-2 mb-20">
                        <WeatherMainCardPrevesion />
                    </div>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <WeatherCardPrevesion key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}