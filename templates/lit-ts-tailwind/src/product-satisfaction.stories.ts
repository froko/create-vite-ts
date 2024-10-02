import './product-satisfaction';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
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

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
