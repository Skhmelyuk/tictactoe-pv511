import type { CellValue } from "../types";

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
  isWinner: boolean;
}

export function Cell({ cell, cellClick, isWinner }: CellProps) {
  const cellClass = `
    aspect-square rounded-lg flex items-center justify-center text-4xl font-bold cursor-pointer transition-all duration-200 select-none
    ${
      isWinner
        ? "bg-gradient-to-tr from-emerald-600 to-green-500 text-white! border-2 border-emerald-600 scale-105 shadow-lg animate-win-pulse"
        : "bg-white shadow-sm hover:bg-slate-50 hover:scale-105"
    }
    ${
      !isWinner && cell === "X"
        ? "text-red-500 drop-shadow-[0_2px_4px_rgba(239,68,68,0.2)]"
        : !isWinner && cell === "O"
        ? "text-blue-500 drop-shadow-[0_2px_4px_rgba(59,130,246,0.2)]"
        : ""
    }
  `.trim();

  return (
    <div className={cellClass} onClick={cellClick}>
      {cell}
    </div>
  );
}
