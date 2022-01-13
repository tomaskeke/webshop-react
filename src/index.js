import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasketProvider from './Context/BasketContext';
import UserProvider from './Context/UserContext';


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BasketProvider>
        <App />
      </BasketProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
