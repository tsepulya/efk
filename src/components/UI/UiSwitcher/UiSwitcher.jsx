import React, { useState } from 'react';
import { useMode, MODE_PLAY, MODE_TRAIN } from '../../../context/ModeProvider';
import styles from './UiSwitcher.module.css';

const Switcher = () => {
  const [statusChecked, setStatusChecked] = useState(false);
  const isMode = useMode();

  const changeMode = () => {
    if (statusChecked) {
      setStatusChecked(false);
      isMode.change(MODE_TRAIN);
    } else {
      setStatusChecked(true);
      isMode.change(MODE_PLAY);
    }
  };

  return (
    <div className={styles.mode}>
      <label className={styles.checkbox_ya} htmlFor="mode">
        <input
          type="checkbox"
          className={styles.mode__checkbox}
          id="mode"
          checked={statusChecked}
          onChange={() => changeMode()}
        />
        <span className={styles.checkbox_ya_switch}>
          <span className={styles.checkbox_ya_feature} data-label-on="PLAY" data-label-off="TRAIN" />
        </span>
      </label>
    </div>
  );
};

export default Switcher;
