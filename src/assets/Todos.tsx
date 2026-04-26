/* eslint-disable */

import type { todostype } from "./types";
import Todo from "./Todo";
import "./todos.css";
 
type Todostype={
    todos: todostype;
    handledeletehome: (id: number) => void;
    updatestatus: (id: number, value: boolean) => void
}

const Todos = ({todos, handledeletehome, updatestatus}: Todostype) => {
   
  return <div className="todos">
    {todos.map((todo)=>{
        return <Todo key={todo.id} todo={todo} handledeletehome={handledeletehome} updatestatus={updatestatus} />
    })}
  </div>;
};

export default Todos;
