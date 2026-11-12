import type { CellValue, Player } from "../types";
import styles from "./Turn.module.css";

interface TurnProps {
  winner: CellValue;
  isDraw: boolean;
  currentPlayer: Player;
}

export function Turn({ winner, isDraw, currentPlayer }: TurnProps) {
  if (winner) {
    return (
      <div className={styles.turn}>
        Гравець{" "}
        <span className={winner === "X" ? styles.xMark : styles.oMark}>
          {winner}
        </span>{" "}
        переміг! 🏆
      </div>
    );
  }

  if (isDraw) {
    return <div className={styles.turn}>🤝 Нічия! Спробуйте ще раз.</div>;
  }

  return (
    <div className={styles.turn}>
      Хід гравця:{" "}
      <span className={currentPlayer === "X" ? styles.xMark : styles.oMark}>
        {currentPlayer}
      </span>
    </div>
  );
}
