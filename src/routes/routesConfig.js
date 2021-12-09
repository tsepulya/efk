import HomePage from '../containers/HomePage/HomePage';
import CategoryPage from '../containers/CategoryPage/CategoryPage';

const routesConfig = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/action-a',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/action-b',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/transport',
    exact: true,
    component: CategoryPage,
  },
];

export default routesConfig;
