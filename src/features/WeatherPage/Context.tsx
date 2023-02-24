import { createContext, ReactNode, useContext } from 'react';
import { PageResponse } from "../../api/page.api";
import { SetVariable, useVariables, Variables } from "./useVariables";

type ContextValue = Pick<PageResponse, 'lists' | 'components'> & {
  variables: Variables
  setVariable: SetVariable
}

const Context = createContext<ContextValue | null>(null);

export const WeatherPageContextProvider = ({
  data,
  children,
}: {
  data: PageResponse
  children: ReactNode
}) => {
  const [variables, setVariable] = useVariables(data.variables || [])

  return <Context.Provider value={{ ...data, variables, setVariable }} children={children} />
}

export const useWeatherPageContext = () => {
  const value = useContext(Context)
  if (!value) throw new Error('this component must be wrapped in WeatherPageContextProvider')
  return value
}
