import { expect, fn, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import ProductSatisfaction from './ProductSatisfaction.vue';

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
    },
    onProductRatingChange: fn()
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
