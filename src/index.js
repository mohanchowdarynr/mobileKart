import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductState from './Context/ProductState';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
  <ProductState>
      <App />
  </ProductState>
  </React.StrictMode>,
  document.getElementById('root')
);
