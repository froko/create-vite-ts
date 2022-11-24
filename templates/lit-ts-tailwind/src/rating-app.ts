import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { allProducts, Product } from './product.model';
import { TwLitElement } from './tailwind';

import './product-satisfaction';
import './overall-satisfaction';

@customElement('rating-app')
export class RatingApp extends TwLitElement {
  @state() private overallRating = 0;

  @property({ type: Array }) products = allProducts;

  willUpdate(changedProperties: Map<string, object>) {
    if (changedProperties.has('products')) {
      this.overallRating = this.getAverageRating();
    }
  }

  render() {
    return html`
      <h1 class="mt-4 text-center text-3xl font-semibold text-indigo-900 lg:mt-12 lg:text-5xl">
        ${this.products.map((p) => p.title).join(' - ')}
      </h1>
      <div data-testid="products" class="m-4 grid grid-flow-row gap-4 lg:grid-flow-col">
        ${this.products.map(
          (p) =>
            html`<product-satisfaction
              id="${p.id}"
              .product="${p}"
              @product-rating-change="${this.handleProductRatingChange}"
            ></product-satisfaction>`
        )}
        <overall-satisfaction overall-rating="${this.overallRating}"></overall-satisfaction>
      </div>
    `;
  }

  private handleProductRatingChange(e: CustomEvent) {
    const { productId, rating } = e.detail;
    const index = this.products.findIndex((p) => p.id === productId);
    this.products[index].rating = rating;
    this.overallRating = this.getAverageRating();
  }

  private getAverageRating() {
    return Math.floor(this.products.reduce(this.totalRating, 0) / this.products.length);
  }

  private totalRating(total: number, product: Product) {
    return total + product.rating;
  }
}
