import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './rating-container';
import { TwLitElement } from './tailwind';

@customElement('overall-satisfaction')
export class OverallSatisfaction extends TwLitElement {
  @property({ type: Number, attribute: 'overall-rating' }) overallRating = 0;

  render() {
    return html`
      <section
        data-testid="overall-satisfaction"
        class="flex flex-col rounded-lg bg-indigo-900 p-4 drop-shadow-lg lg:p-8"
      >
        <h2 class="mb-4 text-center text-2xl font-medium text-indigo-50 lg:text-[1.8rem]">Overall Satisfaction</h2>
        <span class="grow lg:h-6"></span>
        <rating-container product-id="overall-satisfaction" rating="${this.overallRating}"></rating-container>
      </section>
    `;
  }
}
