import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blues: 0, Red: 0, yellow: 0, green: 0 });

  return (
    <div>
      <h3>Game Begins</h3>
      <div className="Board">
        <p>Blue Moves= </p>
        <button style={{ backgroundColor: "blue" }}>+1</button>
        <p>Red Moves=</p>
        <button style={{ backgroundColor: "Red" }}>+1</button>
        <p>Yellow Moves =</p>
        <button style={{ backgroundColor: "yellow" }}>+1</button>
        <p>Green Moves=</p>
        <button style={{ backgroundColor: "Green" }}>+1</button>
      </div>
    </div>
  );
}
