type GameOverProps = {
  isWon: boolean;
  onClick: () => void;
}

export default function GameOver({isWon, onClick} : GameOverProps) {
  const text = isWon ? 'Game won!' : 'Game over!';
  const handleButtonClick = () => onClick();

  return (
    <>
      <p>{text}</p>
      <button onClick={handleButtonClick}>Try another word</button>
    </>
  );
}
