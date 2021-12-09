import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Fader from 'react-fader';
// import Switch from 'react-router-transition-switch';
// import Header from '../../components/Header/Header';
import routesConfig from '../../routes/routesConfig';

const App = () => (
  <>
    <Router>
      <div>
        {/* <Header /> */}
        <Switch>
          {routesConfig.map((route, index) => {
            const { id } = index;
            return (
              <Route
                key={id}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
