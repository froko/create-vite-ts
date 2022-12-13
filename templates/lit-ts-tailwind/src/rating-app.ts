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
      <h1 class="my-4 text-center text-3xl font-semibold text-indigo-900 lg:my-12 lg:text-5xl">
        ${this.products.map((p) => p.title).join(' - ')}
      </h1>
      <main
        data-testid="products"
        class="mx-auto mt-4 grid max-w-6xl grid-flow-row gap-4 p-4 lg:grid-flow-col lg:grid-cols-3"
      >
        ${this.products.map(
          (p) =>
            html`<product-satisfaction
              .product="${p}"
              @product-rating-change="${this.handleProductRatingChange}"
            ></product-satisfaction>`
        )}
        <overall-satisfaction overall-rating="${this.overallRating}"></overall-satisfaction>
      </main>
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
