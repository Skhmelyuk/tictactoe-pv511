import type { BoardState, WinResult, Player } from "../types";
   
const WINNING_COMBINATIONS: number[][] = [
     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонталі
     [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикалі
     [0, 4, 8], [2, 4, 6]             // Діагоналі
];



 export const checkWinner = (currentBoard: BoardState): WinResult | null => {
     for (const combination of WINNING_COMBINATIONS) {
       const [a, b, c] = combination;
       if (
         currentBoard[a] &&
         currentBoard[a] === currentBoard[b] &&
         currentBoard[a] === currentBoard[c]
       ) {
         return {
           winner: currentBoard[a] as Player, // кастинг типу, оскільки ми перевірили, що там не null
           combination
         };
       }
     }
     return null;
   };