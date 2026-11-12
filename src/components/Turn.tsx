import type { CSSProperties } from "react";
import type { CellValue, Player } from "../types";

interface TurnProps {
  winner: CellValue;
  isDraw: boolean;
  currentPlayer: Player;
}

const turnContainerStyle: CSSProperties = {
  marginBottom: "20px",
  fontSize: "1.4rem",
  color: "#34495e",
  padding: "10px 20px",
  backgroundColor: "#ffffff",
  borderRadius: "30px",
  boxShadow: "0 2px 15px rgba(0, 0, 0, 0.1)",
  display: "inline-block",
  fontWeight: 500,
  transition: "transform 0.3s ease",
};

const markStyle = (player: CellValue | Player): CSSProperties => ({
  color: player === "X" ? "#e74c3c" : "#007bff",
  fontWeight: 700,
  textShadow:
    player === "X"
      ? "1px 1px 2px rgba(231, 76, 60, 0.2)"
      : "1px 1px 2px rgba(0, 123, 255, 0.2)",
});

export function Turn({ winner, isDraw, currentPlayer }: TurnProps) {
  if (winner) {
    return (
      <div style={turnContainerStyle}>
        Гравець <span style={markStyle(winner)}>{winner}</span> переміг! 🏆
      </div>
    );
  }

  if (isDraw) {
    return <div style={turnContainerStyle}>🤝 Нічия! Спробуйте ще раз.</div>;
  }

  return (
    <div style={turnContainerStyle}>
      Хід гравця: <span style={markStyle(currentPlayer)}>{currentPlayer}</span>
    </div>
  );
}
