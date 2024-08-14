import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      {[0, 1, 2].map((rowIndex) => (
        <div key={rowIndex} className="board-row">
          {[0, 1, 2].map((colIndex) => (
            <Square 
            key={`${rowIndex}${colIndex}`}
            value= {squares[rowIndex * 3 + colIndex]}
            handleClick={() => handleClick(rowIndex * 3 + colIndex)} 
            />
          ))}
        </div>
      ))}
    </div>
      )}
