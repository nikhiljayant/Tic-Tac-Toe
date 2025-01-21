import React from "react";
// CSS
import "../App.css";
// Hook
import useTicTacToe from "../hooks/useTicTacToe";

const TicTacToe = () => {
  const { board, handleClick, calculateWinner, resetGame, getStatusMessage } =
    useTicTacToe();

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => (
          <button
            className="cell"
            key={index}
            onClick={() => handleClick(index)}
            disabled={b !== null}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
