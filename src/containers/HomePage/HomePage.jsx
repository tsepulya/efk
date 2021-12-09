import React from 'react';
import Categories from '../../components/Categories/Categories';
import categories from '../../constants/categories';
// import CategoryPage from '../CategoryPage/CategoryPage';
// import styles from './HomePage.module.css';

const HomePage = () => (
  <>
    <Categories categories={categories} />
  </>
);

export default HomePage;
