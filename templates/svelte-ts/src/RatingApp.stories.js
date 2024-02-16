import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import RatingApp from './RatingApp.svelte';

export default {
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

export const Default = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Vite - Storybook')).toBeInTheDocument();

    await userEvent.click(canvas.getByTestId('vite-1'));
    await userEvent.click(canvas.getByTestId('storybook-1'));
    const overallSatisfaction2 = await canvas.findByTestId('overall-satisfaction-2');
    expect(overallSatisfaction2.firstElementChild).not.toHaveClass('checked');

    await userEvent.click(canvas.getByTestId('vite-4'));
    await userEvent.click(canvas.getByTestId('storybook-4'));
    const overallSatisfaction5 = await canvas.findByTestId('overall-satisfaction-5');
    expect(overallSatisfaction5.firstElementChild).not.toHaveClass('checked');
  }
};
