interface ButtonProps {
  onResetGame: () => void;
}

export function Button({ onResetGame }: ButtonProps) {
  return (
    <button
      onClick={onResetGame}
      className="mt-5 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:translate-y-0 -translate-y-0.5 text-white font-semibold rounded-md shadow transition-all duration-150 cursor-pointer"
    >
      Скинути гру
    </button>
  );
}
