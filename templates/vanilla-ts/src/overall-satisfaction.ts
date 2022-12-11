import { Product } from './product.model';
import { RatingContainer } from './rating-container';

export class OverallSatisfaction {
  private readonly overallRating: number = 0;

  constructor(products: Product[]) {
    this.overallRating = Math.floor(products.reduce(this.totalRating, 0) / products.length);
  }

  get asHtmlElement() {
    const titleElement = document.createElement('h2');
    titleElement.innerText = 'Overall Satisfaction';

    const flexGrowElement = document.createElement('span');
    const ratingContainerElement = new RatingContainer('overall-satisfaction', this.overallRating, false).asHtmlElement;

    const overallContainer = document.createElement('section');
    overallContainer.setAttribute('data-testid', 'overall-satisfaction');
    overallContainer.classList.add('overall-satisfaction');
    overallContainer.appendChild(titleElement);
    overallContainer.appendChild(flexGrowElement);
    overallContainer.appendChild(ratingContainerElement);

    return overallContainer;
  }

  private totalRating(total: number, product: Product) {
    return total + product.rating;
  }
}
