import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProductSatisfaction from './ProductSatisfaction';

export default {
  title: 'Components/Product Satisfaction',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    productRatingChange: { action: 'productRatingChange' }
  },
  component: ProductSatisfaction
} as ComponentMeta<typeof ProductSatisfaction>;

const Template: ComponentStory<typeof ProductSatisfaction> = (args) => <ProductSatisfaction {...args} />;

export const Default = Template.bind({});
Default.args = {
  product: {
    id: 'storybook',
    title: 'Storybook',
    url: 'https://storybook.js.org/',
    description: 'Build component driven UIs faster',
    rating: 3
  }
};
