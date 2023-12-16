type LetterButtonProps = {
  letter: string;
  onClick: (letter: string) => void;
}

export default function LetterButton ({letter, onClick} : LetterButtonProps) {
  const handleButtonClick = () => {
    onClick(letter);
  };

  return (
    <button onClick={handleButtonClick} id={letter}>{letter}</button>
  );
}
