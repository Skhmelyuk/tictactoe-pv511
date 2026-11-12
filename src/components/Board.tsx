import type { BoardState } from "../types";
import { Cell } from "./Cell";
import styles from "./Board.module.css";

interface BoardProps {
  board: BoardState;
  cellClick: (index: number) => void;
  winningLine: number[] | null;
}

export function Board({ board, cellClick, winningLine }: BoardProps) {
  return (
    <div className={styles.board}>
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
