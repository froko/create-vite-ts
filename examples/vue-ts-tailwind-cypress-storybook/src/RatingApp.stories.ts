import { expect, userEvent, within } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import RatingApp from './RatingApp.vue';

const meta: Meta<typeof RatingApp> = {
  title: 'Rating App',
  component: RatingApp,
  args: {
    products: [
      {
        id: 'vite',
        title: 'Vite',
        url: 'https://vitejs.dev/',
        description: 'Next Generation Frontend Tooling',
        rating: 3
      },
      {
        id: 'storybook',
        title: 'Storybook',
        url: 'https://storybook.js.org/',
        description: 'Build component driven UIs faster',
        rating: 3
      }
    ]
  }
};

export default meta;
type Story = StoryObj<typeof RatingApp>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Vite - Storybook')).toBeInTheDocument();
    await userEvent.click(canvas.getByTestId('vite-1'));
    await userEvent.click(canvas.getByTestId('storybook-1'));
    expect(await canvas.findByTestId('overall-satisfaction-2')).not.toHaveClass('text-orange-500');
    await userEvent.click(canvas.getByTestId('vite-4'));
    await userEvent.click(canvas.getByTestId('storybook-4'));
    expect(await canvas.findByTestId('overall-satisfaction-5')).not.toHaveClass('text-orange-500');
  }
};
