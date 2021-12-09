import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import styles from './CardWords.module.css';

const CardWords = ({ card }) => {
  const {
    words,
    translation,
    images,
    sound,
  } = card;
  return (
    <div className={styles.main__container}>
      {words.map((elem, index) => (
        <Card
          key={elem}
          word={words[index]}
          translation={translation[index]}
          image={images[index]}
          sound={sound[index]}
        />
      ))}
    </div>
  );
};

CardWords.propTypes = {
  card: PropTypes.instanceOf(Object).isRequired,
};

export default CardWords;
