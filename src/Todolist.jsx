
import { useState } from "react";

export default function TodoList() {
  let [todos , setTodos]= useState(["sample Task"])
  let [newTodo , setNewTodos]
  return (
    <div>
     <input placeholder="add a task"></input>
     <br></br>
     <br></br>
     <button>Add a task</button>
     <br></br>
     <br></br>
     <hr></hr>
     <h4>Task Todo</h4>
     <ul>
      {todos.map((todo)=>{
        return<li>{todo}</li>
      })}
     </ul>
    </div>
  );
}
