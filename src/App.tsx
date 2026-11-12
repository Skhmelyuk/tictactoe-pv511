import { useState, useEffect, type CSSProperties } from "react";
import { Board } from "./components/Board";
import { Button } from "./components/Button";
import { Turn } from "./components/Turn";
import type { BoardState, Player } from "./types";
import { checkWinner } from "./utils";

const gameContainerStyle: CSSProperties = {
  textAlign: "center",
};

const titleStyle: CSSProperties = {
  color: "#2c3e50",
  marginBottom: "20px",
  fontSize: "2.5rem",
  textTransform: "uppercase",
  letterSpacing: "2px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
  background: "linear-gradient(45deg, #2c3e50, #3498db)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  paddingBottom: "10px",
};

const timerStyle: CSSProperties = {
  marginBottom: "14px",
  fontSize: "1.1rem",
  fontWeight: 600,
  color: "#475569",
};

const timerBadgeStyle: CSSProperties = {
  fontFamily: "monospace",
  fontSize: "1.2rem",
  color: "#0f172a",
  backgroundColor: "#e2e8f0",
  padding: "3px 10px",
  borderRadius: "6px",
  marginLeft: "6px",
};

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
    <div style={gameContainerStyle}>
      <h1 style={titleStyle}>Гра хрестики-нулики</h1>

      {/* Таймер партії */}
      <div style={timerStyle}>
        ⏱️ Час партії: <span style={timerBadgeStyle}>{formatTime(seconds)}</span>
      </div>

      {/* Динамічний статус ходу / перемоги */}
      <Turn
        winner={winner}
        isDraw={isDraw}
        currentPlayer={currentPlayer}
      />

      {/* Ігрове поле з передачею підсвітки переможця */}
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
