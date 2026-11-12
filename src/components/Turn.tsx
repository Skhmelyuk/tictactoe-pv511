import type { CellValue, Player } from "../types";

interface TurnProps {
  winner: CellValue;
  isDraw: boolean;
  currentPlayer: Player;
}

export function Turn({ winner, isDraw, currentPlayer }: TurnProps) {
  const containerClass =
    "mb-5 text-xl text-slate-700 px-5 py-2.5 bg-white rounded-full shadow-md inline-block font-medium hover:-translate-y-0.5 transition-transform duration-200";

  if (winner) {
    return (
      <div className={containerClass}>
        Гравець{" "}
        <span
          className={
            winner === "X"
              ? "text-red-500 font-bold drop-shadow-[0_1px_2px_rgba(239,68,68,0.2)]"
              : "text-blue-500 font-bold drop-shadow-[0_1px_2px_rgba(59,130,246,0.2)]"
          }
        >
          {winner}
        </span>{" "}
        переміг! 🏆
      </div>
    );
  }

  if (isDraw) {
    return <div className={containerClass}>🤝 Нічия! Спробуйте ще раз.</div>;
  }

  return (
    <div className={containerClass}>
      Хід гравця:{" "}
      <span
        className={
          currentPlayer === "X"
            ? "text-red-500 font-bold drop-shadow-[0_1px_2px_rgba(239,68,68,0.2)]"
            : "text-blue-500 font-bold drop-shadow-[0_1px_2px_rgba(59,130,246,0.2)]"
        }
      >
        {currentPlayer}
      </span>
    </div>
  );
}
