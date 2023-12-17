import MainPage from '../pages/main/main';
import IntroScreen from '../pages/intro-screen/intro-screen';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import { AppRoute } from '../store/const';

export default function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<IntroScreen />} index/>
        <Route path={AppRoute.Game} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
