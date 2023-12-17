import { useAppSelector } from '../../hooks/redux-hooks';

type GameOverProps = {
  isWon: boolean;
  onClick: () => void;
}

export default function GameOver({isWon, onClick} : GameOverProps) {
  const text = isWon ? 'Game won!' : 'Game over!';
  const currentWord = useAppSelector((store) => store.game.currentWord);
  const handleButtonClick = () => onClick();

  return (
    <>
      <p>{text}</p>
      {!isWon && <p>The word was {currentWord}</p>}
      <button onClick={handleButtonClick}>Try another word</button>
    </>
  );
}
