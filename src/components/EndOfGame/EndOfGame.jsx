/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import store from '../../store/store';
import success from '../../assets/common/img/success.jpg';
import failure from '../../assets/common/img/failure.jpg';
import styles from './EndOfGame.module.css';

const EndOfGame = () => {
  const errors = store.getState().playReducer.wrong;

  return (
    <div className={styles.main__container}>
      <h2 className={styles.end__text}>{errors ? `You have ${errors} mistakes` : 'You are the winner!!!'}</h2>
      <img src={errors ? failure : success} alt="success" />
    </div>
  );
};

export default EndOfGame;
