import { ConditionComponent } from "../../api/page.api";
import { ItemsList } from "./ItemsList";
import { useWeatherPageContext } from "./Context";

export const Condition = ({ item }: { item: ConditionComponent }) => {
  const { variables, lists } = useWeatherPageContext()

  const { variable, value } = item.options
  if (variables[variable] !== value) return null

  const list = lists.find((list) => list.id === item.children)
  if (!list) return null

  return <ItemsList list={list} />
}