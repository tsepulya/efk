import React from 'react';
import { useLocation } from 'react-router';
import CardWords from '../../components/CardWords/CardWords';
// import Categories from '../../components/Categories/Categories';
import categories from '../../constants/categories';
// import styles from './HomePage.module.css';

const CategoryPage = () => {
  const location = useLocation();
  const cardCategory = categories.find((elem) => elem.path === location.pathname);
  return (
    <>
      <h1>{location.pathname}</h1>
      <h2>{cardCategory.category}</h2>
      <CardWords card={cardCategory} />
    </>
  );
};

export default CategoryPage;
