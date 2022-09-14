import { allProducts } from './product.model';
import { RatingApp } from './rating-app';
import './style.css';

let ratingApp = new RatingApp(allProducts);

const appElement = document.querySelector('#app');
appElement?.appendChild(ratingApp.asHtmlElement);

const handleRatingClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('action')) {
    const product = target.getAttribute('product');
    const rating = target.getAttribute('rating');

    if (product && rating && appElement) {
      ratingApp = ratingApp.update(product, +rating);
      appElement.innerHTML = '';
      appElement.appendChild(ratingApp.asHtmlElement);
    }
  }
};

document.body.addEventListener('click', handleRatingClick);
