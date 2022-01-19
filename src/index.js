import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasketProvider from './Context/BasketContext';
import UserProvider from './Context/UserContext';
import ProductProvider from './Context/ProductContext';
import BadgeProvider from './Context/BadgeContext';
ReactDOM.render(
  <React.StrictMode>
  <BadgeProvider>
    <UserProvider>
      <BasketProvider>
       <ProductProvider>
        <App />
        </ProductProvider>
      </BasketProvider>
    </UserProvider>
    </BadgeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
