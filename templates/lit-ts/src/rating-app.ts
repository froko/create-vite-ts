import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { allProducts, Product } from './product.model';
import './product-satisfaction';
import './overall-satisfaction';

@customElement('rating-app')
export class RatingApp extends LitElement {
  static styles = css`
    h1 {
      margin-top: 1rem;
      color: var(--indigo900);
      font-size: 1.875rem;
      line-height: 2.25rem;
      font-weight: 600;
      text-align: center;
    }

    .responsive-container {
      display: grid;
      grid-auto-flow: row;
      row-gap: 1rem;
      margin-top: 1rem;
      margin-inline: auto;
      max-width: 72rem;
      padding: 1rem;
    }

    @media screen and (min-width: 1024px) {
      h1 {
        margin-top: 3rem;
        font-size: 3rem;
        line-height: 1;
      }

      .responsive-container {
        grid-auto-flow: column;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        column-gap: 1rem;
      }
    }
  `;

  @state() private overallRating = 0;

  @property({ type: Array }) products = allProducts;

  willUpdate(changedProperties: Map<string, object>) {
    if (changedProperties.has('products')) {
      this.overallRating = this.getAverageRating();
    }
  }

  render() {
    return html`
      <h1>${this.products.map((p) => p.title).join(' - ')}</h1>
      <div data-testid="products" class="responsive-container">
        ${this.products.map(
          (p) =>
            html`<product-satisfaction
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
