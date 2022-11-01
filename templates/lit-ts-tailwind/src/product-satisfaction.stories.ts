import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './product-satisfaction';

export default {
  title: 'Components/Product Satisfaction',
  parameters: {
    layout: 'centered'
  },
  render: (args) => html`<product-satisfaction .product=${args.product}></product-satisfaction>`
} as Meta;

export const Default: StoryObj = {
  args: {
    product: {
      id: 'storybook',
      title: 'Storybook',
      url: 'https://storybook.js.org/',
      description: 'Build component driven UIs faster',
      rating: 3
    }
  }
};
