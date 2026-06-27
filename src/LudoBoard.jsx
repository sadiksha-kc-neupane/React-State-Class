import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, Red: 0, yellow: 0, green: 0 });

  let updateBlue = () => {
    setMoves((preMoves) => {
      return { ...preMoves, blue: preMoves.blue + 1 };
    });
  };

  let updateYellow = () => {
    setMoves((preMoves) => {
      return { ...preMoves, yellow: preMoves.yellow + 1 };
    });
  };

  let updateRed = () => {
    setMoves((preMoves) => {
      return { ...preMoves, Red: preMoves.Red + 1 };
    });
  };

  let updateGreen = () => {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });
  };

  return (
    <div>
      <h3>Game Begins</h3>
      <div className="Board">
        <p>Blue Moves={moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          +1
        </button>
        <p>Red Moves={moves.Red}</p>
        <button style={{ backgroundColor: "Red" }} onClick={updateRed}>
          +1
        </button>
        <p>Yellow Moves ={moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={updateYellow}>
          +1
        </button>
        <p>Green Moves={moves.green}</p>
        <button style={{ backgroundColor: "Green" }} onClick={updateGreen}>
          +1
        </button>
      </div>
    </div>
  );
}
