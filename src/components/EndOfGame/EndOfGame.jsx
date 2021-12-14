/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../../store/store';
import success from '../../assets/common/img/success.jpg';
import failure from '../../assets/common/img/failure.jpg';
import styles from './EndOfGame.module.css';

const EndOfGame = () => {
  const errors = store.getState().playReducer.wrong;
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setRedirect(true);
    }, 3000);
  }, []);

  return (
    <div className={styles.main__container}>
      <h2 className={styles.end__text}>{errors ? `You have ${errors} mistakes` : 'You are the winner!!!'}</h2>
      <img src={errors ? failure : success} alt="success" />
      {redirect && <Redirect to="/" />}
    </div>
  );
};

export default EndOfGame;
