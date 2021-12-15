import React from 'react';
// import CardWords from '../../components/CardWords/CardWords';
import CategoryPage from '../CategoryPage/CategoryPage';
import styles from './Repeat.module.css';
import createCategoryOfDifficult from '../../service/createCategoryOfDifficult';

const Repeat = () => {
  const category = createCategoryOfDifficult();
  if (category.words.length) {
    return (
      <div className={styles.main__container}>
        <CategoryPage repeat={category} />
      </div>
    );
  }
  return (
    <p className={styles.statistics__difficult_p}>You don`t have difficult words</p>
  );
};

export default Repeat;
