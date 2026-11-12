import styled, { keyframes, css } from "styled-components";
import type { CellValue } from "../types";

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
  isWinner: boolean;
}

const winPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
`;

interface StyledCellProps {
  $isWinner: boolean;
  $mark: CellValue;
}

const StyledCell = styled.div<StyledCellProps>`
  background: ${({ $isWinner }) =>
    $isWinner ? "linear-gradient(45deg, #2ecc71, #27ae60)" : "white"};
  color: ${({ $isWinner, $mark }) =>
    $isWinner
      ? "white !important"
      : $mark === "X"
      ? "#e74c3c"
      : $mark === "O"
      ? "#3498db"
      : "inherit"};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  aspect-ratio: 1;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  border: ${({ $isWinner }) =>
    $isWinner ? "2px solid #27ae60" : "none"};
  text-shadow: ${({ $isWinner, $mark }) =>
    $isWinner
      ? "1px 1px 2px rgba(0, 0, 0, 0.2)"
      : $mark === "X"
      ? "2px 2px 4px rgba(231, 76, 60, 0.2)"
      : $mark === "O"
      ? "2px 2px 4px rgba(52, 152, 219, 0.2)"
      : "none"};

  &:hover {
    background: ${({ $isWinner }) =>
      $isWinner ? "linear-gradient(45deg, #27ae60, #2ecc71)" : "#f8f9fa"};
    transform: scale(1.05);
  }

  ${({ $isWinner }) =>
    $isWinner &&
    css`
      animation: ${winPulse} 1.5s ease-in-out infinite;
      transform: scale(1.05);
    `}
`;

export function Cell({ cell, cellClick, isWinner }: CellProps) {
  return (
    <StyledCell $isWinner={isWinner} $mark={cell} onClick={cellClick}>
      {cell}
    </StyledCell>
  );
}
