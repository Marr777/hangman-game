import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { NameSpace } from './const';
import { gameSlice } from './slices/game';

export const reducer = combineReducers({
  [NameSpace.Game]: gameSlice.reducer,
});

// регистрация thunk в конфигурации хранилища.
export const store = configureStore({
  reducer
});
