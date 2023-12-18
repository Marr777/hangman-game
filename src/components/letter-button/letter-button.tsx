import cn from 'classnames';
import styles from './button-style.module.scss';

type LetterButtonProps = {
  letter: string;
  onClick: (letter: string) => void;
  disabled: boolean;
  isCorrect?: null | boolean;
  isOver?: boolean;
}

export default function LetterButton ({letter, onClick, disabled, isCorrect, isOver} : LetterButtonProps) {
  const handleButtonClick = () => {
    onClick(letter);
  };

  const btnClass = cn(styles.button, {
    [styles.buttonCorrect]: isCorrect,
    [styles.buttonOver]: isOver,
  });

  return (
    <button onClick={handleButtonClick} id={letter} disabled={disabled} className={btnClass}>{letter}</button>
  );
}
