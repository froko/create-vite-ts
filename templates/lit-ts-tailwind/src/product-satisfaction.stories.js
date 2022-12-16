import { html } from 'lit';
import './product-satisfaction';

export default {
  title: 'Components/Product Satisfaction',
  args: {
    product: {
      id: 'storybook',
      title: 'Storybook',
      url: 'https://storybook.js.org/',
      description: 'Build component driven UIs faster',
      rating: 3
    }
  },
  render: (args) => html`<product-satisfaction .product=${args.product}></product-satisfaction>`
};

export const Default = {};
