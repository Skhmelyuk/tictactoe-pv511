// Тип для гравця (може бути лише 'X' або 'O')
export type Player = "X" | "O";

// Тип для значення клітинки (гравець або порожня клітинка null)
export type CellValue = Player | null;

// Тип для стану всього ігрового поля (масив із 9 клітинок)
export type BoardState = CellValue[]; // [ "O", "X", null ]

// Інтерфейс для результату перевірки переможця
export interface WinResult {
  winner: Player; // "X", "O"
  combination: number[]; // [ 0, 1, 1 ]
}