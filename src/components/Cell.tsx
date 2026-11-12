import type { CellValue } from "../types";
import styles from "./Cell.module.css";

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
  isWinner: boolean;
}

export function Cell({ cell, cellClick, isWinner }: CellProps) {
  const cellClass = `
    ${styles.cell} 
    ${cell === "X" ? styles.xMark : cell === "O" ? styles.oMark : ""} 
    ${isWinner ? styles.winner : ""}
  `.trim();

  return (
    <div className={cellClass} onClick={cellClick}>
      {cell}
    </div>
  );
}
