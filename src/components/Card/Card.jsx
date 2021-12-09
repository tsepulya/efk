import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Arrows from './Arrows';
import styles from './Card.module.css';
// import arrows from '../../assets/common/img/arrows.svg';

function Card({ word, translation, image }) {
  const ref = useRef();
  return (
    <Flippy
      flipOnHover={false} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      className={styles.card} /// these are optional style, it is not necessary
    >
      <FrontSide className={styles.card__front}>
        <img src={image} alt={word} className={styles.card__img} />
        <div className={styles.card__footer}>
          <span className={styles.card__word}>{word}</span>
          <button type="button" onClick={() => { ref.current.toggle(); }}>
            <Arrows />
          </button>
        </div>
      </FrontSide>
      <BackSide className={styles.card__back}>
        {translation}
      </BackSide>
    </Flippy>
  );
}

Card.propTypes = {
  word: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
