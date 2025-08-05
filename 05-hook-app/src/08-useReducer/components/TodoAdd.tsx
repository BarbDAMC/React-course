import { useState } from "react";
import { ACTION_TYPES, type todoInterface } from "../interfaces";

interface todoAddInterface {
  onNewTodo: (todo: todoInterface, actionType: string) => void;
}

export const TodoAdd = ({onNewTodo}: todoAddInterface) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime() * 4,
      description: inputValue,
      done: false
    }

    onNewTodo(newTodo, ACTION_TYPES.ADD_TODO);
    setInputValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        value={inputValue}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}
