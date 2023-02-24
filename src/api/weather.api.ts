import { useQuery } from "react-query";
import axios from "axios/index";

export type WeatherCondition = 'cloudy' | 'rain' | 'clear-day'

export type WeatherDay = {
  day: string
  condition: WeatherCondition
  conditionName: string
}

export type WeatherInfo = {
  lon: string
  lat: string
  condition: WeatherCondition
  conditionName: string
  temperature: number
  unit: 'f' | 'c'
  location: string
  upcomming: WeatherDay[]
}

export const useWeather = ({ lat, lon }: { lat: string, lon: string }) => {
  return useQuery<WeatherInfo>(['weather', lat, lon], () =>
    axios.get('/integration/weather', {
      params: {
        lat,
        lon,
      }
    }).then(res => res.data.data)
  )
}