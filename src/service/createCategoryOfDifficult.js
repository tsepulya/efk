import { takeWordsFromLocalStorage } from '../utils/localStorage';
import categories from '../constants/categories';

const createCategoryOfDifficult = () => {
  const words = takeWordsFromLocalStorage();
  const wordsSorted = words.filter(
    (elem) => elem.wrong / (elem.correct + elem.wrong) > 0,
  );
  let wordsDifficult = [];
  const category = {
    category: 'repeat', words: [], translation: [], sound: [], images: [], path: '',
  };
  if (wordsSorted.length) {
    wordsDifficult = wordsSorted.sort((a, b) => (
      a.wrong / (a.correct + a.wrong) > b.wrong / (b.correct + b.wrong) ? -1 : 1));
    if (wordsDifficult.length > 8) {
      wordsDifficult = wordsDifficult.slice(0, 7);
    }
    wordsDifficult.forEach((elem) => {
      category.words.push(elem.word);
      category.translation.push(elem.translation);
      const categoryConst = categories.find((el) => (
        el.words.find((word) => word === elem.word)));
      const index = categoryConst.words.findIndex((word) => word === elem.word);
      category.sound.push(categoryConst.sound[index]);
      category.images.push(categoryConst.images[index]);
    });
  }
  return category;
};

export default createCategoryOfDifficult;
