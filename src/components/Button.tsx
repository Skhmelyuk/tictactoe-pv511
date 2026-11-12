import type { CSSProperties } from "react";

interface ButtonProps {
  onResetGame: () => void;
}

const buttonStyle: CSSProperties = {
  marginTop: "20px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#ffffff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: 600,
  boxShadow: "0 2px 6px rgba(0, 123, 255, 0.3)",
  transition: "background-color 0.3s ease, transform 0.1s ease",
};

export function Button({ onResetGame }: ButtonProps) {
  return (
    <button style={buttonStyle} onClick={onResetGame}>
      Скинути гру
    </button>
  );
}
