import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Product } from './product.model';
import './rating-container';

@customElement('product-satisfaction')
export class ProductSatisfaction extends LitElement {
  static styles = css`
    .product-satisfaction {
      padding: 0.5rem;
      border-radius: 0.5rem;
      text-align: center;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      display: flex;
      flex-direction: column;
    }

    a {
      font-size: 1.5rem;
      display: block;
      color: var(--indigo900);
      font-weight: bold;
      text-decoration: none;
    }

    .product-satisfaction span {
      flex-grow: 1;
    }

    @media screen and (min-width: 1024px) {
      .product-satisfaction {
        padding: 2rem;
        height: 8rem;
      }

      a {
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }
    }
  `;

  @property({ type: Object }) product: Product = null as unknown as Product;

  render() {
    return html`
      <div id="${this.product.id}" class="product-satisfaction">
        <a href="${this.product.url}">${this.product.title}</a>
        <span>${this.product.description}</span>
        <rating-container product-id="${this.product.id}" rating="${this.product.rating}" clickable></rating-container>
      </div>
    `;
  }
}
