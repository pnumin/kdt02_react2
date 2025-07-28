import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

import axios from "axios";
import { useState, useEffect } from "react";
export default function TodoList() {
  const url =  "http://localhost:3005/todos" ;
  const [ tdata , setTdata ] = useState([]) ;

  const getData = async () => {
    const { data } = await axios.get(url) ;
    setTdata(data) ;
  }

  const addTodo = async (text, completed) => {
    // console.log("Add", text, completed)
    await axios.post(url, {
      text : text,
      completed : completed
    }) ;

    getData();
  }

  const toggleTodo = async (id, completed) => {
    // console.log("modify", id, completed)
    const done = completed == "X" ? "O" : "X" ;
    await axios.patch(`${url}/${id}`, { 
      completed : done
    }) ;
    getData();
  }

  const deleteTodo = async (id) => {
    // console.log("delete", id)
    await axios.delete(`${url}/${id}`) ;
    getData();
  }
  useEffect(()=>{
    getData();
  }, []);

  return (
    <div className="w-9/10 flex flex-col">
      <TodoForm addTodo ={addTodo} />
      {tdata && tdata.map(item => <TodoItem key={item.id}
                                            item={item}
                                            onDelete={deleteTodo}
                                            onToggle={toggleTodo}
                                            />) }
    </div>
  )
}
