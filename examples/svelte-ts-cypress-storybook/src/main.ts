import './style.css';

import { allProducts } from './ProductModel';
import RatingApp from './RatingApp.svelte';

const app = new RatingApp({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: document.getElementById('app')!,
  props: {
    products: allProducts
  }
});

export default app;
