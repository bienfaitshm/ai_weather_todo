import axios from "axios"

// const API_URL = "http://api.weatherapi.com/v1/forecast.json?key=d59471d9bb934e5197785400250504&q=Lubumbashi&days=7&aqi=no&alerts=no"

const axiosClient = axios.create({
    baseURL: "http://api.weatherapi.com/v1/"
})
export type Region = {
    city: string
}

export async function getWeatherForecast(region: Region) {
    return await axiosClient.get("forecast.json", {
        params: {
            key: "d59471d9bb934e5197785400250504",
            q: region.city,
            days: 7,
            aqi: "no",
            alerts: "no"
        }
    }).then(res=>res.data);
}