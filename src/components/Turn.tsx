import type { CellValue, Player } from "../types";

interface TurnProps {
  winner: CellValue;
  isDraw: boolean;
  currentPlayer: Player;
}

export function Turn({ winner, isDraw, currentPlayer }: TurnProps) {
  // 1. Якщо є переможець
  if (winner) {
    return (
      <div className="turn">
        Гравець{" "}
        <span className={winner === "X" ? "x-mark" : "o-mark"}>
          {winner}
        </span>{" "}
        переміг! 🏆
      </div>
    );
  }

  // 2. Якщо нічия
  if (isDraw) {
    return <div className="turn">🤝 Нічия! Спробуйте ще раз.</div>;
  }

  // 3. Якщо гра триває
  return (
    <div className="turn">
      Хід гравця:{" "}
      <span className={currentPlayer === "X" ? "x-mark" : "o-mark"}>
        {currentPlayer}
      </span>
    </div>
  );
}
