import type { CSSProperties } from "react";
import type { CellValue } from "../types";

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
  isWinner: boolean;
}

export function Cell({ cell, cellClick, isWinner }: CellProps) {
  const cellStyle: CSSProperties = {
    background: isWinner
      ? "linear-gradient(45deg, #2ecc71, #27ae60)"
      : "#ffffff",
    color: isWinner
      ? "#ffffff"
      : cell === "X"
      ? "#e74c3c"
      : cell === "O"
      ? "#3498db"
      : "inherit",
    borderRadius: "8px",
    boxShadow: isWinner
      ? "0 0 15px rgba(46, 204, 113, 0.6)"
      : "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: isWinner ? "2px solid #27ae60" : "1px solid #e2e8f0",
    aspectRatio: "1",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2.5rem",
    fontWeight: "bold",
    userSelect: "none",
    transition: "background 0.3s ease, transform 0.2s ease, color 0.2s ease",
    textShadow: isWinner
      ? "1px 1px 2px rgba(0, 0, 0, 0.2)"
      : cell === "X"
      ? "2px 2px 4px rgba(231, 76, 60, 0.2)"
      : cell === "O"
      ? "2px 2px 4px rgba(52, 152, 219, 0.2)"
      : "none",
  };

  return (
    <div style={cellStyle} onClick={cellClick}>
      {cell}
    </div>
  );
}
