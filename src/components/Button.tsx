import styles from "./Button.module.css";

interface ButtonProps {
  onResetGame: () => void;
}

export function Button({ onResetGame }: ButtonProps) {
  return (
    <button className={styles.reset} onClick={onResetGame}>
      Скинути гру
    </button>
  );
}
