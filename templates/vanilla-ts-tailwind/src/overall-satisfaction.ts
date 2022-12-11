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
    titleElement.classList.add('mb-4', 'text-center', 'text-2xl', 'font-medium', 'text-indigo-50', 'lg:text-[1.8rem]');

    const flexGrowElement = document.createElement('span');
    flexGrowElement.classList.add('grow', 'lg:h-6');
    const ratingContainerElement = new RatingContainer('overall-satisfaction', this.overallRating, false).asHtmlElement;

    const overallContainer = document.createElement('section');
    overallContainer.setAttribute('data-testid', 'overall-satisfaction');
    overallContainer.classList.add(
      'flex',
      'flex-col',
      'rounded-lg',
      'bg-indigo-900',
      'p-4',
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
