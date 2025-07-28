import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import axios from "axios";
export default function TodoList() {
  const url =  "http://localhost:3005/todos" ;

  const addTodo = async (text, completed) => {
    console.log(text, completed)
  }

  return (
    <div className="w-9/10 flex flex-col">
      <TodoForm addTodo ={addTodo} />
      <TodoItem />
    </div>
  )
}
