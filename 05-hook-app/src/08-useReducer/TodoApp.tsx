
import { TodoList } from "./components/TodoList";
import { TodoAdd } from "./components/TodoAdd";
import { useTodos } from "../hooks/useTodos";



export const TodoApp = () => {
  const {todos, todosCount, pendingTodosCount, handleTodoAction} = useTodos();
  
  return (
    <>
      <h1>TodoApp: {todosCount}, <small>Pendientes: {pendingTodosCount}</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onActionTodo={handleTodoAction} />
          
        </div>

        <div className="col-5">
          <h4>Add todo</h4>
          <hr />
          <TodoAdd onNewTodo={handleTodoAction} />
         
        </div>
      </div>

    
    </>
  )
}
