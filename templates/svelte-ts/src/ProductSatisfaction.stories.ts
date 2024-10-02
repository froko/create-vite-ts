import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';

import ProductSatisfaction from './ProductSatisfaction.svelte';

interface Args {
  product: {
    id: string;
    title: string;
    url: string;
    description: string;
    rating: number;
  };
  onProductRatingChange: (rating: number) => void;
}

const meta: Meta<typeof ProductSatisfaction & Args> = {
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

export default meta;
type Story = StoryObj<typeof ProductSatisfaction & Args>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Storybook')).toBeInTheDocument();
    expect(canvas.getByText('Build component driven UIs faster')).toBeInTheDocument();
  }
};
