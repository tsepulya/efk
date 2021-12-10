/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import styles from './PlayButton.module.css';

const PlayButton = () => {
  return (
      <div>
    <button type="button" className={styles.btn__play_start}>
      Start game
    </button>
      </div>

  );
};

export default PlayButton;
