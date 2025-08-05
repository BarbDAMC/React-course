import type { actionInterface, todoInterface } from "./interfaces";



const initialState = [
  {
    id: 1,
    description: 'Recolectar la piedra del alma',
    done: false
  }
];

const todoReducer = (state: todoInterface[] = initialState, action?: actionInterface) => {

  if (action!.type === '[TODO] add todo') {
    return [...state, action!.payload];
  }

  return state;
}

let todos = todoReducer();

const newTodo = {
  id: 2,
  description: 'Recolectar la piedra del poder',
  done: false
}

const addTodoAction = {
  type: '[TODO] add todo', // es la descripción de la acción
  payload: newTodo // el paylod es la carga de la acción
}

todos = todoReducer(todos, addTodoAction);
console.log({state: todos})