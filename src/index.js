import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ModeProvider } from './context/ModeProvider';
import App from './containers/App/App';
import store from './store/store';
import { addInLocalStorage } from './utils/localStorage';

import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModeProvider>
        <App />
      </ModeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

addInLocalStorage();
