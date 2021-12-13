import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../context/ModeProvider';
import CardWords from '../../components/CardWords/CardWords';
import PlayButton from '../../components/PlayButton/PlayButton';
import categories from '../../constants/categories';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const location = useLocation();
  const isMode = useMode();
  const [btn, setBtn] = useState(false);

  if (isMode) {
    useEffect(() => {
      switch (isMode.mode) {
        case MODE_PLAY:
          setBtn(true);
          break;
        case MODE_TRAIN:
          setBtn(false);
          break;
        default:
          setBtn(false);
      }
    }, [isMode]);
  }
  const cardCategory = categories.find((elem) => elem.path === location.pathname);
  return (
    <>
      <h1 className={styles.container__category_name}>{cardCategory.category}</h1>
      <CardWords card={cardCategory} />
      {btn && <PlayButton category={cardCategory} />}
    </>
  );
};

export default CategoryPage;
