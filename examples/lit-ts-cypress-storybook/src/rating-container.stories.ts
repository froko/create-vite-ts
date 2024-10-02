import './rating-container';

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

interface Args {
  productId: string;
  rating: number;
  clickable: boolean;
  productRatingChange: (event: CustomEvent) => void;
}

const meta: Meta = {
  title: 'Components/Rating Container',
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false
  },
  argTypes: {
    productRatingChange: {
      action: 'product-rating-change'
    }
  },
  render: (args) =>
    html`<rating-container
      product-id=${args.productId}
      rating=${args.rating}
      ?clickable=${args.clickable}
      @product-rating-change=${args.productRatingChange}
    ></rating-container>`
};

export default meta;
type Story = StoryObj<typeof meta & Args>;

export const Default: Story = {};

export const Disappointed: Story = {
  ...Default,
  args: {
    rating: 1
  }
};

export const VerySatisfied: Story = {
  ...Default,
  args: {
    rating: 5
  }
};

export const Clickable: Story = {
  ...Default,
  args: {
    clickable: true
  }
};
