import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { id: uuidv4(), task: "Sample Task", isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  // let addNewTask = ()=>{
  //   const task = newTodo.trim();

  //   if (!task) return;

  //   setTodos((prevTodos)=>
  //     return ([...prevTodos, { id: uuidv4(), task={newTodo} }]
  //   ));
  //   setNewTodo("");
  // }

  let addNewTask = () => {
    const task = newTodo.trim();

    if (!task) return;

    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          task: task,
        },
      ];
    });

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let toUpperCase = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }),
    );
  };

  // let UpperCaseOne = (id)=>{
  //  setTodos( (prevTodos)=>
  //  prevTodos.map((todo)=>{
  //     if (todo.id== id){
  //     return {
  //       ...todo,
  //       task: todo.task.toUpperCase(),
  //     };
  //   }else{
  //     return todo;
  //   }
  // })
  // );
  // }

  let markDone = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  return (
    <div>
      <input
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <br></br>
      <br></br>
      <button onClick={addNewTask}>Add a task</button>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            
          >
            <span style={{
              textDecoration: todo.isDone ? "line-through" : "none",
            }}>{todo.task}</span>
            &nbsp; &nbsp; &nbsp;
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              DELETE
            </button>
            &nbsp; &nbsp;
            {/* <button onClick={()=>{UpperCaseOne(todo.id)}}>UpperCaseOne</button> */}
            &nbsp; &nbsp;
            <button
              onClick={() => {
                markDone(todo.id);
              }}
            >
              Done Task
            </button>
            &nbsp; &nbsp;
           
          </li>
        ))}
      </ul>
       <button onClick={toUpperCase}>To Uppercase</button>
    </div>
  );
}
