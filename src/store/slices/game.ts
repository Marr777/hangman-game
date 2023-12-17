import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { getRandomWord } from '../../pages/main/util';
import { WordsData } from '../../types/mocks.type';

type GameState = {
  currentCategory: string[];
  currentCategoryName: string;
  currentWord: string;
}

const initialState: GameState = {
  currentCategory: [],
  currentCategoryName: '',
  currentWord: '',
};

export const gameSlice = createSlice({
  name: NameSpace.Game,
  initialState,
  reducers: {
    changeCategory(state, action: PayloadAction<WordsData>) {
      state.currentCategory = action.payload.words;
      state.currentCategoryName = action.payload.category;
      state.currentWord = getRandomWord(action.payload.words);
    },
    changeCurrentWord(state) {
      state.currentWord = getRandomWord(state.currentCategory);
    }
  },
});

export const { changeCategory, changeCurrentWord } = gameSlice.actions;
