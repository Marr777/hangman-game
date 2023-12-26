/* eslint-disable react/no-array-index-key */
import LetterButton from '../../components/letter-button/letter-button';
import GameOver from '../../components/game-over-component/game-over';
import { letters } from '../../mocks/mocks';
import { useState} from 'react';
import { MAX_ERRORS_COUNT } from './const';
import styles from './styles.module.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/redux-hooks';
import { gameSlice } from '../../store/slices/game';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../store/const';
import Hangman from '../../components/hangman/hangman';
import Transition from '../../util/transition';
import LivesCount from '../../components/lives-count/lives-count';


export default function MainPage () {
  const dispatch = useAppDispatch();
  const currentCategory = useAppSelector((store) => store.game.currentCategoryName);
  const word = useAppSelector((store) => store.game.currentWord).toUpperCase();
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
    dispatch(gameSlice.actions.changeCurrentWord());
  };

  return (
    <Transition>
      <div className='container'>
        <Link className={styles.link} to={AppRoute.Main}>&#8635; Назад к выбору категорий</Link>
        <div className={styles.gameContainer}>
          <p className={styles.categoryName}>Категория: <span>{currentCategory}</span></p>
          <Hangman step={errorsCount} />
          {/* <p className={styles.errorCount}>Количество ошибок: {errorsCount}</p> */}
          <LivesCount lives={errorsCount} />
        </div>
        {isGameOver && <GameOver isWon={isGameWon} onClick={handleResetButtonClick}/>}
        <div className={styles.wordContainer}>
          {[...word].map((letter, index) => <span key={index}>{currentLetters.includes(letter) ? letter : '_'}</span>)}
        </div>
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
                  isOver={isGameOver}
                />))
          }
        </div>
      </div>
    </Transition>
  );
}
