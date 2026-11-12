import type { BoardState } from "../types";
import { Cell } from "./Cell";

interface BoardProps {
  board: BoardState;
  cellClick: (index: number) => void;
  winningLine: number[] | null;
}

export function Board({ board, cellClick, winningLine }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2.5 w-[300px] mx-auto">
      {board.map((cell, index) => (
        <Cell
          key={index}
          cell={cell}
          cellClick={() => cellClick(index)}
          isWinner={winningLine?.includes(index) ?? false}
        />
      ))}
    </div>
  );
}
