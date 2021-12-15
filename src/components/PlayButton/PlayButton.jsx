import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import repeat from '../../assets/common/img/repeat.svg';
import playAudio from '../../service/playAudio';
import { addArrayLength, addArrayOfWords, returnToInitialState } from '../../store/actions';
import store from '../../store/store';
import { START } from '../../constants/constants';
import styles from './PlayButton.module.css';

const RepeatBtn = () => (
  <img src={repeat} alt="repeat" className={styles.btn__repeat_img} />
);

const PlayButton = ({ category }) => {
  const [innerBtn, setInnerBtn] = useState(START);
  const dispatch = useDispatch();

  const startPlay = () => {
    dispatch(returnToInitialState());
    const soundArray = category.sound.slice(0);
    dispatch(addArrayLength(category.words.length));
    const playArray = soundArray.sort(() => Math.random() - 0.5);
    dispatch(addArrayOfWords(playArray));
    playAudio(store.getState().playReducer.arrayOfWords[0]);
  };

  const changeBtn = () => {
    if (innerBtn === START) {
      startPlay(category);
      setInnerBtn(<RepeatBtn />);
    } else {
      playAudio(store.getState().playReducer.arrayOfWords[0]);
    }
  };

  return (
    <div className={styles.btn__container}>
      <button
        type="button"
        className={innerBtn === START ? styles.btn__play_start : styles.btn__play_reset}
        onClick={() => changeBtn()}
      >
        {innerBtn}
      </button>
    </div>
  );
};

PlayButton.propTypes = {
  category: PropTypes.instanceOf(Object).isRequired,
};

export default PlayButton;
