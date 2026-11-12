import type { CellValue } from "../types";

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
  isWinner: boolean;
}

export function Cell({ cell, cellClick, isWinner }: CellProps) {
  // Формуємо рядок класів залежно від значення та перемоги
  const cellClass = `
    cell 
    ${cell === "X" ? "x-mark" : cell === "O" ? "o-mark" : ""} 
    ${isWinner ? "winner" : ""}
  `.trim();

  return (
    <div className={cellClass} onClick={cellClick}>
      {cell}
    </div>
  );
}
