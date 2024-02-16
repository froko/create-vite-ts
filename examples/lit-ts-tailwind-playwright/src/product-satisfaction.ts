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
      <section
        data-testid="${this.product.id}"
        class="flex flex-col rounded-xl bg-indigo-100 p-4 drop-shadow-lg lg:p-8"
      >
        <a href="${this.product.url}" class="mb-4 text-center text-2xl font-medium text-indigo-900 lg:text-[1.8rem]">
          ${this.product.title}
        </a>
        <span class="grow text-center lg:h-6">${this.product.description}</span>
        <rating-container product-id="${this.product.id}" rating="${this.product.rating}" clickable></rating-container>
      </section>
    `;
  }
}
