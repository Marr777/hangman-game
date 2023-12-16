import LetterButton from '../components/letter-button/letter-button';
import { letters } from '../mocks/mocks';
import { useState, useEffect } from 'react';

export default function MainPage () {
  const word = 'КОШКА';
  const [currentLetters, changeCurrentLetter] = useState<string[]>([]);
  const handleButtonClick = (letter : string) => changeCurrentLetter([
    ...currentLetters,
    letter,
  ]);
  useEffect(() => {
    console.log(currentLetters);
  }, [currentLetters]);
  return (
    <div>
      {[...word].map((letter, index) => <span key={index}>{currentLetters.includes(letter) ? letter : '_'}</span>)}
      {
        // eslint-disable-next-line react/no-array-index-key
        letters.map((el, index) => <LetterButton letter={el} key={index} onClick={handleButtonClick}/>)
      }
    </div>
  );
}
