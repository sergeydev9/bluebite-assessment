import { ReactNode } from "react";
import { WeatherComponent } from "../../../api/page.api";
import { Card } from "../../../components/Card/Card";
import style from './weatherCard.module.css'
import cloudy from '../../../icons/cloudy.svg'
import clearDay from '../../../icons/clear-day.svg'
import rain from '../../../icons/rain.svg'
import { useWeather, WeatherCondition } from "../../../api/weather.api";
import { ErrorMessage } from "../../../components/ErrorMessage/ErrorMessage";

const weatherIcons: Record<WeatherCondition, ((className: string) => ReactNode)> = {
  cloudy: (className) => <img className={className} src={cloudy} alt='cloudy' />,
  rain: (className) => <img className={className} src={rain} alt='rain' />,
  'clear-day': (className) => <img className={className} src={clearDay} alt='clear day' />,
}

export const WeatherCard = ({ item }: { item: WeatherComponent }) => {
  const { data, error } = useWeather(item.options)

  if (error) {
    return <ErrorMessage prepend='Failed to load weather' error={error} />
  }

  if (!data) {
    return <>Loading...</>
  }

  const icon = weatherIcons[data.condition](style.mainIcon)

  return (
    <Card>
      <div className={style.weatherCard}>
        <div className={style.mainInfo}>
          {icon}
          <div>
            <div className={style.temperature}>{data.temperature}°{data.unit.toUpperCase()}</div>
            <div className={style.temperatureDescription}>{data.conditionName}</div>
          </div>
          <div className={style.location}>{data.location}</div>
        </div>
        <div className={style.days}>
          {data.upcomming.map((item) =>
            <div key={item.day}>
              {weatherIcons[item.condition](style.dayIcon)}
              <div className={style.dayName}>{item.day}</div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}