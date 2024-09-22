import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import ProductSatisfaction from './ProductSatisfaction';

const meta: Meta<typeof ProductSatisfaction> = {
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
    productRatingChange: {
      action: 'productRatingChange'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ProductSatisfaction>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Storybook')).toBeInTheDocument();
    expect(canvas.getByText('Build component driven UIs faster')).toBeInTheDocument();
  }
};
