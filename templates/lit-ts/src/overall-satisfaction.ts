import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import './rating-container';

@customElement('overall-satisfaction')
export class OverallSatisfaction extends LitElement {
  static styles = css`
    .overall-satisfaction {
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      border-radius: 0.5rem;
      padding: 1rem;
      text-align: center;
      background-color: var(--indigo900);
      color: var(--indigo50);
    }

    .overall-satisfaction h2 {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 500;
      font-size: 1.5rem;
    }

    .overall-satisfaction span {
      flex: 1 1 auto;
    }

    @media screen and (min-width: 1024px) {
      .overall-satisfaction {
        padding: 2rem;
      }

      .overall-satisfaction h2 {
        font-size: 1.8rem;
      }

      .overall-satisfaction span {
        height: 1.5rem;
      }
    }
  `;

  @property({ type: Number, attribute: 'overall-rating' }) overallRating = 0;

  render() {
    return html`
      <section data-testid="overall-satisfaction" class="overall-satisfaction">
        <h2>Overall Satisfaction</h2>
        <span></span>
        <rating-container product-id="overall-satisfaction" rating="${this.overallRating}"></rating-container>
      </section>
    `;
  }
}
