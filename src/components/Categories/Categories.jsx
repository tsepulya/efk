import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Categories.module.css';

const Categories = ({ categories }) => (
  <div className={styles.main__container}>
    {categories.map(({
      category, words, images, path,
    }) => (
      <Link to={path} key={category} className={styles.card__link}>
        <div className={styles.card__category}>
          <img src={images[0]} alt={words[0]} className={styles.category__img} />
          <p className={styles.category__name}>{category}</p>
        </div>
      </Link>
    ))}
  </div>
);

Categories.propTypes = {
  categories: PropTypes.instanceOf(Array).isRequired,
};

export default Categories;
