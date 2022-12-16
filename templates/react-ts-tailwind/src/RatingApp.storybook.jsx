import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import RatingApp from './RatingApp';

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
    userEvent.click(canvas.getByTestId('vite-1'));
    userEvent.click(canvas.getByTestId('storybook-1'));
    expect(await canvas.findByTestId('overall-satisfaction-2')).not.toHaveClass('checked');
    userEvent.click(canvas.getByTestId('vite-4'));
    userEvent.click(canvas.getByTestId('storybook-4'));
    expect(await canvas.findByTestId('overall-satisfaction-5')).not.toHaveClass('checked');
  }
};
