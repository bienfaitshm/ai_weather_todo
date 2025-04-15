import { getWeatherForecast } from "@/lib/weather";

/**
 * Represents the current weather conditions.
 */
type Weather = {
    temperature: number;
    condition: string;
    icon: string;
    cloud: number;
};

/**
 * Represents the weather forecast for a specific day.
 */
type DailyForecast = {
    dailyChanceOfRain: number;
    condition: string;
    icon: string;
    minTemperature: number;
    maxTemperature: number;
    date: string;
};

/**
 * Represents the response structure for the weather forecast.
 */
export type WeatherForecastResponse = {
    current: Weather;
    forecast: DailyForecast[];
};

/**
 * Fetches the weather forecast for a given city.
 * 
 * @param city - The name of the city to fetch the weather forecast for.
 * @returns A promise that resolves to the weather forecast response.
 * 
 * @example
 * const forecast = await fetchWeatherForecast("New York");
 * console.log(forecast.current.temperature);
 */
export async function fetchWeatherForecast(city: string): Promise<WeatherForecastResponse> {
    const { current, forecast } = await getWeatherForecast({ city }, 5);

    return {
        current: {
            temperature: current.temp_c,
            condition: current.condition.text,
            icon: current.condition.icon,
            cloud: current.cloud,
        },
        forecast: forecast.forecastday.map(({ day, date }) => ({
            dailyChanceOfRain: day.daily_chance_of_rain,
            condition: day.condition.text,
            icon: day.condition.icon,
            minTemperature: day.mintemp_c,
            maxTemperature: day.maxtemp_c,
            date,
        })),
    };
}