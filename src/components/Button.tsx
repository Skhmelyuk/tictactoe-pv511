import styled from "styled-components";

interface ButtonProps {
  onResetGame: () => void;
}

const StyledButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover {
    background-color: #0056b3;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export function Button({ onResetGame }: ButtonProps) {
  return <StyledButton onClick={onResetGame}>Скинути гру</StyledButton>;
}
