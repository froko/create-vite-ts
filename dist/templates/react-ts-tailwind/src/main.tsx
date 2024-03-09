import React from 'react';
import ReactDOM from 'react-dom/client';

import { allProducts } from './ProductModel';
import RatingApp from './RatingApp';

import './style.css';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RatingApp products={allProducts} />
  </React.StrictMode>
);
