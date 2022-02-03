import React from 'react';
import { useLocation } from 'react-router';
import styles from './NotFound.module.css';

const NotFound = () => {
  const location = useLocation();
  return (
    <p className={styles.text}>
      No match for
      <br />
      <span className={styles.path}>{location.pathname}</span>
    </p>
  );
};

export default NotFound;
