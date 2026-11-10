import type { BoardState } from "../types";
import { Cell } from "./Cell";

interface BoardProps {
  board: BoardState
  cellClick: (index: number) => void;
}

export function Board({board, cellClick}: BoardProps) {
  return (
    <div className="board">
      {
        board.map((cell, index) => (
          <Cell key={index} cell={cell} cellClick={() => cellClick(index)} /> 
        ))
      }
    </div>
  )
}