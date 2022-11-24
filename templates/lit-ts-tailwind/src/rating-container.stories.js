import { html } from 'lit';

import './rating-container';

export default {
  title: 'Components/Rating Container',
  argTypes: {
    productRatingChange: { action: 'product-rating-change' }
  }
};

const defaultArgs = {
  productId: 'storybook',
  rating: 3,
  clickable: false
};

const Template = (args) => html`<rating-container
  product-id=${args.productId}
  rating=${args.rating}
  ?clickable=${args.clickable}
  @product-rating-change=${args.productRatingChange}
></rating-container>`;

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Disappointed = Template.bind({});
Disappointed.args = { ...defaultArgs, rating: 1 };

export const VerySatisfied = Template.bind({});
VerySatisfied.args = { ...defaultArgs, rating: 5 };

export const Clickable = Template.bind({});
Clickable.args = { ...defaultArgs, clickable: true };
