/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import store from '../../store/store';
import success from '../../assets/common/img/success.jpg';
import failure from '../../assets/common/img/failure.jpg';
import styles from './EndOfGame.module.css';
// import HomePage from '../../containers/HomePage/HomePage';

// const New = () => (
//   <h2>try</h2>
// );

const EndOfGame = () => {
  const errors = store.getState().playReducer.wrong;
  const [redirect, setRedirect] = useState(false);
  // const redirect = () => <Redirect to="/" />;
  // const redirect = () => {
  //   setTimeout(() => <Redirect to="/" />, 2000);
  // };
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
