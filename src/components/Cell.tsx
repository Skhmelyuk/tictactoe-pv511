import type { CellValue } from "../types"

interface CellProps {
  cell: CellValue;
  cellClick: () => void;
}

export function Cell({cell, cellClick}: CellProps) {
  return (
    <div className="cell" onClick={cellClick}>{cell}</div>
  )
}