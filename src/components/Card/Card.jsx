/* eslint-disable no-lonely-if */
// eslint-disable-next-line object-curly-newline
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../context/ModeProvider';
import Arrows from './Arrows';
import playAudio from '../../service/playAudio';
import store from '../../store/store';
import {
  addArrayOfWords, addCorrectAnswer, addWrongAnswer, addStar,
} from '../../store/actions/index';
import { changeData, changeWrongData } from '../../service/changeStatistics';
import correct from '../../assets/common/audio/correct.mp3';
import error from '../../assets/common/audio/error.mp3';
import success from '../../assets/common/audio/success.mp3';
import failure from '../../assets/common/audio/failure.mp3';
// import starWin from '../../assets/common/img/star-win.svg';
// import star from '../../assets/common/img/star.svg';
import styles from './Card.module.css';

function Card({
  word,
  translation,
  image,
  sound,
}) {
  const ref = useRef();
  const isMode = useMode();
  const dispatch = useDispatch();
  const [onHover, setOnHover] = useState(false);
  const [side, setSide] = useState('front');
  const [classPlay, setClassPlay] = useState(null);
  const [classDisabled, setClassDisabled] = useState(null);

  if (isMode) {
    useEffect(() => {
      switch (isMode.mode) {
        case MODE_PLAY:
          setClassPlay(styles.card__play);
          break;
        case MODE_TRAIN:
          setClassPlay(null);
          break;
        default:
          setClassPlay(null);
      }
    }, [isMode, classDisabled]);
  }

  const flipCard = () => {
    if (classPlay !== styles.card__play) {
      ref.current.toggle();
      setSide('back');
      setOnHover(true);
    }
  };

  const flipCardToFront = () => {
    if (side === 'back') {
      ref.current.toggle();
      setOnHover(false);
      setSide('front');
    }
  };

  const playGame = () => {
    if (sound === store.getState().playReducer.arrayOfWords[0]) {
      playAudio(correct);
      dispatch(addStar('starWin'));
      dispatch(addCorrectAnswer());
      changeData(word, 'correct');
      setClassDisabled(styles.card__disabled);
      const playArray = store.getState().playReducer.arrayOfWords.slice(1);
      dispatch(addArrayOfWords(playArray));
      setTimeout(() => playAudio(store.getState().playReducer.arrayOfWords[0]), 1500);
    } else {
      playAudio(error);
      dispatch(addStar('star'));
      dispatch(addWrongAnswer());
      changeWrongData(store.getState().playReducer.arrayOfWords[0], 'wrong');
    }
  };

  const checkTheArray = () => {
    if (store.getState().playReducer.arrayOfWords.length > 1) {
      playGame();
    } else {
      if (sound === store.getState().playReducer.arrayOfWords[0]) {
        playAudio(correct);
        dispatch(addCorrectAnswer());
        changeData(word, 'correct');
        if (store.getState().playReducer.wrong) {
          setTimeout(() => playAudio(failure), 1000);
        } else {
          setTimeout(() => playAudio(success), 1000);
        }
      } else {
        playAudio(error);
        dispatch(addWrongAnswer());
        changeWrongData(store.getState().playReducer.arrayOfWords[0], 'wrong');
      }
    }
  };

  const makeSound = () => {
    if (classPlay !== styles.card__play) {
      playAudio(sound);
      changeData(word, 'clicks');
    } else if (classDisabled !== styles.card__disabled) {
      checkTheArray();
    }
  };

  return (
    <Flippy
      flipOnHover={onHover} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      // className={cn(styles.card, classPlay)}
      className={cn(styles.card, classPlay, classDisabled)}
    >
      <FrontSide
        className={styles.card__front}
        onMouseOut={flipCardToFront}
        onClick={() => makeSound()}
      >
        <img src={image} alt={word} className={styles.card__img} />
        <div className={styles.card__footer}>
          <span className={styles.card__word}>{word}</span>
          <button type="button" onClick={flipCard}>
            <Arrows />
          </button>
        </div>
      </FrontSide>
      <BackSide className={styles.card__back}>
        <img src={image} alt={word} className={styles.card__img} />
        <div className={styles.card__footer}>
          <span className={styles.card__word}>{translation}</span>
        </div>
      </BackSide>
    </Flippy>
  );
}

Card.propTypes = {
  word: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  sound: PropTypes.string.isRequired,
};

export default Card;
