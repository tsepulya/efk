import HomePage from '../containers/HomePage/HomePage';
import CategoryPage from '../containers/CategoryPage/CategoryPage';
import Statistics from '../containers/Statistics/Statistics';

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
  {
    path: '/adjective',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/animal-a',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/animal-b',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/clothes',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/emotions',
    exact: true,
    component: CategoryPage,
  },
  {
    path: '/statistics',
    exact: true,
    component: Statistics,
  },
];

export default routesConfig;
