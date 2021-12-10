import React from 'react';
import ReactDOM from 'react-dom';
import { ModeProvider } from './context/ModeProvider';
import App from './containers/App/App';

import './styles/index.css';

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <ModeProvider>
    <App />
  </ModeProvider>,
  document.getElementById('root'),
);
