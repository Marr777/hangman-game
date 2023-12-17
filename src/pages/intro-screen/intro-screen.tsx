import { words } from '../../mocks/mocks';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../store/const';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { gameSlice } from '../../store/slices/game';
import styles from './styles.module.css';

export default function IntroScreen () {
  const dispatch = useAppDispatch();
  // const handleLinkClick = (wordsData : string[]) => {
  //   dispatch(gameSlice.actions.changeCategory(wordsData));
  // };
  return (
    <ul className={styles.linkList}>
      {words.map((word) =>
        (
          <li key={word.category}>
            <Link className={styles.link} to={AppRoute.Game} onClick={() => dispatch(gameSlice.actions.changeCategory(word))}>{word.category}</Link>
          </li>
        )
      )}
    </ul>
  );
}
