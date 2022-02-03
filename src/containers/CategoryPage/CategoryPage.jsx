import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../context/ModeProvider';
import CardWords from '../../components/CardWords/CardWords';
import PlayButton from '../../components/PlayButton/PlayButton';
import categories from '../../constants/categories';
import store from '../../store/store';
import EndOfGame from '../../components/EndOfGame/EndOfGame';
import styles from './CategoryPage.module.css';
import StarRating from '../../components/StarRating/StarRating';

const CategoryPage = ({ repeat }) => {
  const location = useLocation();
  const isMode = useMode();
  const [btn, setBtn] = useState(false);
  const [fin, setFin] = useState(false);
  const [classHidden, setClassHidden] = useState(null);

  const changeInCorrect = () => {
    const correctAns = store.getState().playReducer.correct;
    const length = store.getState().playReducer.arrayLength;
    if (correctAns === length && length !== 0) {
      setFin(true);
      setClassHidden(styles.hidden);
    }
  };

  store.subscribe(changeInCorrect);

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
  let cardCategory;
  if (repeat === '') {
    cardCategory = categories.find((elem) => elem.path === location.pathname);
  } else {
    cardCategory = repeat;
  }
  return (
    <>
      {fin && <EndOfGame />}
      <div className={cn(styles.main, classHidden)}>
        <h1 className={styles.container__category_name}>{cardCategory.category}</h1>
        <StarRating />
        <CardWords card={cardCategory} />
        {btn && <PlayButton category={cardCategory} />}
      </div>
    </>
  );
};

CategoryPage.propTypes = {
  repeat: PropTypes.oneOfType([
    PropTypes.instanceOf(Object),
    PropTypes.string,
  ]),
};

CategoryPage.defaultProps = {
  repeat: '',
};

export default CategoryPage;
