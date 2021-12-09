import React from 'react';
import { useLocation } from 'react-router';
import CardWords from '../../components/CardWords/CardWords';
import categories from '../../constants/categories';
import styles from './CategoryPage.module.css';

const CategoryPage = () => {
  const location = useLocation();
  const cardCategory = categories.find((elem) => elem.path === location.pathname);
  return (
    <>
      <h1 className={styles.container__category_name}>{cardCategory.category}</h1>
      <CardWords card={cardCategory} />
    </>
  );
};

export default CategoryPage;
