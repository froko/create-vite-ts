import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import 'fa-icons';

@customElement('satisfaction-star')
export class SatisfactionStar extends LitElement {
  static styles = css`
    .checked {
      color: var(--orange500);
    }

    .action {
      cursor: pointer;
    }

    .action:hover {
      color: var(--orange700);
    }
  `;

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
        this.styling += ' checked';
      }

      if (this.clickable) {
        this.styling += ' action';
      }
    }
  }

  render() {
    return html`
      <fa-icon
        data-testid="${this.productId}-${this.position}"
        class="${this.styling}"
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
