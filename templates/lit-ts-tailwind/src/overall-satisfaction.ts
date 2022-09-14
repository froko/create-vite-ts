import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './rating-container';
import { TwLitElement } from './tailwind';

@customElement('overall-satisfaction')
export class OverallSatisfaction extends TwLitElement {
  @property({ type: Number, attribute: 'overall-rating' }) overallRating = 0;

  render() {
    return html`
      <div id="overall-satisfaction" class="flex h-full flex-col rounded-lg bg-indigo-900 p-8 shadow-2xl">
        <h2 class="mb-4 text-center text-3xl font-medium text-indigo-50">Overall Satisfaction</h2>
        <span class="grow"></span>
        <rating-container product-id="overall-satisfaction" rating="${this.overallRating}"></rating-container>
      </div>
    `;
  }
}
