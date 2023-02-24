import { ItemsList } from "./ItemsList";
import React from "react";
import { useWeatherPageContext } from "./Context";

export const RootList = () => {
  const data = useWeatherPageContext()

  const list = data.lists.find((list) => list.id === 0)
  if (!list) return null

  return <ItemsList list={list} />
}
