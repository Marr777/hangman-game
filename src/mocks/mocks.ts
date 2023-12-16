import { Alphabet, Data } from '../types/mocks.type';

export const letters: Alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

export const words: Data[] = [
  {
    category: 'food' ,
    words: ['суп','пюре','котлета']
  },
  {
    category: 'animals' ,
    words: ['кошка','баран','жираф']
  },
  {
    category: 'vehicle' ,
    words: ['машина','вертолет','самокат']
  }
];
