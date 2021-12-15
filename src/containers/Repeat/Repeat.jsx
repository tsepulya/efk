import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import CategoryPage from '../CategoryPage/CategoryPage';
import styles from './Repeat.module.css';
import createCategoryOfDifficult from '../../service/createCategoryOfDifficult';

const Repeat = () => {
  const [redirect, setRedirect] = useState(false);
  const category = createCategoryOfDifficult();

  useEffect(() => {
    if (!category.words.length) {
      setTimeout(() => {
        setRedirect(true);
      }, 3000);
    }
  }, []);

  if (category.words.length) {
    return (
      <div className={styles.main__container}>
        <CategoryPage repeat={category} />
      </div>
    );
  }
  return (
    <div>
      <p className={styles.statistics__difficult_p}>You don`t have difficult words</p>
      {redirect && <Redirect to="/statistics" />}
    </div>
  );
};

export default Repeat;
