import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './PlayButton.module.css';
import repeat from '../../assets/common/img/repeat.svg';
// import startPlay from '../../service/startPlay';
import playAudio from '../../service/playAudio';
import { addArrayOfWords, returnToInitialState } from '../../store/actions';
import store from '../../store/store';

const START = 'Start game';

const RepeatBtn = () => (
  <img src={repeat} alt="repeat" className={styles.btn__repeat_img} />
);

const PlayButton = ({ category }) => {
  const [innerBtn, setInnerBtn] = useState(START);
  const dispatch = useDispatch();

  const startPlay = () => {
    dispatch(returnToInitialState());
    const playArray = category.sound.sort(() => Math.random() - 0.5);
    dispatch(addArrayOfWords(playArray));
    // dispatch(addActiveSound(playArray[0]));
    playAudio(store.getState().playReducer.arrayOfWords[0]);
    // console.log(store.getState().playReducer.activeSound);
  };

  const changeBtn = () => {
    if (innerBtn === START) {
      startPlay(category);
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

PlayButton.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default PlayButton;
