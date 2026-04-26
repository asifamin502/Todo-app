/* eslint-disable */
import React, { useState } from 'react'
import type { todotype } from './types'
import './todo.css'

type Todotype={
    todo:todotype;
    handledeletehome: (id: number) => void;
updatestatus: (id: number, value: boolean) => void
}
const Todo = ({todo, handledeletehome,updatestatus}: Todotype) => {

  const handledelete=(id:number)=>{
alert(`Are you sure you want to delete ${todo.title}?`)
    handledeletehome(id)
  }
 
  const time=new Date();
  const date= time.getDate();
  const month= time.getMonth()+1;
  const year= time.getFullYear();
  const currentdate=`${date}/${month}/${year}`

    const {id, title, description, status}= todo
  /*   const [iscompleted, setIscompleted]= useState<boolean>(false)
     */
 

  return (
    <div className="todo">
        <h3 className="todo-title">Todo: {title}</h3>
        <p className='date'>{currentdate}</p>
        <p className="todo-description">{description}</p>
      <label>
        <input className="todo-radio" type="radio" name={`${id}`} checked={status===true} onChange={()=>{updatestatus(id, true)}}/> Completed
  
      </label>

      <label>
        <input className="todo-radio" type="radio" name={`${id}`} checked={status===false} onChange={()=>{updatestatus(id, false)}}/> Pending
      </label>
{/* {status ? <h5 className="todo-status">Completed</h5> : <h5 className="todo-status">Pending</h5>} */}
<h5>{status? "Completed": "Pending"}</h5>
   <button className="todo-delete" onClick={()=>handledelete(id)}>Delete</button>
    </div>
  )
}

export default Todo