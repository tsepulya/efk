import categories from '../constants/categories';

export const changeData = (note, prop) => {
  const word = JSON.parse(localStorage.getItem(note));
  word[prop] += 1;
  localStorage.setItem(note, JSON.stringify(word));
};

export const changeWrongData = (note, prop) => {
  const category = categories.find((elem) => (
    elem.sound.find((audio) => audio === note)));
  const index = category.sound.findIndex((audio) => audio === note);
  const word = JSON.parse(localStorage.getItem(category.words[index]));
  word[prop] += 1;
  localStorage.setItem(category.words[index], JSON.stringify(word));
};
