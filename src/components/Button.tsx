interface ButtonProps {
  onResetGame: () => void;
}

export function Button({ onResetGame}: ButtonProps) {
  return (
    <button className="reset" onClick={onResetGame}>Скинути гру</button>
  )
}