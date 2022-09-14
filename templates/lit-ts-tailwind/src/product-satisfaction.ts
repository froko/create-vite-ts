import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { Product } from './product.model';
import './rating-container';
import { TwLitElement } from './tailwind';

@customElement('product-satisfaction')
export class ProductSatisfaction extends TwLitElement {
  @property({ type: Object }) product: Product = null as unknown as Product;

  render() {
    return html`
      <div id="${this.product.id}" class="flex h-full flex-col rounded-xl p-8 shadow-2xl">
        <a href="${this.product.url}" class="mb-4 text-center text-3xl font-medium text-indigo-900"
          >${this.product.title}</a
        >
        <span class="text-center">${this.product.description}</span>
        <rating-container product-id="${this.product.id}" rating="${this.product.rating}" clickable></rating-container>
      </div>
    `;
  }
}
