import { OverallSatisfaction } from './overall-satisfaction';
import { Product } from './product.model';
import { ProductSatisfaction } from './product-satisfaction';

export class RatingApp {
  constructor(private readonly products: Product[]) {}

  get asHtmlElement() {
    const element = document.createElement('main');
    element.setAttribute('data-testid', 'products');
    element.classList.add('responsive-container');

    this.products
      .map((p) => new ProductSatisfaction(p))
      .map((p) => p.asHtmlElement)
      .forEach((e) => element.appendChild(e));

    element.appendChild(new OverallSatisfaction(this.products).asHtmlElement);

    return element;
  }

  update(product: string, rating: number) {
    const index = this.products.findIndex((p) => p.id === product);
    this.products[index].rating = rating;
    return new RatingApp(this.products);
  }
}
