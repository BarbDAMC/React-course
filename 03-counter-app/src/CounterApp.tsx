import { useState } from 'react';
import './styles.css';

interface CounterAppProps {
  value: number
}

export const CounterApp = ({ value } : CounterAppProps) => {
  const [ counter, setCounter ] = useState(value);

  const handleReset = () => setCounter(value);
  const handleAdd = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={handleAdd}> +1</button>
      <button onClick={handleSubtract}> -1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}
