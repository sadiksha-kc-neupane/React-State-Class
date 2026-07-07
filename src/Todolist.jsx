import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function TodoList() {
  let [todos , setTodos]= useState([{id: uuidv4(), task: "Sample Task"}])                                 
  let [newTodo , setNewTodo] = useState("");


  let addNewTask = ()=>{
      setTodos((prevTodos)=>{[...prevTodos, {id: uuidv4(), task: newTodo}]});
  }

  let updateTodoValue =(event)=>{
    setNewTodo(event.target.value);
  }
  return(
    <div>
     <input  placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
     <br></br>
     <br></br>
     <button onClick={addNewTask}>Add a task</button>
     <br></br>
     <br></br>
     <hr></hr>
     <h4>Task Todo</h4>
     <ul>
      {todos.map((todo)=>(
        <li key={todo.id}>
          <span>{todo.task}</span>
          <br></br>
          <button>DELETE</button>
        </li>
      ))}
     </ul>
    </div>
  );
 }