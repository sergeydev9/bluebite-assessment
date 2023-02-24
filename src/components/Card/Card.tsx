import React, { ReactNode } from "react";
import style from './card.module.css'

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className={style.card}>{children}</div>
  )
}
