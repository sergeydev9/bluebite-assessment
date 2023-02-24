import React from 'react'
import { List } from "../../api/page.api";
import { ImageCard } from "./ImageCard/ImageCard";
import { WeatherCard } from "./WeatherCard/WeatherCard";
import { ButtonCard } from "./ButtonCard/ButtonCard";
import { Condition } from "./Condition";
import { useWeatherPageContext } from "./Context";

export const ItemsList = ({ list }: { list: List }) => {
  const { components } = useWeatherPageContext()

  return (
    <>
      {list.components.map((id) => {
        const item = components.find((item) => item.id === id)
        if (item) {
          if (item.type === 'image') {
            return <ImageCard key={id} item={item} />
          } else if (item.type === 'weather') {
            return <WeatherCard key={id} item={item} />
          } else if (item.type === 'button') {
            return <ButtonCard key={id} item={item} />
          } else if (item.type === 'condition') {
            return <Condition item={item} />
          }
        }

        return <React.Fragment key={id} />
      })}
    </>
  )
}