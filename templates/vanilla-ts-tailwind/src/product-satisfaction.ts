import { Product as ProductModel } from './product.model';
import { RatingContainer } from './rating-container';

export class ProductSatisfaction {
  constructor(private readonly product: ProductModel) {}

  get asHtmlElement() {
    const titleElement = document.createElement('a');
    titleElement.href = this.product.url;
    titleElement.innerText = this.product.title;
    titleElement.classList.add('mb-4', 'text-center', 'text-3xl', 'font-medium', 'text-indigo-900');

    const descriptionElement = document.createElement('span');
    descriptionElement.innerText = this.product.description;
    descriptionElement.classList.add('text-center');

    const ratingContainerElement = new RatingContainer(this.product.id, this.product.rating, true).asHtmlElement;

    const productContainer = document.createElement('div');
    productContainer.id = this.product.id;
    productContainer.classList.add('h-full', 'flex', 'flex-col', 'rounded-xl', 'p-8', 'shadow-2xl');
    productContainer.appendChild(titleElement);
    productContainer.appendChild(descriptionElement);
    productContainer.appendChild(ratingContainerElement);

    return productContainer;
  }
}
