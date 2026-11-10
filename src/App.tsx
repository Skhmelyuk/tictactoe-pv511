import { Board } from "./components/Board"
import { Button } from "./components/Button"
import { Turn } from "./components/Turn"
import { useState } from "react"
import type { BoardState, Player } from "./types"
import { checkWinner } from "./utils"

function App() {

  const [board, setBoard] = useState<BoardState>(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState<Player>("X")

  const winResult = checkWinner(board) // null, { winner: "X", combination: [0, 1, 2] }
  const winner = winResult ? winResult.winner : null
  const winningLine = winResult ? winResult.combination : null
  const isDraw = !winner && board.every((cell) => cell !== null)


  const resetGame = () => {
    setBoard(Array(9).fill(null))
    if (winner) {
      setCurrentPlayer(winner === "X" ? "O" : "X")
    }
  }

  const handleCellClick = (index: number): void => {
    // Перевірка, чи гра закінчена або клітинка вже зайнята
    if (board[index] || winner || isDraw) return;
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };


  return (
    <div className="game">
      <h1 className="title">Гра христики-нулики </h1>
      <Turn />
      <Board board={board} cellClick={handleCellClick} />
      <Button onResetGame={resetGame} />
    </div>
  )
}

export default App
