import styled from "styled-components";
import type { BoardState } from "../types";
import { Cell } from "./Cell";

interface BoardProps {
  board: BoardState;
  cellClick: (index: number) => void;
  winningLine: number[] | null;
}

const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export function Board({ board, cellClick, winningLine }: BoardProps) {
  return (
    <BoardGrid>
      {board.map((cell, index) => (
        <Cell
          key={index}
          cell={cell}
          cellClick={() => cellClick(index)}
          isWinner={winningLine?.includes(index) ?? false}
        />
      ))}
    </BoardGrid>
  );
}
