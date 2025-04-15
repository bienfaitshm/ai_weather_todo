import { getWeatherForecast } from "@/lib/weather"

type Weather = {
    temperature:number,
    condition:string,
    icon: string
    cloud:number
}
export type WeatherForecastResponse = {
    current: Weather,
    forecast: {
        daily_chance_of_rain: number,
        condition: string,
        icon:string,
        min_temperature: number,
        max_temperature: number,
        date: string
    }[]
}
export async function fetchWeatherForcast(city:string): Promise<WeatherForecastResponse> {
    const {current, forecast, location } = await getWeatherForecast({city}, 5)
    return {
        current:{
            temperature: current.temp_c,
            condition: current.condition.text,
            icon: current.condition.icon,
            cloud:current.cloud
        },
        forecast: forecast.forecastday.map(({day, date})=>({
            daily_chance_of_rain: day.daily_chance_of_rain,
            condition: day.condition.text,
            icon:day.condition.icon,
            min_temperature: day.mintemp_c,
            max_temperature: day.maxtemp_c,
            date
        }))
    }
}