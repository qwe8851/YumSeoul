import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';
import reportWebVitals from './reportWebVitals';
import { authService } from './utils/firebaseAuth';

import './index.css';
import './assets/styles/Fonts/Fonts.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();