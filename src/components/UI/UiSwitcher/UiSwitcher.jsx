import React from 'react';
import styles from './UiSwitcher.module.css';

const Switcher = () => (
  <div className={styles.mode}>
    <label className={styles.checkbox_ya} htmlFor="mode">
      <input type="checkbox" className={styles.mode__checkbox} id="mode" />
      <span className={styles.checkbox_ya_switch}>
        <span className={styles.checkbox_ya_feature} data-label-on="PLAY" data-label-off="TRAIN" />
      </span>
    </label>
  </div>
);

export default Switcher;
