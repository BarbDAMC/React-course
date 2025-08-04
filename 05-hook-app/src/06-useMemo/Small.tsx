import { memo } from "react";

interface SmallInterface {
  value: number;
}

export const Small = memo(({value} : SmallInterface) => {
  console.log("Me volvi a dibujar")

  return (
    <small>{ value }</small>
  )
})
