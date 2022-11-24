import { html } from 'lit';

import './product-satisfaction';

export default {
  title: 'Components/Product Satisfaction'
};

const defaultArgs = {
  product: {
    id: 'storybook',
    title: 'Storybook',
    url: 'https://storybook.js.org/',
    description: 'Build component driven UIs faster',
    rating: 3
  }
};

const Template = (args) => html`<product-satisfaction .product=${args.product}></product-satisfaction>`;

export const Default = Template.bind({});
Default.args = defaultArgs;
