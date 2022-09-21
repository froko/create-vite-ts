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
    titleElement.classList.add('mb-4', 'text-center', 'text-2xl', 'font-medium', 'text-indigo-50', 'lg:text-3xl');

    const flexGrowElement = document.createElement('span');
    flexGrowElement.classList.add('grow');
    const ratingContainerElement = new RatingContainer('overall-satisfaction', this.overallRating, false).asHtmlElement;

    const overallContainer = document.createElement('div');
    overallContainer.id = 'overall-satisfaction';
    overallContainer.classList.add(
      'flex',
      'h-full',
      'flex-col',
      'rounded-lg',
      'bg-indigo-900',
      'p-2',
      'drop-shadow-lg',
      'lg:p-8'
    );
    overallContainer.appendChild(titleElement);
    overallContainer.appendChild(flexGrowElement);
    overallContainer.appendChild(ratingContainerElement);

    return overallContainer;
  }

  private totalRating(total: number, product: Product) {
    return total + product.rating;
  }
}
