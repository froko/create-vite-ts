import { OverallSatisfaction } from './overall-satisfaction';
import { ProductSatisfaction } from './product-satisfaction';
import { Product } from './product.model';

export class RatingApp {
  constructor(private readonly products: Product[]) {}

  get asHtmlElement() {
    const element = document.createElement('div');
    element.id = 'products';
    element.classList.add('m-4', 'grid', 'grid-flow-row', 'gap-4', 'lg:mt-8', 'lg:grid-flow-col');

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
