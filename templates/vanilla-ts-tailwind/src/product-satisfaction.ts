import { Product as ProductModel } from './product.model';
import { RatingContainer } from './rating-container';

export class ProductSatisfaction {
  constructor(private readonly product: ProductModel) {}

  get asHtmlElement() {
    const titleElement = document.createElement('a');
    titleElement.href = this.product.url;
    titleElement.innerText = this.product.title;
    titleElement.classList.add('mb-4', 'text-center', 'text-2xl', 'font-medium', 'text-indigo-900', 'lg:text-[1.8rem]');

    const descriptionElement = document.createElement('span');
    descriptionElement.innerText = this.product.description;
    descriptionElement.classList.add('grow', 'text-center', 'lg:h-6');

    const ratingContainerElement = new RatingContainer(this.product.id, this.product.rating, true).asHtmlElement;

    const productContainer = document.createElement('section');
    productContainer.setAttribute('data-testid', this.product.id);
    productContainer.classList.add(
      'flex',
      'flex-col',
      'rounded-xl',
      'bg-indigo-100',
      'p-4',
      'drop-shadow-lg',
      'lg:p-8'
    );
    productContainer.appendChild(titleElement);
    productContainer.appendChild(descriptionElement);
    productContainer.appendChild(ratingContainerElement);

    return productContainer;
  }
}
