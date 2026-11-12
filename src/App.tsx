import { useState, useEffect } from "react";
import { Board } from "./components/Board";
import { Button } from "./components/Button";
import { Turn } from "./components/Turn";
import type { BoardState, Player } from "./types";
import { checkWinner } from "./utils";

function App() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
  const [seconds, setSeconds] = useState<number>(0);

  // Похідний стан (Derived State)
  const winResult = checkWinner(board);
  const winner = winResult ? winResult.winner : null;
  const winningLine = winResult ? winResult.combination : null;
  const isDraw = !winner && board.every((cell) => cell !== null);

  // Ефект таймера гри з Cleanup-функцією
  useEffect(() => {
    // Якщо гра завершилась — не запускаємо інтервал
    if (winner || isDraw) return;

    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Очищення таймера при зміні стану або закритті
    return () => clearInterval(intervalId);
  }, [winner, isDraw]);

  // Хід гравця
  const handleCellClick = (index: number): void => {
    if (board[index] || winner || isDraw) return;

    const newBoard = [...board]; // Імутабельна копія
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  // Скидання гри
  const resetGame = (): void => {
    setBoard(Array(9).fill(null));
    setSeconds(0); // Скидаємо таймер
    if (winner) {
      setCurrentPlayer(winner === "X" ? "O" : "X");
    }
  };

  // Форматування секунд у вигляд MM:SS
  const formatTime = (totalSeconds: number): string => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold uppercase tracking-wider mb-5 pb-2.5 bg-gradient-to-r from-slate-700 to-sky-500 bg-clip-text text-transparent drop-shadow-sm">
        Гра хрестики-нулики
      </h1>

      {/* Таймер партії */}
      <div className="mb-3.5 text-lg font-semibold text-slate-600">
        ⏱️ Час партії:{" "}
        <span className="font-mono text-xl text-slate-900 bg-slate-200 px-2.5 py-0.5 rounded-md ml-1.5 shadow-inner">
          {formatTime(seconds)}
        </span>
      </div>

      {/* Динамічний статус ходу / перемоги */}
      <Turn
        winner={winner}
        isDraw={isDraw}
        currentPlayer={currentPlayer}
      />

      {/* Ігрове поле з підсвіткою комбінації */}
      <Board
        board={board}
        cellClick={handleCellClick}
        winningLine={winningLine}
      />

      {/* Кнопка перезапуску */}
      <Button onResetGame={resetGame} />
    </div>
  );
}

export default App;
