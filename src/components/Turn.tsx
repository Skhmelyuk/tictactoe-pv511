import styled from "styled-components";
import type { CellValue, Player } from "../types";

interface TurnProps {
  winner: CellValue;
  isDraw: boolean;
  currentPlayer: Player;
}

const TurnContainer = styled.div`
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #34495e;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  display: inline-block;
  font-weight: 500;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const PlayerMark = styled.span<{ $player: CellValue | Player }>`
  color: ${({ $player }) => ($player === "X" ? "#e74c3c" : "#007bff")};
  font-weight: 700;
  text-shadow: ${({ $player }) =>
    $player === "X"
      ? "1px 1px 2px rgba(231, 76, 60, 0.2)"
      : "1px 1px 2px rgba(0, 123, 255, 0.2)"};
`;

export function Turn({ winner, isDraw, currentPlayer }: TurnProps) {
  if (winner) {
    return (
      <TurnContainer>
        Гравець <PlayerMark $player={winner}>{winner}</PlayerMark> переміг! 🏆
      </TurnContainer>
    );
  }

  if (isDraw) {
    return <TurnContainer>🤝 Нічия! Спробуйте ще раз.</TurnContainer>;
  }

  return (
    <TurnContainer>
      Хід гравця: <PlayerMark $player={currentPlayer}>{currentPlayer}</PlayerMark>
    </TurnContainer>
  );
}
