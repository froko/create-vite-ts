import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Product } from './product.model';
import './rating-container';

@customElement('product-satisfaction')
export class ProductSatisfaction extends LitElement {
  static styles = css`
    .product-satisfaction {
      display: flex;
      flex-direction: column;
      box-shadow:
        0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 0.5rem;
      padding: 1rem;
      text-align: center;
    }

    .product-satisfaction a {
      display: block;
      color: var(--indigo900);
      font-weight: 500;
      font-size: 1.5rem;
      text-decoration: none;
      margin-bottom: 1rem;
    }

    .product-satisfaction span {
      flex: 1 1 auto;
    }

    @media screen and (min-width: 1024px) {
      .product-satisfaction {
        padding: 2rem;
      }

      .product-satisfaction a {
        font-size: 1.8rem;
      }

      .product-satisfaction span {
        height: 1.5rem;
      }
    }
  `;

  @property({ type: Object }) product: Product = null as unknown as Product;

  render() {
    return html`
      <section data-testid="${this.product.id}" class="product-satisfaction">
        <a href="${this.product.url}">${this.product.title}</a>
        <span>${this.product.description}</span>
        <rating-container product-id="${this.product.id}" rating="${this.product.rating}" clickable></rating-container>
      </section>
    `;
  }
}
