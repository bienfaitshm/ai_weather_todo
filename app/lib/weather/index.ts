import axios from "axios"
import type {WeatherForecast } from "./types"

const baseURL = process.env.WEATHER_API_URL ||  "http://api.weatherapi.com/v1/"
const KEY = process.env.WEATHER_API_KEY
const axiosClient = axios.create({baseURL });


export type Region = {
    city: string
}

export async function getWeatherForecast(region: Region, days:number = 7) {
    return await axiosClient.get<WeatherForecast>("forecast.json", {
        params: {
            key: KEY,
            q: region.city,
            days,
            aqi: "no",
            alerts: "no",
            lang:"fr"
        }
    }).then(res=>res.data);
}