import axios from "axios"
import type {WeatherForecast } from "./types"

const baseURL = "http://api.weatherapi.com/v1/"
const axiosClient = axios.create({baseURL });


export type Region = {
    city: string
}

export async function getWeatherForecast(region: Region, days:number = 7) {
    return await axiosClient.get<WeatherForecast>("forecast.json", {
        params: {
            key: "d59471d9bb934e5197785400250504",
            q: region.city,
            days,
            aqi: "no",
            alerts: "no"
        }
    }).then(res=>res.data);
}