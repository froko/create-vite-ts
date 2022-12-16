import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import ProductSatisfaction from './ProductSatisfaction.vue';

export default {
  title: 'Components/Product Satisfaction',
  component: ProductSatisfaction,
  args: {
    product: {
      id: 'storybook',
      title: 'Storybook',
      url: 'https://storybook.js.org/',
      description: 'Build component driven UIs faster',
      rating: 3
    }
  },
  argTypes: {
    onProductRatingChange: {
      action: 'productRatingChange'
    }
  }
};

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Storybook')).toBeInTheDocument();
    expect(canvas.getByText('Build component driven UIs faster')).toBeInTheDocument();
  }
};
