// eslint-disable-next-line object-curly-newline
import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import cn from 'classnames';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../context/ModeProvider';
import Arrows from './Arrows';
import playAudio from '../../service/playAudio';
import styles from './Card.module.css';

function Card({
  word,
  translation,
  image,
  sound,
}) {
  const ref = useRef();
  const isMode = useMode();
  const [onHover, setOnHover] = useState(false);
  const [side, setSide] = useState('front');
  const [classPlay, setClassPlay] = useState(null);

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
    }, [isMode]);
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

  const makeSound = () => {
    if (classPlay !== styles.card__play) {
      playAudio(sound);
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
      className={cn(styles.card, classPlay)}
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
