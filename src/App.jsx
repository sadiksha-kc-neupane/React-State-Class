import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import LikeButton from "./likeButton";
import LudoBoard from "./LudoBoard";
import TodoList from "./Todolist";

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
