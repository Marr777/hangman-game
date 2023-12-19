import MainPage from '../pages/main/main';
import IntroScreen from '../pages/intro-screen/intro-screen';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../store/const';
import Header from './header/header';

export default function App () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={AppRoute.Main} element={<IntroScreen />} index/>
        <Route path={AppRoute.Game} element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
