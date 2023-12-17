/* eslint-disable react/no-array-index-key */
import LetterButton from '../../components/letter-button/letter-button';
import GameOver from '../../components/game-over-component/game-over';
import { letters } from '../../mocks/mocks';
import { useState, useEffect} from 'react';
import { MAX_ERRORS_COUNT } from './const';
import styles from './styles.module.css';

export default function MainPage () {
  const word = 'КОШКА';
  const [currentLetters, changeCurrentLetters] = useState<string[]>([]);
  const [correctLetters, changeCorrectLetters] = useState('');
  const [errorsCount, setErrorsCount] = useState(0);
  const isBtnCorrect = (letter : string) => word.includes(letter) && currentLetters.includes(letter);
  const isGameWon = [...word].every((letter) => [...correctLetters].includes(letter));
  const isGameFailed = errorsCount > MAX_ERRORS_COUNT;
  const isGameOver = isGameWon || isGameFailed;

  const handleLetterButtonClick = (letter : string) => {
    changeCurrentLetters([
      ...currentLetters,
      letter,
    ]);
    if (!word.includes(letter)) {
      setErrorsCount(errorsCount + 1);
    } else {
      changeCorrectLetters(correctLetters + letter);
    }
  };

  const handleResetButtonClick = () => {
    changeCurrentLetters([]);
    changeCorrectLetters('');
    setErrorsCount(0);
  };

  return (
    <div>
      {isGameOver && <GameOver isWon={isGameWon} onClick={handleResetButtonClick}/>}
      <p>Количество ошибок: {errorsCount}</p>
      {[...word].map((letter, index) => <span key={index}>{currentLetters.includes(letter) ? letter : '_'}</span>)}
      <div className={styles.btnContainer}>
        {
          letters.map((el, index) =>
            (
              <LetterButton
                letter={el}
                key={index}
                onClick={handleLetterButtonClick}
                disabled={currentLetters.includes(el) || isGameOver}
                isCorrect={isBtnCorrect(el)}
                isOver = {isGameOver}
              />))
        }
      </div>
    </div>
  );
}
