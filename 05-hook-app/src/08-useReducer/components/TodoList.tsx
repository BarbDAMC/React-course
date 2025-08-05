import type { todoInterface } from "../interfaces"
import { TodoItem } from "./TodoItem"

interface todoListInterface {
  todos: todoInterface[],
  onActionTodo: (todo: todoInterface, actionType: string) => void,
}

export const TodoList = ({todos, onActionTodo}: todoListInterface) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo: todoInterface) => (
          <TodoItem key={todo.id} todo={todo} onActionTodo={onActionTodo} />
        ))
      }
            
    </ul>
  )
}
