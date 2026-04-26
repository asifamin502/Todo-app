/* eslint-disable */
import { useEffect, useState } from "react";
import type { todostype, todotype } from "./types";
import Todos from "./Todos";
import Newtodos from "./Newtodos";
import "./home.css";

  /*  */

const Hometodo = () => {
  const [todos, setTodos] = useState<todostype>(() => {
    const todostore = localStorage.getItem("todos");
    return todostore ? JSON.parse(todostore) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handledeletehome = (id: number) => {
    const deletetodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletetodos);
  };

  const handleaddhometodo = (hometodo: todotype) => {
    const updatetodo = { ...hometodo, id: Date.now(), status: false };
    setTodos([...todos, updatetodo]);
  };

const updatestatus=(id:number, value:boolean)=>{
 const updatetodostatus=todos.map(todo=>
  todo.id===id ? {...todo, status:value}: todo
)
setTodos(updatetodostatus)
}


  return (
    <div>
      <h1 className="todoheading">Todo App</h1>
      <Newtodos handleaddhometodo={handleaddhometodo} />
      <Todos
        updatestatus={updatestatus}
        todos={todos}
        handledeletehome={handledeletehome}
      />
    </div>
  );
};

export default Hometodo;
