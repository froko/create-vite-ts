import { html } from 'lit';
import './rating-container';

export default {
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
  render: (args) => html`<rating-container
    product-id=${args.productId}
    rating=${args.rating}
    ?clickable=${args.clickable}
    @product-rating-change=${args.productRatingChange}
  ></rating-container>`
};

export const Default = {};

export const Disappointed = {
  ...Default,
  args: {
    rating: 1
  }
};

export const VerySatisfied = {
  ...Default,
  args: {
    rating: 5
  }
};

export const Clickable = {
  ...Default,
  args: {
    clickable: true
  }
};
