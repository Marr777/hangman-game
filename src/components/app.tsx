import MainPage from '../pages/main/main';
import IntroScreen from '../pages/intro-screen/intro-screen';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../store/const';
import { words } from '../mocks/mocks';
import { useAppDispatch } from '../hooks/redux-hooks';
import { gameSlice } from '../store/slices/game';

export default function App () {
  const dispatch = useAppDispatch();
  dispatch(gameSlice.actions.changeCategory(words[0]));

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<IntroScreen />} index/>
        <Route path={AppRoute.Game} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
