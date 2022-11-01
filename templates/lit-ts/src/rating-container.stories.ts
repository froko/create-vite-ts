import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

import './rating-container';

export default {
  title: 'Components/Rating Container',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    productRatingChange: { action: 'product-rating-change' }
  },
  render: (args) =>
    html`<rating-container
      product-id=${args.productId}
      rating=${args.rating}
      ?clickable=${args.clickable}
      @product-rating-change=${args.productRatingChange}
    ></rating-container>`
} as Meta;

export const Default: StoryObj = {
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: false
  }
};

export const Disappointed: StoryObj = {
  args: {
    productId: 'storybook',
    rating: 1,
    clickable: false
  }
};

export const VerySatisfied: StoryObj = {
  args: {
    productId: 'storybook',
    rating: 5,
    clickable: false
  }
};

export const Clickable: StoryObj = {
  args: {
    productId: 'storybook',
    rating: 3,
    clickable: true
  }
};
