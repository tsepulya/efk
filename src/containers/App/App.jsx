import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import uuid from 'react-uuid';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import routesConfig from '../../routes/routesConfig';
import styles from './App.module.css';

const App = () => (
  <>
    <Router>
      <div className={styles.app}>
        <Header />
        <Switch>
          {routesConfig.map((route) => (
            <Route
              key={uuid()}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  </>
);

export default App;
