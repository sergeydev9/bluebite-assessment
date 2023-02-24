import { Variable } from "../../api/page.api";
import { useState } from "react";

export type Variables = Record<string, string>
export type SetVariable = (name: string, value: string) => void

export const useVariables = (
  initialVariables: Variable[]
) => {
  const [variables, setVariables] = useState<Variables>(() =>
    Object.fromEntries(initialVariables.map((item) => [item.name, item.initialValue]))
  )

  const setVariable: SetVariable = (name, value) => {
    setVariables((variables) => ({
      ...variables,
      [name]: value,
    }))
  }

  return [variables, setVariable] as const
}
