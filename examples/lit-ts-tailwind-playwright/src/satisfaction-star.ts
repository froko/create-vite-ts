import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import 'fa-icons';
import { TwLitElement } from './tailwind';

@customElement('satisfaction-star')
export class SatisfactionStar extends TwLitElement {
  @state() private styling = '';
  @state() private pathPrefix = import.meta.env.PROD ? '' : 'node_modules';

  @property({ type: String, attribute: 'product-id' }) productId = '';
  @property({ type: Number }) position = 0;
  @property({ type: Boolean }) checked = false;
  @property({ type: Boolean }) clickable = false;

  willUpdate(changedProperties: Map<string, object>) {
    if (changedProperties.has('checked') || changedProperties.has('clickable')) {
      this.styling = 'fa fa-star';
      if (this.checked) {
        this.styling += ' text-orange-500';
      }

      if (this.clickable) {
        this.styling += ' cursor-pointer hover:text-orange-700';
      } else if (!this.checked) {
        this.styling += ' text-white';
      }
    }
  }

  render() {
    return html`
      <fa-icon
        data-testid="${this.productId}-${this.position}"
        class=${this.styling}
        path-prefix="${this.pathPrefix}"
        size="2rem"
        @click=${this.dispatchClick}
      ></fa-icon>
    `;
  }

  private dispatchClick() {
    if (!this.clickable) {
      return;
    }

    const options = {
      detail: { rating: this.position }
    };
    this.dispatchEvent(new CustomEvent('star-click', options));
  }
}
