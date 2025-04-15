import { getWeatherForecast } from "@/lib/weather"


export async function fetchWeatherForcast(city:string) {
    return await getWeatherForecast({city})
}