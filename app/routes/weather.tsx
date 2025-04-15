import { getPosition } from "@/.server/geo"
import { fetchWeatherForcast } from "@/.server/weather"
import { TypographyH1, TypographyH3, TypographyH4, TypographySmall } from "@/components/ui/typography"

import { LoaderFunctionArgs } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

const WeatherCardPrevesion: React.FC<{
    daily_chance_of_rain: number,
    condition: string,
    icon: string,
    min_temperature: number,
    max_temperature: number,
    date: string
}> = ({ condition, daily_chance_of_rain, min_temperature, max_temperature, date, icon: iconUrl }) => {
    return (
        <div className="flex flex-col items-center gap-5  rounded-md border p-2 shadow-sm md:shadow-none md:border-none">
            <TypographyH4 className="text-md">{date}</TypographyH4>
            <img className="size-14" src={iconUrl} alt={condition} />
            <div className="flex flex-col items-center gap-2">
                <TypographyH3 className="text-md">{min_temperature}° / {max_temperature}°</TypographyH3>
                <div className="flex flex-col items-center">
                    <TypographySmall className="text-xs">{condition}</TypographySmall>
                    <TypographySmall className="text-xs">pluie {daily_chance_of_rain}%</TypographySmall>
                </div>
            </div>
        </div>
    )
}

const WeatherMainCardPrevesion: React.FC<{
    temperature: number | string,
    condition: string;
    iconUrl: string,
    cloud: number;
}> = ({ condition, iconUrl, temperature, cloud }) => {
    return (
        <div className="flex flex-row items-center justify-between md:flex-col md:items-start">
            <div className="space-y-1">
                <TypographyH4>Aujourd'hui</TypographyH4>
                <TypographyH1>{temperature}°</TypographyH1>
                <div className="flex flex-col">
                    <TypographySmall className="text-sm">{condition}</TypographySmall>
                    <TypographySmall className="text-sm">Couverture nuageuse {cloud}%</TypographySmall>
                </div>
            </div>
            <img className="size-28" src={iconUrl} alt={condition} />
            {/* <CloudMoon className="size-28" /> */}
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
                        <WeatherMainCardPrevesion
                            condition={weathers.current.condition}
                            temperature={weathers.current.temperature}
                            iconUrl={weathers.current.icon}
                            cloud={weathers.current.cloud}
                        />
                    </div>
                    {weathers.forecast.map((weather) => (
                        <WeatherCardPrevesion key={weather.date} {...weather} />
                    ))}
                </div>
            </div>
        </div>
    )
}