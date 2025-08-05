import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";
import type { todoInterface } from "../08-useReducer/interfaces";

const init = () => {
  return JSON.parse(localStorage.getItem('todos') ?? '[]');
}

export const useTodos = () => {
  const [ todos, dispatchTodoAction ] = useReducer( todoReducer, [], init );

  const todosCount = todos.length;
  const pendingTodosCount =  todos.filter(todo => !todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  
  }, [todos])
  

  const handleTodoAction = (todo: todoInterface, actionType: string) => {
    const action = {
      type: actionType,
      payload: todo
    }

    dispatchTodoAction(action)
  }

  return {
    todos,
    todosCount,
    pendingTodosCount,

    handleTodoAction
  }
}
