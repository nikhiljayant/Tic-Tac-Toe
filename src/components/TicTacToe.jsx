import React, { useState } from "react";
// CSS
import "../App.css";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <div className="game">
      <div className="status">
        Player X Turn
        <button className="reset-button">Reset Game</button>
      </div>

      <div className="board">
        {board.map((_, index) => (
          <button className="cell" key={index}>
            X
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
