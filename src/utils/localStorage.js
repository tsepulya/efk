import categories from '../constants/categories';

export const LOCALSRORAGE_LENGTH = 64;

export function addInLocalStorage() {
  if (localStorage.length !== LOCALSRORAGE_LENGTH) {
    categories.forEach((obj) => {
      obj.words.forEach((elem, index) => {
        localStorage.setItem(
          elem,
          JSON.stringify({
            word: elem,
            translation: obj.translation[index],
            category: obj.category,
            clicks: 0,
            correct: 0,
            wrong: 0,
            errors: 0,
          }),
        );
      });
    });
  }
}

export function takeWordsFromLocalStorage() {
  let words = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const key = localStorage.key(i);
    if (key !== 'loglevel:webpack-dev-server') {
      const wordString = localStorage.getItem(key);
      const wordObj = JSON.parse(wordString);
      words.push(wordObj);
    }
  }
  words = words.sort((a, b) => (a.word < b.word ? -1 : 1));
  return words;
}
