import React from 'react';
import Categories from '../../components/Categories/Categories';
import categories from '../../constants/categories';

const HomePage = () => (
  <>
    <Categories categories={categories} />
  </>
);

export default HomePage;
