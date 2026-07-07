import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function TodoList() {
  let [todos , setTodos]= useState([{id: uuidv4(), task: "Sample Task"}])
  let [newTodo , setNewTodos] = useState("");


  let addNewTask = ()=>{
    // console.log("addNewTask called", newTodo);
    setTodos([...todos, {id: uuidv4(), task: newTodo}]);
    setNewTodos(" ");
   
  }

  let updateTodoValue =(event)=>{
    setNewTodos(event.target.value);
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
        <li key={todo.id}>{todo.task}</li> 
      ))}
     </ul>
    </div>
  );
}
     