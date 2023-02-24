import { useQuery } from "react-query";
import axios from "axios";

export type ImageComponent = {
  id: number
  options: {
    alt: string
    src: string
  }
  type: 'image'
}

export type WeatherComponent = {
  id: number
  options: {
    lat: string
    lon: string
  }
  type: 'weather'
}

export type ButtonValue = 'show' | 'hide'

export type ButtonComponent = {
  id: number
  options: {
    text: string
    value: ButtonValue
    variable: string
  }
  type: 'button'
}

export type ConditionComponent = {
  id: number
  children: number
  options: {
    value: ButtonValue
    variable: string
  }
  type: 'condition'
}

export type Component =
  | ImageComponent
  | WeatherComponent
  | ButtonComponent
  | ConditionComponent

export type List = {
  id: number
  components: number[]
}

export type Variable = {
  initialValue: string
  name: string
  type: string
}

export type PageResponse = {
  lists: List[]
  components: Component[]
  variables?: Variable[]
}

export const usePage = (id: string) => {
  return useQuery<PageResponse>(['page', id], () =>
    axios.get(`/page/${id}`).then(res => res.data.data)
  )
}