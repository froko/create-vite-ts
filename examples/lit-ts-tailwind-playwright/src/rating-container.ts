import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import './satisfaction-star';
import { TwLitElement } from './tailwind';

@customElement('rating-container')
export class RatingContainer extends TwLitElement {
  @state() private stars: { position: number; checked: boolean }[] = [];

  @property({ type: String, attribute: 'product-id' }) productId = '';
  @property({ type: Number }) rating = 0;
  @property({ type: Boolean }) clickable = false;

  willUpdate(changedProperties: Map<string, object>) {
    if (changedProperties.has('rating')) {
      this.stars = [1, 2, 3, 4, 5].map((position) => ({ position, checked: position <= this.rating }));
    }
  }

  render() {
    return html`
      <div class="mx-auto mt-4 flex max-w-xs justify-around">
        ${this.stars.map(
          (star) =>
            html`<satisfaction-star
              product-id="${this.productId}"
              position="${star.position}"
              ?checked="${star.checked}"
              ?clickable="${this.clickable}"
              @star-click="${this.handleStarClick}"
            ></satisfaction-star>`
        )}
      </div>
    `;
  }

  private handleStarClick(e: CustomEvent) {
    const { rating } = e.detail;
    this.rating = rating;
    const options = {
      detail: { productId: this.productId, rating },
      bubbles: true,
      composed: true
    };
    this.dispatchEvent(new CustomEvent('product-rating-change', options));
  }
}
