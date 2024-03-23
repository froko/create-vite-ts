import { Product as ProductModel } from './product.model';
import { RatingContainer } from './rating-container';

export class ProductSatisfaction {
  constructor(private readonly product: ProductModel) {}

  get asHtmlElement() {
    const titleElement = document.createElement('a');
    titleElement.href = this.product.url;
    titleElement.innerText = this.product.title;

    const descriptionElement = document.createElement('span');
    descriptionElement.innerText = this.product.description;

    const ratingContainerElement = new RatingContainer(this.product.id, this.product.rating, true).asHtmlElement;

    const productContainer = document.createElement('section');
    productContainer.setAttribute('data-testid', this.product.id);
    productContainer.classList.add('product-satisfaction');
    productContainer.appendChild(titleElement);
    productContainer.appendChild(descriptionElement);
    productContainer.appendChild(ratingContainerElement);

    return productContainer;
  }
}
