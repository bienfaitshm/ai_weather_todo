import { getPosition } from "@/.server/geo";
import { fetchWeatherForecast } from "@/.server/weather";
import {
    TypographyH1,
    TypographyH3,
    TypographyH4,
    TypographySmall,
} from "@/components/ui/typography";
import {
    parseDate,
    formatDateTime,
    FORMAT_DATE,
} from "@/lib/date-time";
import { formatCoordinatesToQuery } from "@/lib/formater";

import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// Types for Weather Data
interface WeatherForecast {
    dailyChanceOfRain: number;
    condition: string;
    icon: string;
    minTemperature: number;
    maxTemperature: number;
    date: string;
}

interface CurrentWeather {
    temperature: number | string;
    condition: string;
    icon: string;
    cloud: number;
}

interface WeatherData {
    current: CurrentWeather;
    forecast: WeatherForecast[];
}

interface GeoData {
    ip: string;
    city: string;
    latitude: number;
    longitude: number;
    region: string;
    timezone: string;
    country: string;
}

// WeatherCardPrevesion Component
/**
 * Displays a single weather forecast card.
 */
const WeatherCardPrevesion: React.FC<WeatherForecast> = ({
    condition,
    dailyChanceOfRain,
    minTemperature,
    maxTemperature,
    date,
    icon: iconUrl,
}) => {
    const parsedDate = formatDateTime(parseDate(date), FORMAT_DATE.DETAIL_DATE);

    return (
        <div className="flex flex-col items-center gap-5 rounded-md border p-2 shadow-sm md:shadow-none md:border-none">
            <TypographyH4 className="text-md capitalize">{parsedDate}</TypographyH4>
            <img className="size-14" src={iconUrl} alt={condition} />
            <div className="flex flex-col items-center gap-2">
                <TypographyH3 className="text-md">
                    {minTemperature}° / {maxTemperature}°
                </TypographyH3>
                <div className="flex flex-col items-center">
                    <TypographySmall className="text-xs">{condition}</TypographySmall>
                    <TypographySmall className="text-xs">
                        Pluie {dailyChanceOfRain}%
                    </TypographySmall>
                </div>
            </div>
        </div>
    );
};

// WeatherMainCardPrevesion Component
/**
 * Displays the main weather card for the current day.
 */
const WeatherMainCardPrevesion: React.FC<CurrentWeather> = ({
    condition,
    icon,
    temperature,
    cloud,
}) => {
    return (
        <div className="flex flex-row items-center justify-between md:flex-col md:items-start text-neutral-800 dark:text-neutral-200">
            <div className="space-y-1">
                <TypographyH4>Aujourd'hui</TypographyH4>
                <TypographyH1 className="tracking-widest">{temperature}°</TypographyH1>
                <div className="flex flex-col">
                    <TypographySmall className="text-sm">{condition}</TypographySmall>
                    <TypographySmall className="text-sm">
                        Couverture nuageuse {cloud}%
                    </TypographySmall>
                </div>
            </div>
            <img className="size-28" src={icon} alt={condition} />
        </div>
    );
};

// Loader Function
/**
 * Fetches the user's geolocation and weather forecast data.
 */
export async function loader({ request }: LoaderFunctionArgs) {
    const geo: GeoData = await getPosition(request);
    const weathers: WeatherData = await fetchWeatherForecast(formatCoordinatesToQuery(geo.latitude, geo.longitude));

    return { geo, weathers };
}

// PrevisionPage Component
/**
 * Displays the weather forecast page.
 */
export default function PrevisionPage() {
    const { geo, weathers } = useLoaderData<typeof loader>();

    return (
        <div className="p-4 container flex items-center mx-auto max-w-screen-lg mt-10 md:mt-28">
            <div className="w-full space-y-6">
                {/* Header Section */}
                <div className="flex items-center justify-between gap-4">
                    <TypographyH3>
                        {`${geo?.city} - ${geo?.country}` || "Unknown Region"}
                    </TypographyH3>
                </div>

                {/* Weather Cards Section */}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-7 md:gap-8 w-full">
                    {/* Main Weather Card */}
                    <div className="col-span-2 mb-20">
                        <WeatherMainCardPrevesion
                            condition={weathers.current.condition}
                            temperature={weathers.current.temperature}
                            icon={weathers.current.icon}
                            cloud={weathers.current.cloud}
                        />
                    </div>

                    {/* Forecast Cards */}
                    {weathers.forecast.map((weather) => (
                        <WeatherCardPrevesion key={weather.date} {...weather} />
                    ))}
                </div>
            </div>
        </div>
    );
}