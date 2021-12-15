/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import uuid from 'react-uuid';
import PropTypes from 'prop-types';
import star from '../../assets/common/img/star.svg';
import starWin from '../../assets/common/img/star-win.svg';
import store from '../../store/store';
import styles from './StarRating.module.css';

const Star = ({ img }) => {
  const src = (img === 'star') ? star : starWin;
  return (
    <img src={src} alt="star" className={styles.play__rating_img} />
  );
};

Star.propTypes = {
  img: PropTypes.string.isRequired,
};

const StarRating = () => {
  const [stars, setStars] = useState([]);
  const addStar = () => {
    let isMounted = true;
    const starsStore = store.getState().playReducer.starRating;
    if (isMounted) {
      setStars(starsStore);
    }
    return () => { isMounted = false; };
  };

  store.subscribe(addStar);

  return (
    <div className={styles.play__rating}>
      {stars.map((elem) => (
        <Star
          img={elem}
          key={uuid()}
        />
      ))}
    </div>
  );
};

export default StarRating;
