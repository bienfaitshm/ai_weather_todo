import { HomeDateTimer } from "@/components/home-time";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { WeatherCard } from "@/components/weather-card";
import { useLoaderData } from "@remix-run/react";
import { getPosition } from "@/.server/geo";
import { fetchWeatherForecast } from "@/.server/weather"
import { formatCoordinatesToQuery } from "@/lib/formater";


export const meta: MetaFunction = () => {
  return [
    { title: "Ai Weather Todo" },
    { name: "description", content: "This is a simple application to manage your tasks and check the weather." },
  ];
};


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
  humidity: number
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

export async function loader({
  request,
}: LoaderFunctionArgs) {
  const geo: GeoData = await getPosition(request);
  const weather: WeatherData = await fetchWeatherForecast(formatCoordinatesToQuery(geo.latitude, geo.longitude));
  return { geo, weather };

}

export default function Index() {
  const { geo, weather } = useLoaderData<typeof loader>();
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-30 blur-3xl animate-pulse" />
      <div className="flex container items-center mx-auto max-w-screen-lg p-4 relative z-10">
        <div className="flex flex-col gap-10 md:flex-row w-full items-center justify-center mt-14 md:mt-52 ">
          <HomeDateTimer />
          <WeatherCard
            title={`${geo?.city} - ${geo?.country}` || "Unknown Region"}
            description="Aujourd'hui"
            temperature={weather.current.temperature}
            weatherCondition={weather.current.condition}
            rainChance={`${weather.current.cloud}% de couverture nuageuse`}
            humidity={`${weather.current.humidity}% humidite`}
            icon={<img className="size-28" src={weather.current.icon} alt={weather.current.condition} />}
          />
        </div>
      </div>
    </div>
  );
}