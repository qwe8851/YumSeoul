import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import { authService } from './utils/firebaseAuth';
import store from './store/store';

import './index.css';
import './assets/styles/Fonts/Fonts.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authService={authService} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();