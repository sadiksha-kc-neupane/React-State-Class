import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Counter from "./Counter";
import LikeButton from "./likeButton";

function App() {
  return (
    <div>
      <h3>States in React</h3>
      <LikeButton />
      <Counter />
    </div>
  );
}

export default App;
