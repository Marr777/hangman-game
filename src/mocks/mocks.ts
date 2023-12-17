import { Alphabet, WordsData } from '../types/mocks.type';

export const letters: Alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

export const words: WordsData[] = [
  {
    category: 'Еда' ,
    words: ['суп','пюре','котлета']
  },
  {
    category: 'Животные' ,
    words: ['кошка','баран','жираф']
  },
  {
    category: 'Транспорт' ,
    words: ['машина','вертолет','самокат']
  }
];
