import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../context/ModeProvider';
import CardWords from '../../components/CardWords/CardWords';
import PlayButton from '../../components/PlayButton/PlayButton';
import categories from '../../constants/categories';
import store from '../../store/store';
import EndOfGame from '../../components/EndOfGame/EndOfGame';
import styles from './CategoryPage.module.css';
import StarRating from '../../components/StarRating/StarRating';

const CategoryPage = () => {
  const location = useLocation();
  const isMode = useMode();
  const [btn, setBtn] = useState(false);
  const [fin, setFin] = useState(false);
  const [classHidden, setClassHidden] = useState(null);

  const changeInCorrect = () => {
    const correctAns = store.getState().playReducer.correct;
    if (correctAns === 8) {
      setFin(true);
      setClassHidden(styles.hidden);
    }
  };

  const unsubscribe = store.subscribe(changeInCorrect);
  // eslint-disable-next-line no-unused-expressions
  unsubscribe;

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
      {fin && <EndOfGame />}
      <div className={classHidden}>
        <h1 className={styles.container__category_name}>{cardCategory.category}</h1>
        <StarRating />
        <CardWords card={cardCategory} />
        {btn && <PlayButton category={cardCategory} />}
      </div>
    </>
  );
};

export default CategoryPage;
