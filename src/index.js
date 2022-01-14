import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import BasketProvider from './Context/BasketContext';
import UserProvider from './Context/UserContext';
import ProductProvider from './Context/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BasketProvider>
       <ProductProvider>
        <App />
        </ProductProvider>
      </BasketProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
