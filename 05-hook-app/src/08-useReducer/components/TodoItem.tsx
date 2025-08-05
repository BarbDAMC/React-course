import { ACTION_TYPES, type todoInterface } from "../interfaces"

interface todoItemInterface {
  todo: todoInterface,
  onActionTodo: (todo: todoInterface, actionType: string) => void,
}

export const TodoItem = ({todo, onActionTodo}: todoItemInterface) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span 
        className={`align-self-center ${todo.done ? 'text-decoration-line-through' : ''}`}
        onClick={() => onActionTodo(todo, ACTION_TYPES.TOGGLE_TODO)}
      >
        {todo.description}
      </span>
      <button 
        className="btn btn-danger"
        onClick={() => onActionTodo(todo, ACTION_TYPES.REMOVE_TODO)}
      >
        Borrar
      </button>
    </li>
  )
}
