import React, { useState } from 'react';
import styles from './PlayButton.module.css';
import repeat from '../../assets/common/img/repeat.svg';

const START = 'Start game';

const RepeatBtn = () => (
  <img src={repeat} alt="repeat" className={styles.btn__repeat_img} />
);

const PlayButton = () => {
  const [innerBtn, setInnerBtn] = useState(START);

  const changeBtn = () => {
    if (innerBtn === START) {
      setInnerBtn(<RepeatBtn />);
    }
  };

  return (
    <button
      type="button"
      className={innerBtn === START ? styles.btn__play_start : styles.btn__play_reset}
      onClick={() => changeBtn()}
    >
      {innerBtn}
    </button>
  );
};

export default PlayButton;
