import { adoptStyles, LitElement, unsafeCSS } from 'lit';

import style from './tailwind.css';

export class TwLitElement extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    if (this.shadowRoot) {
      adoptStyles(this.shadowRoot, [unsafeCSS(style)]);
    }
  }
}
