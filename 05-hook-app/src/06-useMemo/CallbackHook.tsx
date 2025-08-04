import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  // const increment = () => setCounter(counter+1);

  const incrementFather = useCallback(
    (incrementAmount: number) => {
      setCounter((value) => value + incrementAmount);
    },
    [],
  )
  

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />

    </>
  )
}
